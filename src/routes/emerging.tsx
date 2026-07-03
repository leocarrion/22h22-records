import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  RecordsHeader,
  RecordsBottomNav,
  TracklistSection,
  RevealModal,
  type Track,
} from '~/components/records'

export const Route = createFileRoute('/emerging')({
  head: () => ({ meta: [{ title: '22H22 / Emerging' }] }),
  component: EmergingPage,
})

const COLOR = '#7856AF'
const COLOR_CLASS = 'text-emerging-purple'
const FRONT_IMG = '/Front%20vinyles%20svg/3.svg'
const MACARON_A = '/MACARON%20VINYLE%203%20FACE%20A.png'
const MACARON_B = '/MACARON%20VINYLE%203%20FACE%20B.png'

const sideA: Track[] = [
  { id: 'emerging-a-1', num: '01', artist: 'Lorenzo', title: 'Nique la BAC', duration: '2:27' },
  { id: 'emerging-a-2', num: '02', artist: 'Kid Cudi', title: "Day 'n' Nite", duration: '2:48' },
  { id: 'emerging-a-3', num: '03', artist: 'Juicy J feat. Wiz Khalifa', title: "Stoner's Night 2", duration: '3:35' },
  { id: 'emerging-a-4', num: '04', artist: 'Yeah Yeah Yeahs', title: 'Heads Will Roll (A-Trak Remix)', duration: '3:23' },
]

const sideB: Track[] = [
  { id: 'emerging-b-1', num: '01', artist: 'Mk Dub Revisited Edit', title: 'Push The Feeling On', duration: '4:03' },
  { id: 'emerging-b-2', num: '02', artist: "ISHA & Limsa D'Aulnay", title: 'But en Or', duration: '2:37' },
  { id: 'emerging-b-3', num: '03', artist: 'Kanye West, Pusha T', title: 'Runaway', duration: '7:00' },
]

function EmergingPage() {
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
            alt="Emerging — 22H22 Records"
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
              New horizons. New ambitions. The first thoughts of elsewhere.
            </p>
            <p className="text-[18px] leading-[28px] text-ink-black mt-4" style={{ letterSpacing: '-0.01em' }}>
              These songs belong to the moments when the world begins to open up — when ideas take root, dreams grow larger and the desire to explore beyond the familiar starts to emerge.
            </p>
            <p className="text-[18px] leading-[28px] text-ink-black mt-4" style={{ letterSpacing: '-0.01em' }}>
              Emerging captures that quiet turning point, where the future begins to take shape long before the journey itself begins.
            </p>
          </section>

          {/* YouTube playlist */}
          <a
            href="https://youtube.com/playlist?list=PLSM6M92AAcz4&si=eUX90kA8izNjroTX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-full border border-black/10 hover:border-black/30 transition-colors px-4 py-3 mb-8 rounded"
          >
            <svg viewBox="0 0 24 24" fill="#FF0000" width="20" height="20">
              <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
            </svg>
            <span className="text-[13px] font-semibold" style={{ color: COLOR }}>
              Écouter Emerging sur YouTube
            </span>
          </a>

          {/* Tracklists */}
          <TracklistSection
            side="A"
            total="12:13"
            tracks={sideA}
            colorClass={COLOR_CLASS}
            onReveal={setSelectedTrack}
            macaronSrc={MACARON_A}
          />
          <TracklistSection
            side="B"
            total="13:40"
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
