import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  RecordsHeader,
  RecordsBottomNav,
  TracklistSection,
  RevealModal,
  type Track,
} from '~/components/records'

export const Route = createFileRoute('/origins')({
  head: () => ({ meta: [{ title: '22H22 / Origins' }] }),
  component: OriginsPage,
})

const COLOR = '#C65D3B'
const COLOR_CLASS = 'text-origins-orange'
const FRONT_IMG = '/Front%20vinyles%20svg/1.svg'
const MACARON_A = '/MACARON%20VINYLE%201%20FACE%20A.png'
const MACARON_B = '/MACARON%20VINYLE%201%20FACE%20B.png'

const sideA: Track[] = [
  { id: 'origins-a-1', num: '01', artist: 'Léopold Nord & Vous', title: "C'est l'amour (1988)", duration: '3:15' },
  { id: 'origins-a-2', num: '02', artist: 'Pow Wow', title: 'Le Lion est mort ce soir', duration: '2:59' },
  { id: 'origins-a-3', num: '03', artist: 'Chabat, Lauby, Darmon, Farrugia', title: 'La Carioca', duration: '2:25' },
  { id: 'origins-a-4', num: '04', artist: 'Jungle', title: 'Back on 74', duration: '3:29' },
]

const sideB: Track[] = [
  { id: 'origins-b-1', num: '01', artist: '2 Unlimited', title: 'Get Ready', duration: '3:42' },
  { id: 'origins-b-2', num: '02', artist: '113 feat. Doudou Masta', title: 'Truc de fou', duration: '4:16' },
  { id: 'origins-b-3', num: '03', artist: 'Lazee', title: "I'm Not Pop", duration: '3:43' },
]

function OriginsPage() {
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
            alt="Origins — 22H22 Records"
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
              CHAPTER ONE
            </span>
            <h2
              className="font-sans text-[40px] font-bold uppercase leading-none mb-4"
              style={{ letterSpacing: '-0.04em' }}
            >
              ORIGINS.
            </h2>
            <div className="w-10 h-[2px] mb-6" style={{ backgroundColor: COLOR }} />
            <p className="text-[18px] leading-[28px] text-ink-black" style={{ letterSpacing: '-0.01em' }}>
              The first songs. The first memories. The people who existed before everything else.
            </p>
            <p className="text-[18px] leading-[28px] text-ink-black mt-4" style={{ letterSpacing: '-0.01em' }}>
              This record holds the earliest echoes of a life — childhood, family, first friendships and the moments that quietly shape who someone becomes.
            </p>
            <p className="text-[18px] leading-[28px] text-ink-black mt-4" style={{ letterSpacing: '-0.01em' }}>
              Origins is where the story begins: raw, instinctive, untouched.
            </p>
          </section>

          {/* Tracklists */}
          <TracklistSection
            side="A"
            total="12:08"
            tracks={sideA}
            colorClass={COLOR_CLASS}
            onReveal={setSelectedTrack}
            macaronSrc={MACARON_A}
          />
          <TracklistSection
            side="B"
            total="11:41"
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
