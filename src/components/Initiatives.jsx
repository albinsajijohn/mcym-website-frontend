import { motion } from 'framer-motion'
import { FiHeart, FiDroplet, FiShield, FiMusic } from 'react-icons/fi'

const initiatives = [
  {
    name: 'Ashraya',
    tagline: 'Medical Aid for the Needy',
    description:
      'Providing medical assistance and support to those who cannot afford healthcare. We help with medicines, hospital bills, and health camps.',
    icon: FiShield,
    color: 'from-teal to-teal-dark',
    bgGlow: 'bg-teal/10',
    borderColor: 'border-teal/30',
    iconBg: 'bg-teal/20',
    iconColor: 'text-teal',
  },
  {
    name: 'Agape',
    tagline: 'Food for the Hungry',
    description:
      'Every month, we provide food kits and meals to the poor and underprivileged families in our community. Love expressed through sharing.',
    icon: FiHeart,
    color: 'from-accent to-gold',
    bgGlow: 'bg-accent/10',
    borderColor: 'border-accent/30',
    iconBg: 'bg-accent/20',
    iconColor: 'text-accent',
  },
  {
    name: 'Jeevanam',
    tagline: 'Gift of Blood, Gift of Life',
    description:
      'A blood donation campaign where our members donate blood to those in need. Anyone can reach out to us when they require blood.',
    icon: FiDroplet,
    color: 'from-purple to-purple-light',
    bgGlow: 'bg-purple/10',
    borderColor: 'border-purple/30',
    iconBg: 'bg-purple/20',
    iconColor: 'text-purple',
  },
  {
    name: 'Ivanian Symphony',
    tagline: 'Annual Group Song Competition',
    description:
      'Our signature yearly event — a grand group song competition that brings together talent, teamwork, and the spirit of music.',
    icon: FiMusic,
    color: 'from-gold to-accent',
    bgGlow: 'bg-gold/10',
    borderColor: 'border-gold/30',
    iconBg: 'bg-gold/20',
    iconColor: 'text-gold',
  },
]

export default function Initiatives() {
  return (
    <section id="initiatives" className="py-24 px-4 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Our Initiatives</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ongoing programs that define who we are — serving the community with love and compassion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative group rounded-2xl border ${item.borderColor} ${item.bgGlow} backdrop-blur-sm p-7 cursor-pointer transition-all duration-300 hover:shadow-2xl`}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <item.icon className={`text-xl ${item.iconColor}`} />
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
              <p className={`text-xs font-medium ${item.iconColor} mb-3`}>{item.tagline}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>

              <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
