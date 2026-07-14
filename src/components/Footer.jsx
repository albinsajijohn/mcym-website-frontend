export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-10 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-2xl font-bold mb-2">
          MCYM <span className="text-accent">Pullad</span>
        </p>
        <p className="text-white/50 text-sm mb-6">
          Malankara Catholic Youth Movement – Pullad Unit
        </p>
        <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-teal mx-auto mb-6 rounded-full" />
        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} MCYM Pullad. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
