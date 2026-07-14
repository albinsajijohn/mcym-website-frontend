import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiClock, FiCheckCircle } from 'react-icons/fi'

const upcomingPrograms = [
  {
    title: 'Youth Gathering',
    date: 'July 20, 2025',
    time: '5:00 PM',
    venue: 'Parish Hall',
    description: 'Monthly youth gathering with prayer, discussion and fellowship.',
  },
  {
    title: 'Choir Practice',
    date: 'July 22, 2025',
    time: '6:30 PM',
    venue: 'Church',
    description: 'Weekly choir practice for Sunday liturgy.',
  },
  {
    title: 'Annual Retreat',
    date: 'August 15-17, 2025',
    time: 'Full Day',
    venue: 'Retreat Centre',
    description: 'Three-day spiritual retreat for all MCYM members.',
  },
]

const pastPrograms = [
  {
    title: 'Sports Meet 2025',
    date: 'June 28, 2025',
    venue: 'Parish Ground',
    description: 'Annual sports competition among MCYM units.',
  },
  {
    title: 'Christmas Carol',
    date: 'December 24, 2024',
    venue: 'Parish & Neighbourhood',
    description: 'Christmas carol singing and community outreach.',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-24 px-4 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Events</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-dark mb-4">Programs</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Stay updated with our upcoming events and past activities
          </p>
        </motion.div>

        {/* Upcoming */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal" />
            </span>
            Upcoming Programs
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingPrograms.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-bold text-dark group-hover:text-primary transition-colors">
                    {program.title}
                  </h4>
                  <span className="px-2.5 py-1 bg-teal/10 text-teal text-xs font-semibold rounded-full">
                    Upcoming
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">{program.description}</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p className="flex items-center gap-2">
                    <FiCalendar className="text-accent" /> {program.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <FiClock className="text-accent" /> {program.time}
                  </p>
                  <p className="flex items-center gap-2">
                    <FiMapPin className="text-accent" /> {program.venue}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past */}
        <div>
          <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-3">
            <FiCheckCircle className="text-gray-400" />
            Past Programs
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {pastPrograms.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 5 }}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all"
              >
                <h4 className="text-lg font-semibold text-gray-700 mb-2">{program.title}</h4>
                <p className="text-gray-500 text-sm mb-3">{program.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <p className="flex items-center gap-1"><FiCalendar /> {program.date}</p>
                  <p className="flex items-center gap-1"><FiMapPin /> {program.venue}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
