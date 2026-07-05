import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Hero particle field: ~2600 points drifting in a slow vortex,
 * tinted savage pink → violet → steel, leaning toward the cursor.
 */
export default function HeroCanvas() {
  const mount = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = mount.current
    if (!el) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, el.clientWidth / el.clientHeight, 0.1, 100)
    camera.position.z = 7

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(el.clientWidth, el.clientHeight)
    el.appendChild(renderer.domElement)

    const COUNT = 2600
    const positions = new Float32Array(COUNT * 3)
    const colors = new Float32Array(COUNT * 3)
    const seeds = new Float32Array(COUNT)

    const cPink = new THREE.Color('#ff1f70')
    const cViolet = new THREE.Color('#a06bff')
    const cSteel = new THREE.Color('#6fa8ff')
    const cBone = new THREE.Color('#f5f2ec')

    for (let i = 0; i < COUNT; i++) {
      const r = 3.2 + Math.random() * 5.5
      const theta = Math.random() * Math.PI * 2
      const y = (Math.random() - 0.5) * 5.5
      positions[i * 3] = Math.cos(theta) * r
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = Math.sin(theta) * r - 2
      seeds[i] = Math.random()

      const t = Math.random()
      const c =
        t < 0.45 ? cPink.clone() : t < 0.75 ? cViolet.clone() : t < 0.92 ? cSteel.clone() : cBone.clone()
      c.multiplyScalar(0.55 + Math.random() * 0.45)
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const mat = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    const points = new THREE.Points(geo, mat)
    scene.add(points)

    const mouse = { x: 0, y: 0 }
    const onMouse = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse, { passive: true })

    const onResize = () => {
      if (!el) return
      camera.aspect = el.clientWidth / el.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(el.clientWidth, el.clientHeight)
    }
    window.addEventListener('resize', onResize)

    const clock = new THREE.Clock()
    let raf = 0
    const base = geo.attributes.position.array as Float32Array

    const tick = () => {
      const t = clock.getElapsedTime()
      points.rotation.y = t * 0.045
      const pos = geo.attributes.position.array as Float32Array
      // gentle vertical bob per-particle (cheap, no shader needed)
      for (let i = 0; i < COUNT; i++) {
        pos[i * 3 + 1] = base[i * 3 + 1] + Math.sin(t * 0.6 + seeds[i] * Math.PI * 2) * 0.12
      }
      geo.attributes.position.needsUpdate = true
      camera.position.x += (mouse.x * 0.7 - camera.position.x) * 0.03
      camera.position.y += (-mouse.y * 0.45 - camera.position.y) * 0.03
      camera.lookAt(0, 0, -1)
      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }

    if (prefersReduced) {
      renderer.render(scene, camera)
    } else {
      tick()
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      geo.dispose()
      mat.dispose()
      renderer.dispose()
      el.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mount} className="hero-canvas" aria-hidden="true" />
}
