import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  RecordsHeader,
  RecordsBottomNav,
  TracklistSection,
  TrackRevealOverlay,
  type Track,
} from '~/components/records'

export const Route = createFileRoute('/emerging')({
  head: () => ({ meta: [{ title: '22H22 / Emerging' }] }),
  component: EmergingPage,
})

const COLOR = '#7856AF'
const COLOR_CLASS = 'text-emerging-purple'
const FRONT_IMG = '/FRONT%20VINYLE%203.png'
const MACARON_A = '/MACARON%20VINYLE%203%20FACE%20A.png'
const MACARON_B = '/MACARON%20VINYLE%203%20FACE%20B.png'

const sideA: Track[] = [
  { num: '01', artist: 'Lorenzo', title: 'Nique la BAC', duration: '2:27' },
  { num: '02', artist: 'Kid Cudi', title: "Day 'n' Nite", duration: '2:48' },
  { num: '03', artist: 'Juicy J feat. Wiz Khalifa', title: "Stoner's Night 2", duration: '3:35' },
  { num: '04', artist: 'Yeah Yeah Yeahs', title: 'Head Will Roll (A-Trak remix)', duration: '3:23' },
]

const sideB: Track[] = [
  { num: '01', artist: 'Mk Dub Revisited Edit', title: 'Push The Feeling On', duration: '4:03' },
  { num: '02', artist: "ISHA & Limsa D'Aulnay", title: 'But en Or', duration: '2:37' },
  { num: '03', artist: 'Kanye West, Pusha T', title: 'Runaway', duration: '7:00' },
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
      <TrackRevealOverlay
        track={selectedTrack}
        onClose={() => setSelectedTrack(null)}
        themeColor={COLOR}
      />
    </div>
  )
}
