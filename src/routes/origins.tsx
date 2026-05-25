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

export const Route = createFileRoute('/origins')({
  component: OriginsPage,
})

const COLOR = '#D9622A'
const COLOR_CLASS = 'text-origins-orange'

const sideA: Track[] = [
  {
    num: '01',
    title: "C'est l'amour (1988)",
    artist: 'Léopold Nord & Vous',
    duration: '03:15',
    selector: {
      name: 'Victor M.',
      initials: 'VM',
      note: 'Ce morceau jouait en boucle dans la cuisine de ton appartement du quartier — impossible de l\'entendre sans penser à cette époque dorée.',
      collectorId: 'VM-22H22-001',
    },
  },
  {
    num: '02',
    title: 'Le Chat',
    artist: 'Pow Wow',
    duration: '02:52',
    selector: {
      name: 'Marie-L.',
      initials: 'ML',
      note: 'Ce titre m\'a tout de suite fait penser à toi — il a cette légèreté et cette profondeur qu\'on trouve rarement au même endroit.',
      collectorId: 'ML-22H22-001',
    },
  },
  {
    num: '03',
    title: 'Le Lion est mort ce soir',
    artist: 'Pow Wow',
    duration: '02:56',
    selector: {
      name: 'Guillaume R.',
      initials: 'GR',
      note: 'Souvenir d\'un été à chanter ça à tue-tête sans vraiment connaître les paroles. Les meilleures heures sont celles qu\'on improvise.',
      collectorId: 'GR-22H22-001',
    },
  },
  {
    num: '04',
    title: 'La Carioca',
    artist: 'Chabat, Lauby, Darmon, Farrugia',
    duration: '02:25',
    selector: {
      name: 'Thomas B.',
      initials: 'TB',
      note: 'Parce qu\'au fond, on a toujours besoin d\'une chanson qui donne envie de danser même quand la journée a été longue.',
      collectorId: 'TB-22H22-001',
    },
  },
  {
    num: '05',
    title: 'Isabelle a les yeux bleus',
    artist: 'Les Inconnus',
    duration: '03:10',
    selector: {
      name: 'Élodie C.',
      initials: 'EC',
      note: 'Les Inconnus ont bercé notre adolescence d\'une façon qu\'aucun algorithme ne pourra jamais recréer. Ce morceau c\'est nous à 15 ans.',
      collectorId: 'EC-22H22-001',
    },
  },
]

const sideB: Track[] = [
  {
    num: '01',
    title: 'Get Ready (Rapversion Edit)',
    artist: '2 Unlimited',
    duration: '03:42',
    selector: {
      name: 'Alexandre P.',
      initials: 'AP',
      note: 'La première fois qu\'on a entendu ça ensemble, on a compris qu\'on avait le même goût pour les sons qui te traversent physiquement.',
      collectorId: 'AP-22H22-001',
    },
  },
  {
    num: '02',
    title: 'True de foe - 113 feat.',
    artist: '113',
    duration: '04:16',
    selector: {
      name: 'Jean-Pierre F.',
      initials: 'JP',
      note: 'Le rap français de cette époque avait quelque chose de brut et d\'authentique. Ce titre en est le parfait distillat.',
      collectorId: 'JP-22H22-001',
    },
  },
  {
    num: '03',
    title: "I'm Not Pop",
    artist: 'Lazee',
    duration: '03:45',
    nowPlaying: true,
    selector: {
      name: 'Alexandre P.',
      initials: 'AP',
      note: 'Ce morceau c\'est une déclaration d\'indépendance musicale. Je l\'ai choisi parce qu\'il te ressemble — tu n\'es pas pop non plus, et c\'est ce qui te rend unique.',
      collectorId: 'AP-22H22-002',
    },
  },
  {
    num: '04',
    title: 'mainthieu',
    artist: 'TBC Artist',
    duration: '00:00',
    selector: {
      name: 'Jean-Pierre F.',
      initials: 'JP',
      note: 'À venir. Ce titre est encore une surprise — il sera révélé lors d\'un moment particulier.',
      collectorId: 'JP-22H22-002',
    },
  },
]

function OriginsPage() {
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
            This record holds the earliest echoes of a life — childhood, family, first friendships
            and the moments that quietly shape who someone becomes. Origins is where the story
            begins: raw, instinctive, untouched.
          </p>
        </section>

        {/* Spinning vinyl */}
        <section className="mb-12 flex justify-center">
          <div className="relative w-72 h-72 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#121212] rounded-full border border-ink-black/20 shadow-xl"
              style={{
                background: 'repeating-radial-gradient(circle at center, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 2px, transparent 5px)',
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
          total="14:28"
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

        {/* Curated by */}
        <div className="mt-8 pt-8 border-t border-ink-black/10 text-center">
          <p
            className="text-[11px] font-bold tracking-[0.15em] mb-3"
            style={{ color: COLOR }}
          >
            CURATED BY
          </p>
          <p className="text-[28px] font-bold" style={{ letterSpacing: '-0.03em' }}>
            Qui a choisi ce titre ?
          </p>
          <div className="flex gap-3 justify-center mt-4">
            {['AP', 'JP'].map((initials) => (
              <div
                key={initials}
                className="w-10 h-10 rounded-full border border-ink-black/20 flex items-center justify-center"
              >
                <span className="text-[11px] font-bold text-warm-muted">{initials}</span>
              </div>
            ))}
          </div>
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
