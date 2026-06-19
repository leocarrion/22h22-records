import { createFileRoute, Link } from '@tanstack/react-router'
import { Logo22h22Records } from '~/components/Logo22h22Records'
import { RecordsBottomNav } from '~/components/records'

export const Route = createFileRoute('/')({
  component: CollectionPage,
})

const vinyls = [
  {
    id: 'origins',
    label: 'Origins',
    color: '#D9622A',
    colorVar: 'var(--color-origins)',
    number: '01 / 05',
    href: '/origins' as const,
  },
  {
    id: 'becoming',
    label: 'Becoming',
    color: '#2A5BD9',
    colorVar: 'var(--color-becoming)',
    number: '02 / 05',
    href: '/becoming' as const,
  },
  {
    id: 'emerging',
    label: 'Emerging',
    color: '#C99A2B',
    colorVar: 'var(--color-emerging)',
    number: '03 / 05',
    href: '/emerging' as const,
  },
  {
    id: 'crossroads',
    label: 'Crossroads',
    color: '#6B7A3A',
    colorVar: 'var(--color-crossroads)',
    number: '04 / 05',
    href: '/crossroads' as const,
  },
  {
    id: 'homecoming',
    label: 'Homecoming',
    color: '#8B2A2A',
    colorVar: 'var(--color-homecoming)',
    number: '05 / 05',
    href: '/homecoming' as const,
  },
]

function VinylSleeve({ vinyl }: { vinyl: (typeof vinyls)[number] }) {
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
        {/* Sleeve card */}
        <div
          className="sleeve-card relative aspect-square w-full bg-paper-cream border border-ink-black/10 flex flex-col items-center justify-center overflow-hidden shadow-sm"
          style={{ color: vinyl.color }}
        >
          {/* Background sunburst watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none">
            <Logo22h22Records className="w-full h-full p-6" />
          </div>
          {/* Content */}
          <div className="z-10 text-center space-y-3 px-6">
            <Logo22h22Records className="w-24 h-24 mx-auto" />
            <div>
              <p className="text-[13px] font-bold tracking-[0.2em] uppercase" style={{ color: vinyl.color }}>
                {vinyl.label}
              </p>
            </div>
          </div>
          <div className="absolute bottom-4 right-4">
            <p className="text-[13px] font-medium opacity-40 text-ink-black">{vinyl.number}</p>
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
            Mon Picouze, ces cinq vinyles racontent ta vie en musique, à travers les personnes
            qui comptent pour toi.
          </p>
          <p className="text-[16px] leading-[24px] text-warm-muted italic">
            Une personne, un titre. Scanne le QR code de chaque pochette pour découvrir qui se
            cache derrière chaque morceau.
          </p>
          <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-ink-black mt-2">
            BON VOYAGE. — ADRIEN
          </p>
        </section>

        <div className="flex flex-col gap-12">
          {vinyls.map((vinyl) => (
            <VinylSleeve key={vinyl.id} vinyl={vinyl} />
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
      <RecordsBottomNav active="collection" />
    </div>
  )
}
