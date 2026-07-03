import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  RecordsHeader,
  RecordsBottomNav,
  TracklistSection,
  RevealModal,
  type Track,
} from '~/components/records'

export const Route = createFileRoute('/becoming')({
  head: () => ({ meta: [{ title: '22H22 / Becoming' }] }),
  component: BecomingPage,
})

const COLOR = '#1D4ED8'
const COLOR_CLASS = 'text-becoming-blue'
const FRONT_IMG = '/Front%20vinyles%20svg/2.svg'
const MACARON_A = '/MACARON%20VINYLE%202%20FACE%20A.png'
const MACARON_B = '/MACARON%20VINYLE%202%20FACE%20B.png'

const sideA: Track[] = [
  { id: 'becoming-a-1', num: '01', artist: 'Janelle Monáe', title: 'Tightrope', duration: '4:24' },
  { id: 'becoming-a-2', num: '02', artist: 'Duck Sauce, A-Trak, Armand Van Helden', title: 'Big Bad Wolf', duration: '2:59' },
  { id: 'becoming-a-3', num: '03', artist: 'UGK', title: 'One Day', duration: '4:47' },
]

const sideB: Track[] = [
  { id: 'becoming-b-1', num: '01', artist: 'Vybz Kartel', title: 'Summer Time', duration: '4:10' },
  { id: 'becoming-b-2', num: '02', artist: 'Ghali', title: '22:22', duration: '3:00' },
  { id: 'becoming-b-3', num: '03', artist: 'Franko', title: 'Coller la petite', duration: '3:52' },
]

function BecomingPage() {
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
            alt="Becoming — 22H22 Records"
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
              CHAPTER TWO
            </span>
            <h2
              className="font-sans text-[40px] font-bold uppercase leading-none mb-4"
              style={{ letterSpacing: '-0.04em' }}
            >
              BECOMING.
            </h2>
            <div className="w-10 h-[2px] mb-6" style={{ backgroundColor: COLOR }} />
            <p className="text-[18px] leading-[28px] text-ink-black" style={{ letterSpacing: '-0.01em' }}>
              A season of movement, discovery and transformation.
            </p>
            <p className="text-[18px] leading-[28px] text-ink-black mt-4" style={{ letterSpacing: '-0.01em' }}>
              These songs belong to the years of late nights, endless conversations, first freedoms and the friendships that leave permanent marks.
            </p>
            <p className="text-[18px] leading-[28px] text-ink-black mt-4" style={{ letterSpacing: '-0.01em' }}>
              Becoming captures the beautiful uncertainty of growing into oneself, before life fully reveals its direction.
            </p>
          </section>

          {/* YouTube playlist */}
          <a
            href="https://youtube.com/playlist?list=PLBFYCkLf4944&si=NjCERGL8cyQtE78l"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-full border border-black/10 hover:border-black/30 transition-colors px-4 py-3 mb-8 rounded"
          >
            <svg viewBox="0 0 24 24" fill="#FF0000" width="20" height="20">
              <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
            </svg>
            <span className="text-[13px] font-semibold" style={{ color: COLOR }}>
              Écouter Becoming sur YouTube
            </span>
          </a>

          {/* Tracklists */}
          <TracklistSection
            side="A"
            total="12:10"
            tracks={sideA}
            colorClass={COLOR_CLASS}
            onReveal={setSelectedTrack}
            macaronSrc={MACARON_A}
          />
          <TracklistSection
            side="B"
            total="11:02"
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
