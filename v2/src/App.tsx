import { Routes, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import SmoothScroll from './lib/SmoothScroll'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Home from './pages/Home'
import Subscription from './pages/Subscription'
import Training from './pages/Training'
import Challenges from './pages/Challenges'
import SpringAesthetic from './pages/SpringAesthetic'
import Products from './pages/Products'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()

  return (
    <SmoothScroll>
      <div className="noise" />
      <Cursor />
      <Preloader />
      <Nav />
      <motion.div
        key={`veil-${location.pathname}`}
        className="veil"
        initial={{ y: 0 }}
        animate={{ y: '-101%' }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
      />
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/training" element={<Training />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/spring-aesthetic" element={<SpringAesthetic />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </motion.main>
    </SmoothScroll>
  )
}
