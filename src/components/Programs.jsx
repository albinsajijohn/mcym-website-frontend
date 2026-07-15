import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiClock, FiCheckCircle } from 'react-icons/fi'

const upcomingPrograms = [
  {
    title: 'Ivanian Symphony Season 3',
    date: 'July 19, 2026',
    time: '1:30 PM',
    venue: 'Parish Hall',
    description: 'The grand group song competition returns for its third season. Teams compete in an evening of music and harmony.',
    image: '/events/ivanian-symphony.jpg',
  },
  {
    title: 'Group Prayer',
    date: 'Every Month',
    time: 'Evening',
    venue: 'Unit Member Home',
    description: 'Monthly group prayer gathering at a unit member\'s home for fellowship and spiritual growth.',
    image: '/events/group-prayer.jpg',
  },
  {
    title: 'Holy Aradhana',
    date: 'Monthly',
    time: 'Sunday',
    venue: 'Church',
    description: 'Holy Aradhana led by MCYM members in the church. A time of worship and devotion together.',
    image: '/events/aradhana.jpg',
  },
  {
    title: 'Agape Food Distribution',
    date: 'Every 2nd Saturday',
    time: 'Morning',
    venue: 'Parish',
    description: 'Monthly food distribution to families in our community as part of our Agape initiative.',
    image: '/events/agape-distribution.jpg',
  },
]

const pastPrograms = [
  {
    title: 'Ivanian Symphony Season 2',
    date: '2025',
    venue: 'Parish Hall',
    description: 'Second season of our group song competition with amazing performances.',
    image: '/events/ivanian-symphony.jpg',
  },
  {
    title: 'Bag Distribution',
    date: 'May 2025',
    venue: 'Parish Hall',
    description: 'Annual distribution of school bags and supplies to students in need.',
    image: '/events/bag-distribution.jpg',
  },
  {
    title: 'Carol Service 2025',
    date: 'December 19-23, 2025',
    venue: 'Parish & Neighbourhood',
    description: 'Christmas carol singing and community outreach.',
    image: '/events/carol.jpg',
  },
]

function EventImage({ src, alt }) {
  return (
    <div className="relative h-44 overflow-hidden rounded-t-2xl bg-gray-100">
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => { e.target.style.display = 'none' }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
          <FiCalendar className="text-4xl text-gray-300" />
        </div>
      )}
    </div>
  )
}

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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingPrograms.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group overflow-hidden"
              >
                <EventImage src={program.image} alt={program.title} />
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-base font-bold text-dark group-hover:text-primary transition-colors">
                      {program.title}
                    </h4>
                    <span className="px-2 py-0.5 bg-teal/10 text-teal text-[10px] font-semibold rounded-full shrink-0 ml-2">
                      Upcoming
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{program.description}</p>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastPrograms.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-gray-300 transition-all group overflow-hidden"
              >
                <div className="h-32 overflow-hidden bg-gray-100">
                  {program.image ? (
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                      <FiCalendar className="text-3xl text-gray-300" />
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h4 className="text-base font-semibold text-gray-700 mb-2">{program.title}</h4>
                  <p className="text-gray-500 text-sm mb-3">{program.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <p className="flex items-center gap-1"><FiCalendar /> {program.date}</p>
                    <p className="flex items-center gap-1"><FiMapPin /> {program.venue}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
