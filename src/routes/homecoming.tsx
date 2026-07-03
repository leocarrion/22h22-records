import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  RecordsHeader,
  RecordsBottomNav,
  TracklistSection,
  RevealModal,
  type Track,
} from '~/components/records'

export const Route = createFileRoute('/homecoming')({
  head: () => ({ meta: [{ title: '22H22 / Homecoming' }] }),
  component: HomecomingPage,
})

const COLOR = '#7A1F1F'
const COLOR_CLASS = 'text-homecoming-red'
const FRONT_IMG = '/Front%20vinyles%20svg/5.svg'
const MACARON_A = '/MACARON%20VINYLE%205%20FACE%20A.png'
// Side J uses the FACE B file (confirmed)
const MACARON_J = '/MACARON%20VINYLE%205%20FACE%20B.png'

const sideA: Track[] = [
  { id: 'homecoming-a-1', num: '01', artist: 'Roy Davis Jr. & Peven Everett', title: 'Gabrielle (Words To Give By Mix)', duration: '7:22' },
  { id: 'homecoming-a-2', num: '02', artist: 'Chase & Status, Clementine Douglas', title: 'Say The Word', duration: '3:57' },
]

const sideJ: Track[] = [
  { id: 'homecoming-j-1', num: '01', artist: 'Jorja Smith', title: 'The Way I Love You', duration: '3:22' },
  { id: 'homecoming-j-2', num: '02', artist: 'Jim Legxacy', title: 'sos', duration: '2:15' },
  { id: 'homecoming-j-3', num: '03', artist: 'Mansur Brown', title: 'Love is Mine', duration: '3:26' },
  { id: 'homecoming-j-4', num: '04', artist: 'Alicia Keys', title: 'Un-thinkable', duration: '4:09' },
]

function HomecomingPage() {
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
            alt="Homecoming — 22H22 Records"
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
              CHAPTER FIVE
            </span>
            <h2
              className="font-sans text-[40px] font-bold uppercase leading-none mb-4"
              style={{ letterSpacing: '-0.04em' }}
            >
              HOMECOMING.
            </h2>
            <div className="w-10 h-[2px] mb-6" style={{ backgroundColor: COLOR }} />
            <p className="text-[18px] leading-[28px] text-ink-black" style={{ letterSpacing: '-0.01em' }}>
              These songs belong to the years where uncertainty slowly gives way to clarity — knowing who to keep close, who to become and where life begins to lead.
            </p>
            <p className="text-[18px] leading-[28px] text-ink-black mt-4" style={{ letterSpacing: '-0.01em' }}>
              Homecoming is about carrying everything that came before into something more grounded, and finding comfort in the life built along the way.
            </p>
          </section>

          {/* Tracklists */}
          <TracklistSection
            side="A"
            total="11:19"
            tracks={sideA}
            colorClass={COLOR_CLASS}
            onReveal={setSelectedTrack}
            macaronSrc={MACARON_A}
          />
          <TracklistSection
            side="J"
            total="13:12"
            tracks={sideJ}
            colorClass={COLOR_CLASS}
            onReveal={setSelectedTrack}
            macaronSrc={MACARON_J}
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
