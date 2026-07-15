import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: i * 0.08, duration: 0.6, type: 'spring', stiffness: 100 },
  }),
}

export default function Hero() {
  const title = 'MCYM Pullad'

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Church image as background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed scale-105"
        style={{ backgroundImage: "url('/images/church.jpeg')" }}
      />

      {/* Dark overlay with flag color tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Flag color accent strips at top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 flex">
        <div className="flex-1 bg-[#C41E3A]" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-[#FFD700]" />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/6 w-64 h-64 bg-[#C41E3A]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="mb-6"
        >
          <img src="/images/logo.png" alt="MCYM Logo" className="w-24 h-24 sm:w-32 sm:h-32 mx-auto object-contain drop-shadow-[0_0_20px_rgba(255,215,0,0.4)]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#FFD700] font-semibold text-sm sm:text-base tracking-[0.3em] uppercase mb-6"
        >
          Malankara Catholic Youth Movement
        </motion.p>

        {/* Animated letter-by-letter title */}
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-black mb-6 flex flex-wrap justify-center">
          {title.split('').map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className={
                char === ' '
                  ? 'w-4 sm:w-6'
                  : i < 4
                    ? 'text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]'
                    : 'bg-gradient-to-b from-[#FFD700] to-[#FF6B35] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]'
              }
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        {/* Glowing underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="w-48 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-[#C41E3A] via-white to-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.5)]"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-4"
        >
          Together in Faith, Service & Leadership
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-white/50 text-sm mb-12"
        >
          St. Antony's Malankara Catholic Church, Pullad
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#initiatives"
            className="px-8 py-3.5 bg-[#C41E3A] hover:bg-[#A01830] text-white font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#C41E3A]/30"
          >
            Our Initiatives
          </a>
          <a
            href="#programs"
            className="px-8 py-3.5 border-2 border-[#FFD700]/50 text-[#FFD700] font-semibold rounded-full hover:bg-[#FFD700]/10 transition-all hover:scale-105"
          >
            View Programs
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <FiArrowDown className="text-2xl" />
      </motion.div>
    </section>
  )
}
