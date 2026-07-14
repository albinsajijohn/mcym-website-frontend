import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiInstagram } from 'react-icons/fi'

const contactItems = [
  {
    icon: FiMapPin,
    title: 'Location',
    lines: ['St. Antony\'s Malankara Catholic Church', 'Pullad, Pathanamthitta, Kerala'],
  },
  { icon: FiPhone, title: 'Phone', lines: ['+91 XXXXX XXXXX'] },
  { icon: FiMail, title: 'Email', lines: ['mcympullad@gmail.com'] },
  { icon: FiInstagram, title: 'Social', lines: ['@mcympullad'] },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">Reach Out</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400">Get in touch with MCYM Pullad</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-2xl border border-white/10 hover:border-white/20 bg-white/5 backdrop-blur-sm transition-all"
            >
              <item.icon className="text-2xl text-teal mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">{item.title}</h4>
              {item.lines.map((line, j) => (
                <p key={j} className="text-gray-400 text-sm">{line}</p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
