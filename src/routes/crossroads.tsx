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

export const Route = createFileRoute('/crossroads')({
  head: () => ({ meta: [{ title: '22H22 / Crossroads' }] }),
  component: CrossroadsPage,
})

const COLOR = '#6B7A3A'
const COLOR_CLASS = 'text-crossroads-olive'

const sideA: Track[] = [
  {
    num: '01',
    title: 'But en Or',
    artist: 'ISHA & Limsa D\'Aulnay',
    duration: '02:37',
    selector: {
      name: 'Pierre L.',
      initials: 'PL',
      note: 'Ce titre parle d\'ambition et de trajectoire — exactement ce que tu incarnes. Chaque verse est une promesse tenue envers soi-même.',
      collectorId: 'PL-22H22-003',
    },
  },
  {
    num: '02',
    title: 'Runaway',
    artist: 'Kanye West, Pusha T',
    duration: '03:30',
    selector: {
      name: 'Laura D.',
      initials: 'LD',
      note: 'Kanye en mode confessionnel, douloureux et magnifique à la fois. Je l\'ai choisi pour sa capacité à transformer la vulnérabilité en grandeur.',
      collectorId: 'LD-22H22-003',
    },
  },
  {
    num: '03',
    title: 'Perokele Remix',
    artist: 'Molasaya feat. Davida & Serkoele',
    duration: '03:16',
    selector: {
      name: 'Mehdi O.',
      initials: 'MO',
      note: 'Ce remix m\'a accompagné lors de mes propres carrefours. Il y a quelque chose de profondément libérateur dans ce son — j\'espère qu\'il te touche pareil.',
      collectorId: 'MO-22H22-003',
    },
  },
  {
    num: '04',
    title: "Still Tippin'",
    artist: 'Mike Jones feat. Slim Thug and Paul Wall',
    duration: '04:31',
    selector: {
      name: 'Pierre L.',
      initials: 'PL',
      note: 'Houston, Texas. Un son qui a traversé les océans et les générations. Ce titre nous ramène aux racines du rap qui bouge les corps autant que les esprits.',
      collectorId: 'PL-22H22-004',
    },
  },
  {
    num: '05',
    title: 'Booty a Frenky Vincent Mashup',
    artist: 'Valid de la passion',
    duration: '04:48',
    selector: {
      name: 'Mehdi O.',
      initials: 'MO',
      note: 'Parce qu\'une bonne collection se doit d\'avoir un moment de pure joie collective. Celui-là fait le travail à chaque fois, sans exception.',
      collectorId: 'MO-22H22-004',
    },
  },
]

const sideB: Track[] = [
  {
    num: '01',
    title: 'Everybody Loves the Sunshine',
    artist: 'Roy Ayers Ubiquity',
    duration: '04:00',
    selector: {
      name: 'Laura D.',
      initials: 'LD',
      note: 'Roy Ayers a créé un hymne intemporel à la lumière et à la joie simple d\'exister. Chaque note est une invitation à ralentir et regarder le ciel.',
      collectorId: 'LD-22H22-004',
    },
  },
  {
    num: '02',
    title: 'Push The Feeling On',
    artist: 'MK Duo Revisited Edit',
    duration: '04:03',
    selector: {
      name: 'Laura D.',
      initials: 'LD',
      note: 'Un classique de la house revisité avec une sensibilité contemporaine. Ce morceau t\'embarque et ne te lâche plus — comme les vraies amitiés.',
      collectorId: 'LD-22H22-005',
    },
  },
  {
    num: '03',
    title: 'Marc Antoine qui',
    artist: 'Unknown',
    duration: '00:48',
    selector: {
      name: 'Pierre L.',
      initials: 'PL',
      note: 'Un moment mystérieux, bref et intense. Parfois les choses les plus courtes laissent les traces les plus durables.',
      collectorId: 'PL-22H22-005',
    },
  },
  {
    num: '04',
    title: 'Born a Loser',
    artist: 'Myd',
    duration: '03:43',
    selector: {
      name: 'Mehdi O.',
      initials: 'MO',
      note: 'Myd est un maître du paradoxe musical — ce titre sonne comme une victoire malgré son titre. Exactement comme tu vis les obstacles : avec style.',
      collectorId: 'MO-22H22-005',
    },
  },
  {
    num: '05',
    title: 'Gunk',
    artist: 'Overmono',
    duration: '05:14',
    selector: {
      name: 'Laura D.',
      initials: 'LD',
      note: 'Overmono construit des cathédrales sonores. "Gunk" est l\'une d\'elles — une architecture émotionnelle qui te transporte vers des endroits que tu ne savais pas connaître.',
      collectorId: 'LD-22H22-006',
    },
  },
]

function CrossroadsPage() {
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
            CROSSROADS.
          </h2>
          <div className="w-10 h-[2px] mb-6" style={{ backgroundColor: COLOR }} />
          <p className="text-[18px] leading-[28px] text-ink-black" style={{ letterSpacing: '-0.01em' }}>
            New city. New faces. New versions of the self emerging along the way. This record lives
            at the intersection of departure and possibility — the moment where familiar roads end
            and everything begins to expand.
          </p>
          <p className="text-[18px] leading-[28px] text-warm-muted mt-4" style={{ letterSpacing: '-0.01em' }}>
            Crossroads tells the story of change, distance and the unexpected turns that shape who
            people remain.
          </p>
        </section>

        {/* Spinning vinyl */}
        <section className="mb-12 flex justify-center overflow-hidden">
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
          total="13:37"
          tracks={sideA}
          colorClass={COLOR_CLASS}
          onReveal={setSelectedTrack}
        />
        <TracklistSection
          side="B"
          total="12:59"
          tracks={sideB}
          colorClass={COLOR_CLASS}
          onReveal={setSelectedTrack}
        />
      </main>

      <RecordsBottomNav active="notes" />
      <TrackRevealOverlay
        track={selectedTrack}
        onClose={() => setSelectedTrack(null)}
        themeColor={COLOR}
      />
    </div>
  )
}
