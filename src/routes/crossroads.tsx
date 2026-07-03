import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  RecordsHeader,
  RecordsBottomNav,
  TracklistSection,
  RevealModal,
  type Track,
} from '~/components/records'

export const Route = createFileRoute('/crossroads')({
  head: () => ({ meta: [{ title: '22H22 / Crossroads' }] }),
  component: CrossroadsPage,
})

const COLOR = '#68703E'
const COLOR_CLASS = 'text-crossroads-olive'
const FRONT_IMG = '/Front%20vinyles%20svg/4.svg'
const MACARON_A = '/MACARON%20VINYLE%204%20FACE%20A.png'
const MACARON_B = '/MACARON%20VINYLE%204%20FACE%20B.png'

const sideA: Track[] = [
  { id: 'crossroads-a-1', num: '01', artist: 'Mike Jones feat. Slim Thug and Paul Wall', title: "Still Tippin'", duration: '4:31' },
  { id: 'crossroads-a-2', num: '02', artist: 'Booba x Francky Vincent Mashup', title: 'Validée de la Passion', duration: '4:48' },
  { id: 'crossroads-a-3', num: '03', artist: 'Roy Ayers Ubiquity', title: 'Everybody Loves The Sunshine', duration: '4:00' },
]

const sideB: Track[] = [
  { id: 'crossroads-b-1', num: '01', artist: 'Myd', title: 'Born a Loser', duration: '3:43' },
  { id: 'crossroads-b-2', num: '02', artist: 'Fred again.., Lil Yachty, Overmono', title: 'stayinit', duration: '4:34' },
  { id: 'crossroads-b-3', num: '03', artist: 'Kwengface, Joy Orbison, Overmono', title: 'Freedom 2', duration: '3:26' },
]

function CrossroadsPage() {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null)

  return (
    <div
      className="min-h-screen bg-warm-surface text-ink-black"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <RecordsHeader backTo="/" />
      <main className="pt-[72px] pb-24">
        {/* Hero cover */}
        <div className="w-full aspect-square max-w-lg mx-auto">
          <img
            src={FRONT_IMG}
            alt="Crossroads — 22H22 Records"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        <div className="px-6 max-w-lg mx-auto">
          {/* Chapter header */}
          <section className="mt-8 mb-10">
            <span
              className="text-[12px] font-bold tracking-[0.2em] block mb-2"
              style={{ color: COLOR }}
            >
              CHAPTER FOUR
            </span>
            <h2
              className="font-sans text-[40px] font-bold uppercase leading-none mb-4"
              style={{ letterSpacing: '-0.04em' }}
            >
              CROSSROADS.
            </h2>
            <div className="w-10 h-[2px] mb-6" style={{ backgroundColor: COLOR }} />
            <p className="text-[18px] leading-[28px] text-ink-black" style={{ letterSpacing: '-0.01em' }}>
              New city. New faces. New versions of the self emerging along the way.
            </p>
            <p className="text-[18px] leading-[28px] text-ink-black mt-4" style={{ letterSpacing: '-0.01em' }}>
              This record lives at the intersection of departure and possibility — the moment where familiar roads end and everything begins to expand.
            </p>
            <p className="text-[18px] leading-[28px] text-ink-black mt-4" style={{ letterSpacing: '-0.01em' }}>
              Crossroads tells the story of change, distance and the unexpected turns that shape a life forever.
            </p>
          </section>

          {/* YouTube playlist */}
          <a
            href="https://youtube.com/playlist?list=PLUoO1Yy-O6Wk&si=24-OZ8qgEahsTEcV"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-full border border-black/10 hover:border-black/30 transition-colors px-4 py-3 mb-8 rounded"
          >
            <svg viewBox="0 0 24 24" fill="#FF0000" width="20" height="20">
              <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
            </svg>
            <span className="text-[13px] font-semibold" style={{ color: COLOR }}>
              Écouter Crossroads sur YouTube
            </span>
          </a>

          {/* Tracklists */}
          <TracklistSection
            side="A"
            total="13:19"
            tracks={sideA}
            colorClass={COLOR_CLASS}
            onReveal={setSelectedTrack}
            macaronSrc={MACARON_A}
          />
          <TracklistSection
            side="B"
            total="11:43"
            tracks={sideB}
            colorClass={COLOR_CLASS}
            onReveal={setSelectedTrack}
            macaronSrc={MACARON_B}
          />
        </div>
      </main>

      <RecordsBottomNav active="collection" />
      <RevealModal
        track={selectedTrack}
        onClose={() => setSelectedTrack(null)}
        themeColor={COLOR}
      />
    </div>
  )
}
