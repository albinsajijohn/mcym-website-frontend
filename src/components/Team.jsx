import { motion } from 'framer-motion'

const team = [
  { name: 'Fr. Philip Anjilimoottil', role: ' Director', image: '/team/director.jpeg' },
  { name: 'Albin Saji', role: 'President', image: '/team/president.jpeg' },
  { name: 'Sneha Vinod', role: 'Vice President', image: '/team/vice-president.jpeg' },
  { name: 'Teena KS', role: 'Secretary', image: '/team/secretary.jpeg' },
  { name: 'Abin PS', role: 'Joint Secretary', image: '/team/joint-secretary.jpeg' },
  { name: 'Midhun John', role: 'Treasurer', image: '/team/treasurer.jpeg' },
  { name: 'Pramod P Markose', role: 'Animator', image: '/team/animator-1.jpeg' },
  { name: 'Bindhumol PS', role: 'Animator', image: '/team/animator-2.jpeg' },
  { name: 'Axa Shibi', role: 'Syndicate', image: '/team/syndicate-1.jpeg' },
  { name: 'Jobin Joy', role: 'Syndicate', image: '/team/syndicate-2.jpeg' },
]

export default function Team() {
  return (
    <section id="team" className="py-24 px-4 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">Leadership</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-dark mb-4">Office Bearers</h2>
          <p className="text-gray-500">Meet the team leading MCYM Pullad</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500">
                {/* Image container - portrait aspect ratio */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Info that slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-bold text-sm">{member.name}</p>
                  <p className="text-accent text-xs font-medium">{member.role}</p>
                </div>
              </div>

              {/* Info below card (always visible) */}
              <div className="mt-3 text-center">
                <h4 className="font-semibold text-dark text-sm group-hover:text-primary transition-colors">{member.name}</h4>
                <p className="text-xs text-accent font-medium mt-0.5">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
