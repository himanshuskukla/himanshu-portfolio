'use client'

import { Suspense, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion, useScroll, useTransform } from 'framer-motion'
import * as THREE from 'three'
import { ArrowRight } from 'lucide-react'

// Enhanced Particle Grid Background for Hero
function ParticleGrid() {
  const pointsRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      const time = state.clock.getElapsedTime()

      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i]
        const z = positions[i + 2]
        positions[i + 1] = Math.sin(x + time) * 0.5 + Math.cos(z + time * 0.5) * 0.5
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true
      pointsRef.current.rotation.y = time * 0.05
    }
  })

  const particleCount = 2000
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#3B82F6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

interface HeroClientProps {
  heroHeading: string
  heroSubheading: string
  heroCTA: string
  stats: Array<{ value: number; suffix: string; label: string }>
}

export default function HeroClient({ heroHeading, heroSubheading, heroCTA, stats }: HeroClientProps) {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Enhanced 3D Particle Background */}
      <div className="absolute inset-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <ParticleGrid />
          </Suspense>
        </Canvas>
      </div>

      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 max-w-7xl mx-auto px-8 py-32"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-7xl font-display font-bold mb-8 leading-tight">
              <span className="text-primary">{heroHeading}</span>
              <br />
              <span className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                {heroSubheading}
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-6 justify-center mt-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-bold flex items-center gap-2 text-lg"
            >
              {heroCTA} <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white/80 backdrop-blur-sm text-primary border-2 border-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all text-lg"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="stats-section max-w-6xl mx-auto"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-blue-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="glass-light p-6 rounded-2xl shadow-elegant text-center">
                  <div className="flex items-baseline justify-center mb-3">
                    <span className="text-5xl font-display font-bold text-accent">{stat.value}</span>
                    <span className="text-3xl font-display font-bold text-accent ml-1">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-3 bg-slate-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
