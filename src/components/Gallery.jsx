import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const photos = [
  { src: '/gallery/photo-1.jpeg', caption: 'MCYM Pullad' },
  { src: '/gallery/photo-2.jpeg', caption: 'MCYM Pullad' },
  { src: '/gallery/photo-3.jpeg', caption: 'MCYM Pullad' },
  { src: '/gallery/photo-4.jpeg', caption: 'MCYM Pullad' },
  { src: '/gallery/photo-5.jpeg', caption: 'MCYM Pullad' },
  { src: '/gallery/photo-6.jpeg', caption: 'MCYM Pullad' },
  { src: '/gallery/photo-7.jpeg', caption: 'MCYM Pullad' },
  { src: '/gallery/photo-8.jpeg', caption: 'MCYM Pullad' },
  { src: '/gallery/photo-9.jpeg', caption: 'MCYM Pullad' },
  { src: '/gallery/photo-10.jpeg', caption: 'MCYM Pullad' },
  { src: '/gallery/photo-11.jpeg', caption: 'MCYM Pullad' },
  { src: '/gallery/photo-12.jpeg', caption: 'MCYM Pullad' },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  const navigate = (dir) => {
    if (selected === null) return
    const next = selected + dir
    if (next >= 0 && next < photos.length) setSelected(next)
  }

  return (
    <section id="gallery" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Memories</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-dark mb-4">Photo Gallery</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Moments captured from our events and activities
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelected(i)}
              className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-square bg-gray-100"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="hidden items-center justify-center w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 text-gray-400 text-sm text-center p-4">
                {photo.caption}
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setSelected(null) }}
              className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl"
            >
              <FiX />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1) }}
              className="absolute left-4 text-white/70 hover:text-white text-3xl p-2"
            >
              <FiChevronLeft />
            </button>

            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[selected].src}
                alt={photos[selected].caption}
                className="w-full h-full object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 font-medium">
                {photos[selected].caption}
              </p>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); navigate(1) }}
              className="absolute right-4 text-white/70 hover:text-white text-3xl p-2"
            >
              <FiChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
