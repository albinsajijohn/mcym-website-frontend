import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiUsers, FiCalendar, FiAward, FiHeart } from 'react-icons/fi'

const stats = [
  { icon: FiUsers, value: 35, suffix: '+', label: 'Active Members' },
  { icon: FiCalendar, value: 20, suffix: '+', label: 'Events Per Year' },
  { icon: FiAward, value: 3, suffix: '', label: 'Seasons of Symphony' },
  { icon: FiHeart, value: 5, suffix: '', label: 'Ongoing Initiatives' },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary-dark via-primary to-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <stat.icon className="text-3xl text-accent mx-auto mb-3" />
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
