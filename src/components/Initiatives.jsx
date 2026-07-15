import { motion } from 'framer-motion'
import { FiHeart, FiDroplet, FiShield, FiMusic, FiGift } from 'react-icons/fi'

const initiatives = [
  {
    name: 'Ashraya',
    tagline: 'Medical Aid for the Needy',
    description:
      'Providing medical assistance and support to those who cannot afford healthcare. We help with medicines, hospital bills, and health camps.',
    icon: FiShield,
    image: '/initiatives/ashraya.jpg',
    color: 'from-teal to-teal-dark',
    iconColor: 'text-teal',
    badge: 'bg-teal/20 text-teal',
  },
  {
    name: 'Agape',
    tagline: 'Food for the Hungry',
    description:
      'Every month, we provide food kits and meals to families in our community. Love expressed through sharing.',
    icon: FiHeart,
    image: '/initiatives/agape.jpg',
    color: 'from-accent to-gold',
    iconColor: 'text-accent',
    badge: 'bg-accent/20 text-accent',
  },
  {
    name: 'Jeevanam',
    tagline: 'Gift of Blood, Gift of Life',
    description:
      'A blood donation campaign where our members donate blood to those in need. Anyone can reach out to us when they require blood.',
    icon: FiDroplet,
    image: '/initiatives/jeevanam.jpg',
    color: 'from-purple to-purple-light',
    iconColor: 'text-purple',
    badge: 'bg-purple/20 text-purple',
  },
  {
    name: 'Ivanian Symphony',
    tagline: 'Annual Group Song Competition',
    description:
      'Our signature yearly event — a grand group song competition that brings together talent, teamwork, and the spirit of music.',
    icon: FiMusic,
    image: '/initiatives/ivanian.jpg',
    color: 'from-gold to-accent',
    iconColor: 'text-gold',
    badge: 'bg-gold/20 text-gold',
  },
  {
    name: 'Bag Distribution',
    tagline: 'Every May — Back to School',
    description:
      'Every year in May, we distribute school bags and supplies to students, helping them start the academic year with confidence.',
    icon: FiGift,
    image: '/initiatives/bag-distribution.jpg',
    color: 'from-primary-light to-teal',
    iconColor: 'text-primary-light',
    badge: 'bg-primary-light/20 text-primary-light',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-30 group-hover:opacity-50 transition-opacity`} />
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${item.badge} backdrop-blur-sm`}>
                  <item.icon className="inline mr-1 text-xs" />
                  {item.name}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                <p className={`text-xs font-medium ${item.iconColor} mb-3`}>{item.tagline}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>

              {/* Bottom accent */}
              <div className={`h-0.5 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
