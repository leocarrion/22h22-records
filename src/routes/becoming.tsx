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

export const Route = createFileRoute('/becoming')({
  component: BecomingPage,
})

const COLOR = '#2A5BD9'
const COLOR_CLASS = 'text-becoming-blue'

const sideA: Track[] = [
  {
    num: '01',
    title: 'Big Bad Wolf',
    artist: 'DJ Sauce, A-Trak, Armand Van Helden',
    duration: '02:39',
    selector: {
      name: 'Sofia K.',
      initials: 'SK',
      note: 'On écoutait ça en boucle lors de ces longues soirées d\'été où on refaisait le monde jusqu\'à l\'aube. Ce morceau sent encore l\'insouciance.',
      collectorId: 'SK-22H22-002',
    },
  },
  {
    num: '02',
    title: 'One Day',
    artist: 'Wankelmut, Asaf Avidan',
    duration: '04:47',
    selector: {
      name: 'Théo R.',
      initials: 'TR',
      note: 'Cette voix te touche là où tu ne t\'y attends pas. Je l\'ai choisi parce que toi aussi, tu touches les gens là où ils ne s\'y attendent pas.',
      collectorId: 'TR-22H22-002',
    },
  },
  {
    num: '03',
    title: 'Summer Time',
    artist: 'Lazee',
    duration: '04:10',
    selector: {
      name: 'Inès B.',
      initials: 'IB',
      note: 'Un titre pour tous ces étés passés ensemble. Les années passent mais les souvenirs de ces moments restent gravés pour toujours.',
      collectorId: 'IB-22H22-002',
    },
  },
  {
    num: '04',
    title: 'Rock Away',
    artist: 'Lazee',
    duration: '03:52',
    nowPlaying: true,
    selector: {
      name: 'Camille V.',
      initials: 'CV',
      note: 'Ce morceau m\'a toujours évoqué la liberté — celle de choisir sa propre direction même quand tout le monde attend que tu en prennes une autre.',
      collectorId: 'CV-22H22-002',
    },
  },
]

const sideB: Track[] = [
  {
    num: '01',
    title: 'Coller la petite',
    artist: 'Franko',
    duration: '03:52',
    selector: {
      name: 'Hugo P.',
      initials: 'HP',
      note: 'Un classique absolu qui te rappellera des soirées qu\'on préfère garder entre nous. Tu sauras de quoi je parle.',
      collectorId: 'HP-22H22-002',
    },
  },
  {
    num: '02',
    title: 'Nique la BAC',
    artist: 'Lorenzo',
    duration: '03:27',
    selector: {
      name: 'Théo R.',
      initials: 'TR',
      note: 'Parce qu\'une bonne playlist se doit d\'avoir au moins un titre qui fait sourire en coin. Celui-là fait son travail à la perfection.',
      collectorId: 'TR-22H22-003',
    },
  },
  {
    num: '03',
    title: "Day 'N' Nite",
    artist: 'Kid Cudi',
    duration: '02:48',
    selector: {
      name: 'Sofia K.',
      initials: 'SK',
      note: 'Kid Cudi a capturé quelque chose d\'universel — cette solitude qui n\'est pas triste mais plutôt contemplative. On est tous passés par là.',
      collectorId: 'SK-22H22-003',
    },
  },
]

function BecomingPage() {
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
            A season of movement, discovery and transformation. These songs belong to the years of
            late nights, endless conversations, fire freedoms and the friendships that leave
            permanent marks.
          </p>
          <p className="text-[18px] leading-[28px] text-warm-muted mt-4" style={{ letterSpacing: '-0.01em' }}>
            Becoming captures the beautiful uncertainty of growing into oneself, before life fully
            reveals its direction.
          </p>
        </section>

        {/* Vinyl visual */}
        <section className="mb-12 relative overflow-hidden">
          <div className="relative bg-paper-cream border border-ink-black/10 aspect-square w-full flex items-center justify-center">
            {/* Album art-style background */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: 'linear-gradient(135deg, #2A5BD9 0%, #D9622A 100%)',
              }}
            />
            {/* Vinyl peeking out */}
            <div className="absolute right-[-15%] top-[5%] w-[70%] aspect-square bg-zinc-900 rounded-full border-[8px] border-zinc-800 shadow-2xl flex items-center justify-center">
              <div
                className="w-1/3 h-1/3 rounded-full border-2 border-black/10 flex items-center justify-center"
                style={{ backgroundColor: COLOR }}
              >
                <span className="text-[8px] font-bold text-white tracking-widest">SIDE A</span>
              </div>
            </div>
            {/* Label overlay */}
            <div className="relative z-10 p-6 text-left self-end pb-10">
              <h3
                className="text-[32px] font-bold text-ink-black leading-none"
                style={{ letterSpacing: '-0.04em' }}
              >
                22H22
                <br />
                RECORDS
              </h3>
              <div className="flex gap-2 mt-3">
                {['02', '–', 'BECOMING'].map((t, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-bold tracking-widest"
                    style={{ color: COLOR }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tracklists */}
        <TracklistSection
          side="A"
          total="18:24"
          tracks={sideA}
          colorClass={COLOR_CLASS}
          onReveal={setSelectedTrack}
        />
        <TracklistSection
          side="B"
          total="16:45"
          tracks={sideB}
          colorClass={COLOR_CLASS}
          onReveal={setSelectedTrack}
        />
      </main>

      <RecordsBottomNav active="player" />
      <TrackRevealOverlay
        track={selectedTrack}
        onClose={() => setSelectedTrack(null)}
        themeColor={COLOR}
      />
    </div>
  )
}
