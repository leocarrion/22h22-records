import { createFileRoute, Link } from '@tanstack/react-router'
import { RecordsHeader, RecordsBottomNav, SunburstIcon } from '~/components/records'

export const Route = createFileRoute('/')({
  component: CollectionPage,
})

const vinyls = [
  {
    id: 'origins',
    label: 'Origins.',
    colorClass: 'text-origins-orange',
    color: '#D9622A',
    number: '01 / 04',
    href: '/origins',
  },
  {
    id: 'becoming',
    label: 'Becoming.',
    colorClass: 'text-becoming-blue',
    color: '#2A5BD9',
    number: '02 / 04',
    href: '/becoming',
  },
  {
    id: 'crossroads',
    label: 'Crossroads.',
    colorClass: 'text-crossroads-olive',
    color: '#6B7A3A',
    number: '03 / 04',
    href: '/crossroads',
  },
  {
    id: 'homecoming',
    label: 'Homecoming.',
    colorClass: 'text-homecoming-red',
    color: '#8B2A2A',
    number: '04 / 04',
    href: '/homecoming',
  },
]

function VinylSleeve({ vinyl }: { vinyl: (typeof vinyls)[number] }) {
  return (
    <Link to={vinyl.href as '/origins'} className="w-full block">
      <div className="sleeve-wrapper relative w-full cursor-pointer">
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
        <div className="sleeve-card relative aspect-square w-full bg-paper-cream border border-ink-black/10 flex flex-col items-center justify-center overflow-hidden shadow-sm">
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <SunburstIcon color={vinyl.color} className="w-[280px] h-[280px]" slow />
          </div>
          <div className="z-10 text-center space-y-2">
            <div className="flex flex-col items-center">
              <SunburstIcon color={vinyl.color} className="w-20 h-20" />
            </div>
            <div className="pt-4">
              <h2
                className="font-sans text-[40px] font-bold uppercase leading-none"
                style={{ letterSpacing: '-0.04em' }}
              >
                22H22
              </h2>
              <p className="text-[12px] font-bold tracking-[0.1em] border-t border-ink-black pt-1 mt-1 inline-block">
                RECORDS
              </p>
            </div>
            <div className="pt-2">
              <p
                className={`text-[24px] font-bold italic leading-tight ${vinyl.colorClass}`}
                style={{ letterSpacing: '-0.02em' }}
              >
                {vinyl.label}
              </p>
            </div>
          </div>
          <div className="absolute bottom-4 right-4">
            <p className="text-[13px] font-medium opacity-50">{vinyl.number}</p>
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
      <RecordsHeader />
      <main className="pt-[72px] pb-24 px-6 max-w-lg mx-auto">
        <section className="mt-14 mb-16 text-center flex flex-col items-center gap-4">
          <div className="w-12 h-12 mb-1">
            <SunburstIcon color="#000" />
          </div>
          <p
            className="text-[18px] leading-[28px] text-ink-black"
            style={{ letterSpacing: '-0.01em' }}
          >
            Mon Picouze, ces quatre vinyles racontent ta vie en musique, à travers les personnes
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

        <div className="flex flex-col gap-16">
          {vinyls.map((vinyl) => (
            <VinylSleeve key={vinyl.id} vinyl={vinyl} />
          ))}
        </div>

        <footer className="mt-16 mb-10 text-center">
          <div className="h-px w-full bg-ink-black/10 mb-8" />
          <span className="material-symbols-outlined text-ink-black text-3xl block mb-3">
            history_edu
          </span>
          <p className="text-[13px] font-medium tracking-widest opacity-50 leading-relaxed">
            MADE IN PARIS / DESIGNED FOR MEMORY
            <br />© 2024 22H22 RECORDS
          </p>
        </footer>
      </main>
      <RecordsBottomNav active="collection" />
    </div>
  )
}
