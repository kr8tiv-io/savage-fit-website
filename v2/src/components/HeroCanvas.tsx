import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Pastel aurora: a fullscreen quad running layered simplex noise that
 * drifts rose → lilac washes across the porcelain background.
 * Cursor adds a gentle lean. DPR capped for mobile GPUs.
 */

const VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`

const FRAG = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uAspect;

  // simplex-ish value noise
  vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }
  float noise(in vec2 p) {
    const float K1 = 0.366025404;
    const float K2 = 0.211324865;
    vec2 i = floor(p + (p.x + p.y) * K1);
    vec2 a = p - i + (i.x + i.y) * K2;
    vec2 o = (a.x > a.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec2 b = a - o + K2;
    vec2 c = a - 1.0 + 2.0 * K2;
    vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
    vec3 n = h * h * h * h * vec3(dot(a, hash(i)), dot(b, hash(i + o)), dot(c, hash(i + 1.0)));
    return dot(n, vec3(70.0));
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float amp = 0.55;
    for (int i = 0; i < 4; i++) {
      v += amp * noise(p);
      p *= 2.02;
      amp *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = vec2(uv.x * uAspect, uv.y);
    float t = uTime * 0.045;
    vec2 drift = uMouse * 0.12;

    float n1 = fbm(p * 1.15 + vec2(t, -t * 0.6) + drift);
    float n2 = fbm(p * 1.7 - vec2(t * 0.8, t * 0.4) - drift);

    vec3 porcelain = vec3(0.992, 0.984, 0.980);
    vec3 rose = vec3(0.957, 0.769, 0.878);
    vec3 lilac = vec3(0.835, 0.788, 0.949);
    vec3 peach = vec3(0.988, 0.895, 0.860);

    float wR = smoothstep(0.12, 0.85, n1) * 0.75;
    float wL = smoothstep(0.10, 0.9, n2) * 0.65;
    float wP = smoothstep(0.35, 0.95, fbm(p * 0.8 + vec2(-t * 0.5, t))) * 0.4;

    vec3 col = porcelain;
    col = mix(col, rose, wR);
    col = mix(col, lilac, wL);
    col = mix(col, peach, wP);

    // keep edges airy so content stays readable
    float vign = smoothstep(1.25, 0.35, distance(uv, vec2(0.5, 0.52)));
    col = mix(porcelain, col, vign * 0.85);

    gl_FragColor = vec4(col, 1.0);
  }
`

export default function HeroCanvas() {
  const mount = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = mount.current
    if (!el) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const renderer = new THREE.WebGLRenderer({ antialias: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(el.clientWidth, el.clientHeight)
    el.appendChild(renderer.domElement)

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uAspect: { value: el.clientWidth / Math.max(el.clientHeight, 1) },
    }

    const mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms })
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat)
    scene.add(quad)

    // fine sparkle dust drifting upward — subtle depth over the aurora
    const COUNT = 110
    const pos = new Float32Array(COUNT * 3)
    const col = new Float32Array(COUNT * 3)
    const speed = new Float32Array(COUNT)
    const cRose = new THREE.Color('#d94f96')
    const cLilac = new THREE.Color('#8a63d2')
    const cWhite = new THREE.Color('#ffffff')
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 2
      pos[i * 3 + 1] = (Math.random() - 0.5) * 2
      pos[i * 3 + 2] = 0.1
      speed[i] = 0.02 + Math.random() * 0.05
      const t = Math.random()
      const c = (t < 0.4 ? cRose : t < 0.75 ? cLilac : cWhite).clone()
      c.lerp(cWhite, 0.35 + Math.random() * 0.3)
      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    const dustGeo = new THREE.BufferGeometry()
    dustGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    dustGeo.setAttribute('color', new THREE.BufferAttribute(col, 3))
    const dustMat = new THREE.PointsMaterial({
      size: 3.2,
      sizeAttenuation: false,
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
    })
    const dust = new THREE.Points(dustGeo, dustMat)
    scene.add(dust)

    const target = new THREE.Vector2(0, 0)
    const onMouse = (e: MouseEvent) => {
      target.set(e.clientX / window.innerWidth - 0.5, e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('mousemove', onMouse, { passive: true })

    const onResize = () => {
      renderer.setSize(el.clientWidth, el.clientHeight)
      uniforms.uAspect.value = el.clientWidth / Math.max(el.clientHeight, 1)
    }
    window.addEventListener('resize', onResize)

    const clock = new THREE.Clock()
    let raf = 0
    const tick = () => {
      const dt = Math.min(clock.getDelta(), 0.05)
      uniforms.uTime.value = clock.getElapsedTime()
      uniforms.uMouse.value.lerp(target, 0.04)
      const p = dustGeo.attributes.position.array as Float32Array
      for (let i = 0; i < COUNT; i++) {
        p[i * 3 + 1] += speed[i] * dt
        p[i * 3] += Math.sin(uniforms.uTime.value * 0.4 + i) * 0.00018
        if (p[i * 3 + 1] > 1.05) {
          p[i * 3 + 1] = -1.05
          p[i * 3] = (Math.random() - 0.5) * 2
        }
      }
      dustGeo.attributes.position.needsUpdate = true
      dust.position.x = uniforms.uMouse.value.x * 0.05
      dust.position.y = -uniforms.uMouse.value.y * 0.04
      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }

    if (prefersReduced) {
      uniforms.uTime.value = 12
      renderer.render(scene, camera)
    } else {
      tick()
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      quad.geometry.dispose()
      mat.dispose()
      dustGeo.dispose()
      dustMat.dispose()
      renderer.dispose()
      el.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mount} className="hero-canvas" aria-hidden="true" />
}
