import { motion } from 'framer-motion'
import { FiTarget, FiEye, FiStar } from 'react-icons/fi'

const items = [
  {
    icon: FiTarget,
    title: 'Our Mission',
    text: 'To nurture the spiritual, intellectual, and social growth of the youth through faith-based activities and community service.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: FiEye,
    title: 'Our Vision',
    text: 'A vibrant youth community rooted in the Malankara Catholic faith, leading with love, service, and unity.',
    color: 'text-teal',
    bg: 'bg-teal/10',
  },
  {
    icon: FiStar,
    title: 'Our Values',
    text: 'Faith, Fellowship, Service, Leadership, and Unity – guiding every initiative we undertake as a community.',
    color: 'text-purple',
    bg: 'bg-purple/10',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-purple font-semibold text-sm tracking-widest uppercase mb-3">Who We Are</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-dark mb-4">About MCYM</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Malankara Catholic Youth Movement – Pullad Unit
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="text-center p-8 rounded-2xl bg-cream hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                <item.icon className={`text-2xl ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
