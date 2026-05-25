import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/a-propos', label: 'À propos' },
    { to: '/approches', label: 'Approches' },
    { to: '/tarifs-psy-amiens', label: 'Tarifs' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-offwhite/90 backdrop-blur-md border-b border-sage/20">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col group">
          <span className="text-xl font-serif font-bold text-sage leading-tight group-hover:text-sage/80 transition-colors">Sylviane Bouhey</span>
          <span className="text-xs uppercase tracking-widest text-charcoal/60">Psychopraticienne</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              activeProps={{ className: 'text-sage font-bold' }}
              inactiveProps={{ className: 'hover:text-sage transition-colors text-charcoal/80' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="tel:0686105980" 
            className="flex items-center gap-2 bg-sage text-white px-5 py-2.5 rounded-full font-semibold hover:bg-sage/90 transition-all shadow-sm active:scale-95"
          >
            <Phone size={18} />
            <span className="hidden sm:inline">06 86 10 59 80</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-charcoal hover:text-sage transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-sage/20 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-charcoal/80 hover:text-sage transition-colors border-b border-sage/5 pb-2"
                activeProps={{ className: 'text-sage font-bold' }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <a 
                href="tel:0686105980" 
                className="flex items-center justify-center gap-2 bg-sage/10 text-sage p-4 rounded-xl font-bold hover:bg-sage/20 transition-all"
              >
                <Phone size={20} />
                Appeler le 06 86 10 59 80
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
