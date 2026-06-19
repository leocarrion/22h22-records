import { createFileRoute, Link } from '@tanstack/react-router'
import { Logo22h22Records } from '~/components/Logo22h22Records'

export const Route = createFileRoute('/')({
  component: CollectionPage,
})

const vinyls = [
  {
    id: 'origins',
    label: 'Origins',
    color: '#C65D3B',
    number: '01 / 05',
    href: '/origins' as const,
    frontImg: '/FRONT%20VINYLE%201.png',
  },
  {
    id: 'becoming',
    label: 'Becoming',
    color: '#1D4ED8',
    number: '02 / 05',
    href: '/becoming' as const,
    frontImg: '/FRONT%20VINYLE%202.png',
  },
  {
    id: 'emerging',
    label: 'Emerging',
    color: '#7856AF',
    number: '03 / 05',
    href: '/emerging' as const,
    frontImg: '/FRONT%20VINYLE%203.png',
  },
  {
    id: 'crossroads',
    label: 'Crossroads',
    color: '#68703E',
    number: '04 / 05',
    href: '/crossroads' as const,
    frontImg: '/FRONT%20VINYLE%204.png',
  },
  {
    id: 'homecoming',
    label: 'Homecoming',
    color: '#7A1F1F',
    number: '05 / 05',
    href: '/homecoming' as const,
    frontImg: '/FRONT%20VINYLE%205.png',
  },
]

function VinylSleeve({ vinyl, index }: { vinyl: (typeof vinyls)[number]; index: number }) {
  return (
    <Link to={vinyl.href} className="w-full block">
      <div className="sleeve-wrapper relative w-full cursor-pointer">
        {/* Vinyl record hidden behind sleeve, slides out on hover */}
        <div className="sleeve-vinyl absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[88%] aspect-square bg-zinc-900 rounded-full border-[10px] border-zinc-800 flex items-center justify-center shadow-xl">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-black/10"
              style={{ backgroundColor: vinyl.color }}
            >
              <span className="text-[8px] font-bold text-white tracking-widest">SIDE A</span>
            </div>
          </div>
        </div>
        {/* Sleeve card — real cover artwork */}
        <div className="sleeve-card relative aspect-square w-full overflow-hidden shadow-sm">
          <img
            src={vinyl.frontImg}
            alt={`${vinyl.label} cover`}
            className="w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
            <p className="text-[11px] font-medium text-white/80 tracking-widest">{vinyl.number}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

function CollectionPage() {
  return (
    <div
      className="min-h-screen bg-warm-surface text-ink-black"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 z-[60] bg-warm-surface border-b border-ink-black/10">
        <div className="max-w-lg mx-auto flex justify-center items-center px-6 py-4">
          <h1
            className="font-sans text-xl font-bold text-ink-black uppercase"
            style={{ letterSpacing: '-0.03em' }}
          >
            22H22 RECORDS
          </h1>
        </div>
      </header>

      <main className="pt-[72px] pb-24 px-6 max-w-lg mx-auto">
        <section className="mt-10 mb-12 text-center flex flex-col items-center gap-4">
          <Logo22h22Records className="w-20 h-auto" />
          <p
            className="text-[18px] leading-[28px] text-ink-black"
            style={{ letterSpacing: '-0.01em' }}
          >
            Mon Picouze,
          </p>
          <p
            className="text-[18px] leading-[28px] text-ink-black"
            style={{ letterSpacing: '-0.01em' }}
          >
            Ces cinq vinyles racontent ta vie en musique, à travers les personnes qui comptent pour toi. Une personne, un titre.
          </p>
          <p className="text-[16px] leading-[24px] text-warm-muted italic">
            Scanne le QR code de chaque pochette pour découvrir qui se cache derrière chaque morceau.
          </p>
          <p className="text-[14px] font-medium text-ink-black mt-1">
            Bon voyage.<br />
            <span className="font-bold">— Julie</span>
          </p>
        </section>

        <div className="flex flex-col gap-12">
          {vinyls.map((vinyl, i) => (
            <VinylSleeve key={vinyl.id} vinyl={vinyl} index={i} />
          ))}
        </div>

        <footer className="mt-16 mb-10 text-center">
          <div className="h-px w-full bg-ink-black/10 mb-8" />
          <Logo22h22Records className="w-10 h-auto mx-auto mb-3 opacity-30" />
          <p className="text-[13px] font-medium tracking-widest opacity-50 leading-relaxed">
            MADE IN PARIS / DESIGNED FOR MEMORY
            <br />© 2025 22H22 RECORDS
          </p>
        </footer>
      </main>
    </div>
  )
}
