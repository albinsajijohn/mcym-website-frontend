import { FiInstagram, FiYoutube, FiPhone } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="relative bg-primary-dark text-white pt-16 pb-8 px-4">
      {/* Wave separator */}
      <div className="absolute -top-1 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0 60V20C240 0 480 40 720 30C960 20 1200 0 1440 20V60H0Z"
            fill="currentColor"
            className="text-primary-dark"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo.png" alt="MCYM" className="w-10 h-10 object-contain" />
              <p className="text-xl font-bold">
                MCYM <span className="text-accent">Pullad</span>
              </p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Malankara Catholic Youth Movement – Pullad Unit. Together in Faith, Service & Leadership.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white/80">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-white/50">
              {['Home', 'Initiatives', 'Programs', 'Gallery', 'About', 'Team', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-accent transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-white/80">Follow Us</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/mcym_pullad?igsh=a3k0YmFtc3V0anlx" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <FiInstagram />
              </a>
              <a href="tel:+917306145461" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <FiPhone />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} MCYM Pullad. All rights reserved.
          </p>
          <div className="flex gap-1">
            <span className="w-4 h-1 rounded-full bg-[#C41E3A]" />
            <span className="w-4 h-1 rounded-full bg-white" />
            <span className="w-4 h-1 rounded-full bg-[#FFD700]" />
          </div>
        </div>
      </div>
    </footer>
  )
}
