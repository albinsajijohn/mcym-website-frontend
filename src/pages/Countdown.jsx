import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Countdown() {
  const [phase, setPhase] = useState('intro') // intro | counting | launched
  const [count, setCount] = useState(10)
  const navigate = useNavigate()

  const handleLaunch = () => {
    setPhase('counting')
    let current = 10
    setCount(10)

    const timer = setInterval(() => {
      current -= 1
      if (current <= 0) {
        clearInterval(timer)
        setPhase('launched')
        setTimeout(() => navigate('/'), 3000)
      } else {
        setCount(current)
      }
    }, 1000)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Church background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/church.jpeg')" }}
      />
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      {/* Rotating rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[500px] h-[500px] rounded-full border border-dashed border-[#FFD700]/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[700px] h-[700px] rounded-full border border-dashed border-[#C41E3A]/20"
      />

      {/* Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -120, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: i * 0.4 }}
          className="absolute rounded-full"
          style={{
            width: 4 + Math.random() * 6,
            height: 4 + Math.random() * 6,
            background: ['#C41E3A', '#FFD700', '#FF6B35', '#00C9A7'][i % 4],
            left: `${10 + Math.random() * 80}%`,
            bottom: '20%',
          }}
        />
      ))}

      <AnimatePresence mode="wait">

        {/* INTRO PHASE */}
        {phase === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative text-center px-4"
          >
            <motion.img
              src="/images/logo.png"
              alt="MCYM"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 80 }}
              className="w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-4 drop-shadow-[0_0_30px_rgba(255,215,0,0.5)]"
            />
            <p className="text-[#FFD700] text-sm tracking-[0.3em] uppercase mb-2">
              Malankara Catholic Youth Movement
            </p>
            <h1 className="text-4xl sm:text-6xl font-black text-white mb-2">
              MCYM{' '}
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FF6B35] bg-clip-text text-transparent">
                Pullad
              </span>
            </h1>
            <p className="text-white/50 text-sm sm:text-base mb-10">
              Official Website Inauguration
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLaunch}
              className="px-12 py-4 bg-gradient-to-r from-[#C41E3A] to-[#FF6B35] text-white font-bold text-xl rounded-full shadow-2xl shadow-[#C41E3A]/40 hover:shadow-[#C41E3A]/60 transition-all"
            >
              🚀 Launch Website
            </motion.button>
            <p className="text-white/30 text-xs mt-4">Press to inaugurate</p>
          </motion.div>
        )}

        {/* COUNTING PHASE */}
        {phase === 'counting' && (
          <motion.div
            key="counting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative text-center"
          >
            <p className="text-white/60 text-lg tracking-widest uppercase mb-8">Launching in</p>

            <AnimatePresence mode="wait">
              <motion.div
                key={count}
                initial={{ scale: 2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.3, opacity: 0 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
                className="relative"
              >
                {/* Glowing ring around number */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div
                    className="rounded-full border-4 border-[#FFD700]"
                    style={{ width: 180, height: 180 }}
                  />
                </motion.div>

                <span
                  className="text-[10rem] sm:text-[14rem] font-black leading-none bg-gradient-to-b from-white to-[#FFD700] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,215,0,0.5)]"
                >
                  {count}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="flex gap-2 justify-center mt-8">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  animate={{
                    backgroundColor: i >= count - 1 ? '#FFD700' : 'rgba(255,255,255,0.2)',
                    scale: i === count - 1 ? 1.5 : 1,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* LAUNCHED PHASE */}
        {phase === 'launched' && (
          <motion.div
            key="launched"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative text-center"
          >
            {/* Burst effect */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos((i / 12) * Math.PI * 2) * 150,
                  y: Math.sin((i / 12) * Math.PI * 2) * 150,
                }}
                transition={{ duration: 1, delay: i * 0.05 }}
                className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full"
                style={{
                  background: ['#C41E3A', '#FFD700', '#FF6B35', '#00C9A7', '#ffffff'][i % 5],
                }}
              />
            ))}

            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.3, 1] }}
              transition={{ duration: 0.4, repeat: 5 }}
              className="text-8xl mb-6"
            >
              🎉
            </motion.div>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-4">
              We're <span className="text-[#FFD700]">Live!</span>
            </h2>
            <p className="text-white/60 text-lg">Redirecting to the website...</p>
          </motion.div>
        )}

      </AnimatePresence>

      {/* Flag strip bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 flex">
        <div className="flex-1 bg-[#C41E3A]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#FFD700]" />
      </div>
    </div>
  )
}
