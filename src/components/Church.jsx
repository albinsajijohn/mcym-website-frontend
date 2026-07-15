import { motion } from 'framer-motion'

export default function Church() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background image with parallax-like fixed effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/church.jpeg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Decorative top/bottom fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative text-center px-4 max-w-3xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto mb-8"
        />

        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Our Parish
        </h2>
        <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-6">
          St. Antony's Malankara Catholic Church, Pullad
        </p>
        <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Rooted in faith and tradition, our parish is the spiritual home where MCYM Pullad was born and continues to grow in service and fellowship.
        </p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto mt-8"
        />
      </motion.div>
    </section>
  )
}
