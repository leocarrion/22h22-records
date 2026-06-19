import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  RecordsHeader,
  RecordsBottomNav,
  SunburstIcon,
  TracklistSection,
  TrackRevealOverlay,
  type Track,
} from '~/components/records'

export const Route = createFileRoute('/emerging')({
  head: () => ({ meta: [{ title: '22H22 / Emerging' }] }),
  component: EmergingPage,
})

const COLOR = '#C99A2B'
const COLOR_CLASS = 'text-emerging-mustard'

const sideA: Track[] = [
  { num: '01', title: 'Nique la BAC', artist: 'Lorenzo', duration: '02:27' },
  { num: '02', title: 'Day N Nite', artist: 'KID CUDI', duration: '02:48' },
  {
    num: '03',
    title: "Stoner's Night 2 (feat. Wiz Khalifa)",
    artist: 'Juicy J',
    duration: '03:35',
  },
  {
    num: '04',
    title: 'Heads Will Roll (A-Trak Remix)',
    artist: 'Yeah Yeah Yeahs',
    duration: '06:24',
  },
]

const sideB: Track[] = [
  {
    num: '01',
    title: 'Push The Feeling On (Mk Dub Revisited Edit)',
    artist: 'Nightcrawlers',
    duration: '04:03',
  },
  {
    num: '02',
    title: 'But en or',
    artist: 'Isha, Limsa D\'Aulnay',
    duration: '02:37',
  },
  { num: '03', title: 'Runaway (Album Version)', artist: 'Kanye West', duration: '06:11' },
]

function EmergingPage() {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null)

  return (
    <div
      className="min-h-screen bg-warm-surface text-ink-black"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <RecordsHeader backTo="/" />
      <main className="pt-[72px] pb-24 px-6 max-w-lg mx-auto">
        {/* Chapter header */}
        <section className="mt-8 mb-10">
          <span
            className="text-[12px] font-bold tracking-[0.2em] block mb-2"
            style={{ color: COLOR }}
          >
            CHAPTER THREE
          </span>
          <h2
            className="font-sans text-[40px] font-bold uppercase leading-none mb-4"
            style={{ letterSpacing: '-0.04em' }}
          >
            EMERGING.
          </h2>
          <div className="w-10 h-[2px] mb-6" style={{ backgroundColor: COLOR }} />
          <p className="text-[18px] leading-[28px] text-ink-black" style={{ letterSpacing: '-0.01em' }}>
            « Le moment où l'on prend sa place. Ces morceaux marquent l'instant où Adrien commence
            à s'affirmer, à choisir ses propres voies, à se laisser exister pleinement. Ni l'enfant
            ni l'adulte tout à fait — quelque chose en train d'éclore. »
          </p>
        </section>

        {/* Spinning vinyl */}
        <section className="mb-12 flex justify-center">
          <div className="relative w-72 h-72 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-[#121212] rounded-full border border-ink-black/20 shadow-xl"
              style={{
                background:
                  'repeating-radial-gradient(circle at center, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 2px, transparent 5px)',
              }}
            />
            <div className="relative z-10 w-36 h-36 bg-paper-cream rounded-full border border-ink-black/10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center spin-very-slow">
                <SunburstIcon color={COLOR} className="w-full h-full p-2" />
              </div>
              <div className="relative z-20 flex flex-col items-center text-center">
                <span className="text-[10px] font-bold tracking-[0.1em] text-ink-black">A SIDE</span>
                <span
                  className="font-sans font-bold text-ink-black leading-none"
                  style={{ fontSize: '22px', letterSpacing: '-0.03em' }}
                >
                  22
                  <br />
                  H22
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Tracklists */}
        <TracklistSection
          side="A"
          total="15:14"
          tracks={sideA}
          colorClass={COLOR_CLASS}
          onReveal={setSelectedTrack}
        />
        <TracklistSection
          side="B"
          total="12:52"
          tracks={sideB}
          colorClass={COLOR_CLASS}
          onReveal={setSelectedTrack}
        />
      </main>

      <RecordsBottomNav active="collection" />
      <TrackRevealOverlay
        track={selectedTrack}
        onClose={() => setSelectedTrack(null)}
        themeColor={COLOR}
      />
    </div>
  )
}
