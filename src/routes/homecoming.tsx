import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  RecordsHeader,
  RecordsBottomNav,
  TracklistSection,
  TrackRevealOverlay,
  type Track,
} from '~/components/records'

export const Route = createFileRoute('/homecoming')({
  head: () => ({ meta: [{ title: '22H22 / Homecoming' }] }),
  component: HomecomingPage,
})

const COLOR = '#8B2A2A'
const COLOR_CLASS = 'text-homecoming-red'

const sideA: Track[] = [
  {
    num: '01',
    title: 'stayinit',
    artist: 'Fred again.., Lil Yachty, Overmono',
    duration: '04:34',
    selector: {
      name: 'Clara V.',
      initials: 'CV',
      note: 'Fred again.. a ce don rare de capturer l\'éphémère et de le rendre éternel. Ce titre me fait penser à chaque fois qu\'on s\'est retrouvés après une longue absence — comme si le temps n\'avait pas passé.',
      collectorId: 'CV-22H22-004',
    },
  },
  {
    num: '02',
    title: 'Freedom 2',
    artist: 'Kwengface, Joy Orbison, Overmono',
    duration: '03:26',
    selector: {
      name: 'Ryad H.',
      initials: 'RH',
      note: 'La liberté n\'est pas une destination, c\'est un état qu\'on choisit avec les bonnes personnes autour de soi. Tu as toujours su incarner ça.',
      collectorId: 'RH-22H22-004',
    },
  },
  {
    num: '03',
    title: 'Gabriel',
    artist: 'Roy Davis Jr (Words To Give By mix)',
    duration: '07:22',
    selector: {
      name: 'Leila M.',
      initials: 'LM',
      note: 'Ce morceau me rappelle ces longues nuits berlinoises où le temps semblait se boucler à l\'infini. Une émotion que je voulais partager avec toi.',
      collectorId: 'LM-22H22-004',
    },
  },
]

const sideB: Track[] = [
  {
    num: '01',
    title: 'Send Nudes',
    artist: 'Knucks',
    duration: '01:40',
    selector: {
      name: 'Ryad H.',
      initials: 'RH',
      note: 'Knucks est une voix unique dans le rap britannique — brute, sincère, hilarante. Ce titre résume parfaitement notre humour partagé.',
      collectorId: 'RH-22H22-005',
    },
  },
  {
    num: '02',
    title: 'Bitches & Ryad',
    artist: 'BB Jacques',
    duration: '03:22',
    selector: {
      name: 'Clara V.',
      initials: 'CV',
      note: 'Ce titre existe parce que tu existes. BB Jacques a su capturer une amitié dans un morceau — chose rarissime. Écoute bien les paroles.',
      collectorId: 'CV-22H22-005',
    },
  },
  {
    num: '03',
    title: 'Ah Ya Lil',
    artist: 'Ammar 808, Mahmoud Lahbib, Mariem Bettouhani',
    duration: '03:51',
    selector: {
      name: 'Leila M.',
      initials: 'LM',
      note: 'Les racines ne s\'effacent jamais. Ce morceau est un pont entre les cultures qui ont façonné qui tu es — et j\'espère qu\'il t\'en rend fier.',
      collectorId: 'LM-22H22-005',
    },
  },
  {
    num: '04',
    title: 'The Way I Love You',
    artist: 'Jorja Smith',
    duration: '03:22',
    selector: {
      name: 'Clara V.',
      initials: 'CV',
      note: 'Jorja Smith chante avec une honnêteté désarmante. Ce morceau parle de profondeur dans les connexions humaines — exactement ce que tu apportes dans la vie des autres.',
      collectorId: 'CV-22H22-006',
    },
  },
  {
    num: '05',
    title: 'TBC',
    artist: 'Unreleased',
    duration: '03:15',
    selector: {
      name: 'Ryad H.',
      initials: 'RH',
      note: 'Certaines choses valent la peine d\'être attendues. Ce dernier titre sera révélé lors d\'un moment particulier — un moment que l\'on choisira ensemble.',
      collectorId: 'RH-22H22-006',
    },
  },
]

function HomecomingPage() {
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
            CHAPTER FOUR
          </span>
          <h2
            className="font-sans text-[40px] font-bold uppercase leading-none mb-4"
            style={{ letterSpacing: '-0.04em' }}
          >
            HOMECOMING.
          </h2>
          <div className="w-10 h-[2px] mb-6" style={{ backgroundColor: COLOR }} />
          <p className="text-[18px] leading-[28px] text-warm-muted" style={{ letterSpacing: '-0.01em' }}>
            Some people arrive quietly and become home without warning. This final record is about
            the ones who stayed — the friendships that endured, the love that settled in, the
            connections that turned into something lasting.
          </p>
          <p className="text-[18px] leading-[28px] text-warm-muted mt-4" style={{ letterSpacing: '-0.01em' }}>
            Homecoming is the feeling of finally finding belonging, not in a place, but in the
            people who remain.
          </p>
        </section>

        {/* Spinning vinyl */}
        <section className="mb-12 relative w-full max-w-sm mx-auto aspect-square">
          {/* Background detail */}
          <div
            className="absolute top-0 right-0 w-32 h-32 opacity-5 spin-slow rounded-full"
            style={{ backgroundColor: COLOR }}
          />
          <div
            className="absolute inset-0 bg-ink-black rounded-full spin-slow shadow-2xl border-4 border-ink-black/20"
          >
            {/* Vinyl grooves */}
            <div className="absolute inset-2 border border-white/5 rounded-full pointer-events-none" />
            <div className="absolute inset-6 border border-white/5 rounded-full pointer-events-none" />
            <div className="absolute inset-10 border border-white/5 rounded-full pointer-events-none" />
          </div>
          {/* Center label */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-1/3 h-1/3 rounded-full flex flex-col items-center justify-center text-white border-4 border-ink-black"
              style={{ backgroundColor: COLOR }}
            >
              <span className="text-[9px] font-bold tracking-widest opacity-70 uppercase">
                A Side
              </span>
              <div
                className="text-xl font-bold leading-tight flex flex-col items-center"
              >
                <span>22</span>
                <span>22</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tracklists */}
        <TracklistSection
          side="A"
          total="15:22"
          tracks={sideA}
          colorClass={COLOR_CLASS}
          onReveal={setSelectedTrack}
        />
        <TracklistSection
          side="B"
          total="14:50"
          tracks={sideB}
          colorClass={COLOR_CLASS}
          onReveal={setSelectedTrack}
        />

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <button
            className="w-full bg-ink-black text-paper-cream py-4 px-8 text-[12px] font-bold tracking-[0.15em] uppercase hover:bg-homecoming-red transition-colors duration-300"
          >
            PLAY THE COLLECTION
          </button>
          <p className="text-[10px] text-warm-muted/60 uppercase tracking-tighter">
            End of Chapter Four — Belonging Found.
          </p>
        </div>
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
