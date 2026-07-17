import { QRCodeSVG } from 'qrcode.react'
import { useRef } from 'react'

export default function QRPoster() {
  const posterRef = useRef()

  const handlePrint = () => window.print()

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center p-8 gap-6">
      <button
        onClick={handlePrint}
        className="print:hidden px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors"
      >
        🖨️ Print / Save as PDF
      </button>

      {/* Poster */}
      <div
        ref={posterRef}
        className="w-[400px] sm:w-[500px] bg-white rounded-3xl overflow-hidden shadow-2xl print:shadow-none print:rounded-none"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {/* Flag strip top */}
        <div className="flex h-3">
          <div className="flex-1 bg-[#C41E3A]" />
          <div className="flex-1 bg-white border-y border-gray-200" />
          <div className="flex-1 bg-[#FFD700]" />
        </div>

        {/* Header */}
        <div className="bg-gradient-to-br from-[#0F2440] to-[#1E3A5F] px-8 pt-8 pb-10 text-center">
          <img
            src="/images/logo.png"
            alt="MCYM"
            className="w-24 h-24 mx-auto mb-4 object-contain drop-shadow-lg"
          />
          <h1 className="text-3xl font-black text-white mb-1">
            MCYM <span className="text-[#FFD700]">Pullad</span>
          </h1>
          <p className="text-white/60 text-xs tracking-widest uppercase">
            Malankara Catholic Youth Movement
          </p>
        </div>

        {/* QR Section */}
        <div className="px-8 py-8 text-center">
          <p className="text-gray-500 text-sm mb-6 font-medium">
            Scan to visit our official website
          </p>

          <div className="inline-block p-4 bg-white rounded-2xl shadow-lg border-4 border-[#0F2440]">
            <QRCodeSVG
              value="https://mcympullad.org"
              size={200}
              bgColor="#ffffff"
              fgColor="#0F2440"
              level="H"
              imageSettings={{
                src: '/images/logo.png',
                x: undefined,
                y: undefined,
                height: 40,
                width: 40,
                excavate: true,
              }}
            />
          </div>

          <div className="mt-6 px-4 py-3 bg-gray-50 rounded-xl border border-gray-100">
            <p className="text-[#0F2440] font-bold text-lg tracking-wide">
              🌐 mcympullad.org
            </p>
          </div>
        </div>

        {/* Initiatives */}
        <div className="px-8 pb-6">
          <div className="grid grid-cols-2 gap-2 text-center">
            {['Ashraya', 'Agape', 'Jeevanam', 'Ivanian Symphony'].map((item) => (
              <div key={item} className="bg-[#0F2440]/5 rounded-xl py-2 px-3">
                <p className="text-[#0F2440] text-xs font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#0F2440] px-8 py-4 text-center">
          <p className="text-white/50 text-xs">
            St. Antony's Malankara Catholic Church, Pullad
          </p>
          <p className="text-[#FFD700] text-xs font-medium mt-1">
            Together in Faith, Service & Leadership
          </p>
        </div>

        {/* Flag strip bottom */}
        <div className="flex h-3">
          <div className="flex-1 bg-[#C41E3A]" />
          <div className="flex-1 bg-white border-y border-gray-200" />
          <div className="flex-1 bg-[#FFD700]" />
        </div>
      </div>

      <p className="print:hidden text-gray-500 text-sm text-center max-w-sm">
        Click "Print / Save as PDF" to save this poster. Print it on A4 or A5 paper for the inauguration.
      </p>
    </div>
  )
}
