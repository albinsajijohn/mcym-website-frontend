import { motion } from 'framer-motion'
import { FiUser } from 'react-icons/fi'

// ADD PHOTOS: put images in public/team/ folder and update the 'image' field
const team = [
  { name: 'Fr. Name', role: 'Spiritual Director', image: '/team/director.jpg' },
  { name: 'Member Name', role: 'President', image: '/team/president.jpg' },
  { name: 'Member Name', role: 'Vice President', image: '/team/vp.jpg' },
  { name: 'Member Name', role: 'Secretary', image: '/team/secretary.jpg' },
  { name: 'Member Name', role: 'Treasurer', image: '/team/treasurer.jpg' },
  { name: 'Member Name', role: 'Joint Secretary', image: '/team/joint-secretary.jpg' },
]

function Avatar({ src, name }) {
  return (
    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary to-primary-light shadow-lg group-hover:shadow-xl group-hover:shadow-primary/20 transition-all">
      {src ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
            const icon = document.createElement('div')
            icon.innerHTML = '👤'
            icon.className = 'text-3xl'
            e.target.parentElement.appendChild(icon)
          }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <FiUser className="text-3xl text-white" />
        </div>
      )}
    </div>
  )
}

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="text-center group cursor-pointer"
            >
              <Avatar src={member.image} name={member.name} />
              <h4 className="font-semibold text-dark text-sm">{member.name}</h4>
              <p className="text-xs text-accent font-medium mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-10">
          💡 Add photos in <code className="bg-gray-100 px-2 py-0.5 rounded">public/team/</code> folder
        </p>
      </div>
    </section>
  )
}
