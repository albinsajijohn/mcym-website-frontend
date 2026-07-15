import { motion } from 'framer-motion'

export default function Loader({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.5, duration: 0.6 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
    >
      {/* Church image background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/church.jpeg')" }}
      />
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Animated color rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border-2 border-dashed border-[#C41E3A]/40"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        className="absolute w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full border-2 border-dashed border-[#FFD700]/30"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[22rem] h-[22rem] sm:w-[32rem] sm:h-[32rem] rounded-full border border-white/10"
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -100 - Math.random() * 100],
            x: [0, (Math.random() - 0.5) * 200],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="absolute rounded-full"
          style={{
            width: 4 + Math.random() * 8,
            height: 4 + Math.random() * 8,
            background: ['#C41E3A', '#FFD700', '#FF6B35', '#00C9A7', '#7C3AED', '#ffffff'][i % 6],
            bottom: '40%',
          }}
        />
      ))}

      {/* Center content */}
      <div className="relative text-center">
        {/* Glowing circle behind logo */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-[#C41E3A]/30 via-[#FFD700]/20 to-[#FF6B35]/30 blur-xl"
        />

        {/* Logo */}
        <motion.img
          src="/images/logo.png"
          alt="MCYM"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 80 }}
          className="w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-6 relative drop-shadow-[0_0_30px_rgba(255,215,0,0.5)]"
        />

        {/* Text */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-4xl sm:text-5xl font-black text-white mb-2 relative"
        >
          MCYM{' '}
          <span className="bg-gradient-to-r from-[#FFD700] to-[#FF6B35] bg-clip-text text-transparent">
            Pullad
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-white/60 text-sm tracking-widest uppercase relative"
        >
          Together in Faith, Service & Leadership
        </motion.p>

        {/* Flag colored loading bar */}
        <div className="relative mt-8 w-48 sm:w-64 h-1.5 mx-auto rounded-full overflow-hidden bg-white/10">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, repeat: 2, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-r from-[#C41E3A] via-white to-[#FFD700] rounded-full"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5, 1] }}
          transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
          className="text-white/40 text-xs mt-4 relative tracking-wider"
        >
          Loading...
        </motion.p>
      </div>

      {/* Flag strip at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 flex">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex-1 bg-[#C41E3A] origin-left"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex-1 bg-white origin-left"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex-1 bg-[#FFD700] origin-left"
        />
      </div>
    </motion.div>
  )
}
