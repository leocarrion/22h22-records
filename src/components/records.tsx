import { Link, useNavigate } from '@tanstack/react-router'

export type Selector = {
  name: string
  initials: string
  note: string
  collectorId: string
}

export type Track = {
  num: string
  title: string
  artist: string
  duration: string
  selector?: Selector
  nowPlaying?: boolean
}

export function SunburstIcon({
  className = '',
  color = 'currentColor',
  slow = false,
}: {
  className?: string
  color?: string
  slow?: boolean
}) {
  const rays = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]
  return (
    <svg
      viewBox="0 0 100 100"
      fill={color}
      className={`${slow ? 'spin-very-slow' : 'spin-slow'} ${className}`}
    >
      <circle cx="50" cy="50" r="12" />
      <g transform="translate(50,50)">
        {rays.map((deg) => (
          <rect
            key={deg}
            x="-2"
            y="-48"
            width="4"
            height="24"
            rx="2"
            transform={`rotate(${deg})`}
          />
        ))}
      </g>
    </svg>
  )
}

export function RecordsHeader({ backTo }: { backTo?: string }) {
  const navigate = useNavigate()
  return (
    <header className="fixed top-0 left-0 right-0 z-[60] bg-warm-surface border-b border-ink-black/10">
      <div className="max-w-lg mx-auto flex justify-between items-center px-6 py-4">
        <button
          onClick={() =>
            backTo ? navigate({ to: backTo as '/' }) : navigate({ to: '/' })
          }
          className="flex items-center active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-ink-black">arrow_back</span>
        </button>
        <h1
          className="font-sans text-xl font-bold text-ink-black uppercase"
          style={{ letterSpacing: '-0.03em' }}
        >
          22H22 RECORDS
        </h1>
        <button className="opacity-40 hover:opacity-100 transition-opacity flex items-center">
          <span className="material-symbols-outlined text-ink-black">graphic_eq</span>
        </button>
      </div>
    </header>
  )
}

type NavId = 'collection' | 'player' | 'notes' | 'more'

export function RecordsBottomNav({ active }: { active: NavId }) {
  const tabs: Array<{ id: NavId; icon: string; label: string; to: string }> = [
    { id: 'collection', icon: 'adjust', label: 'COLLECTION', to: '/' },
    { id: 'player', icon: 'album', label: 'PLAYER', to: '/' },
    { id: 'notes', icon: 'history_edu', label: 'NOTES', to: '/' },
    { id: 'more', icon: 'menu', label: 'MORE', to: '/' },
  ]
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-paper-cream border-t border-ink-black">
      <div className="max-w-lg mx-auto h-full flex justify-around items-stretch">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            to={tab.to as '/'}
            className={`flex flex-col items-center justify-center flex-1 gap-0.5 transition-colors ${
              active === tab.id
                ? 'text-homecoming-red border-t-2 border-homecoming-red -mt-px'
                : 'text-warm-muted hover:bg-warm-variant'
            }`}
          >
            <span className="material-symbols-outlined text-[22px]">{tab.icon}</span>
            <span className="text-[9px] font-bold tracking-[0.1em]">{tab.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export function TrackRevealOverlay({
  track,
  onClose,
  themeColor = '#8B2A2A',
}: {
  track: Track | null
  onClose: () => void
  themeColor?: string
}) {
  if (!track || !track.selector) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-end">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative z-10 w-full bg-[#141414] text-white max-h-[92vh] overflow-y-auto">
        <div className="max-w-lg mx-auto p-6 pb-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 opacity-50 hover:opacity-100 transition-opacity"
          >
            <span className="material-symbols-outlined text-white">close</span>
          </button>

          <p
            className="text-[11px] font-bold tracking-[0.15em] text-white/40 mb-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {track.num}. NOW PLAYING
            <span className="float-right">{track.duration}</span>
          </p>
          <h2
            className="font-sans text-[32px] font-bold leading-tight text-white"
            style={{ letterSpacing: '-0.04em', fontFamily: 'Inter, sans-serif' }}
          >
            {track.title}
          </h2>
          <p className="mt-1 text-[16px] font-medium" style={{ color: themeColor }}>
            {track.artist}
          </p>

          <div className="h-px bg-white/10 my-5" />

          <p className="text-[11px] font-bold tracking-[0.15em] text-white/40 mb-3">
            SELECTION NOTE BY {track.selector.name.toUpperCase()}
          </p>
          <p className="text-white/90 text-[16px] leading-relaxed italic">
            "{track.selector.note}"
          </p>

          <div className="flex justify-center my-8">
            <div className="relative w-44 h-44">
              <div
                className="absolute inset-0 rounded-full spin-slow border-[8px] border-[#222]"
                style={{
                  backgroundColor: '#0a0a0a',
                  background:
                    'repeating-radial-gradient(circle at center, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 2px, transparent 5px)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-[#2a2a2a] border-2 border-[#444] flex items-center justify-center">
                  <span className="text-base font-bold text-white/60">
                    {track.selector.initials}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-[11px] font-bold tracking-[0.15em] text-white/30 mb-5">
            COLLECTOR ID: {track.selector.collectorId}
          </p>

          <div className="flex items-center gap-3 bg-[#222] p-4 border border-white/10">
            <button
              className="w-10 h-10 flex-shrink-0 flex items-center justify-center"
              style={{ backgroundColor: themeColor }}
            >
              <span className="material-symbols-outlined text-white text-[20px]">
                play_arrow
              </span>
            </button>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold tracking-[0.12em] text-white/40 uppercase">
                Voice Message From
              </p>
              <p className="text-[13px] font-medium text-white uppercase">
                {track.selector.name}
              </p>
            </div>
            <div className="flex gap-[2px] items-center">
              {[8, 14, 10, 18, 9, 13, 16, 10, 15, 11, 8, 14].map((h, i) => (
                <div
                  key={i}
                  className="w-[3px] rounded-full bg-white/25"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TrackItem({
  track,
  colorClass,
  onReveal,
}: {
  track: Track
  colorClass: string
  onReveal: (track: Track) => void
}) {
  return (
    <div className="flex flex-col gap-1.5 py-3 border-b border-ink-black/10 last:border-0 -mx-2 px-2 hover:bg-warm-container rounded-sm transition-colors">
      <div className="flex justify-between items-start gap-4">
        <div className="flex gap-4">
          <span className={`text-[13px] font-medium shrink-0 mt-0.5 ${colorClass}`}>
            {track.num}.
          </span>
          <div>
            <h4 className="font-sans text-[17px] font-semibold leading-tight text-ink-black">
              {track.title}
            </h4>
            <p className="text-[13px] font-medium text-warm-muted mt-0.5">{track.artist}</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
          {track.nowPlaying && (
            <span className={`material-symbols-outlined text-[16px] ${colorClass}`}>
              equalizer
            </span>
          )}
          <span className="text-[13px] font-medium text-warm-muted">{track.duration}</span>
        </div>
      </div>
      {track.selector && (
        <button
          onClick={() => onReveal(track)}
          className={`ml-8 text-[10px] font-bold tracking-[0.13em] uppercase text-left hover:underline ${colorClass}`}
        >
          QUI A CHOISI CE TITRE ?
        </button>
      )}
    </div>
  )
}

export function TracklistSection({
  side,
  total,
  tracks,
  colorClass,
  onReveal,
}: {
  side: 'A' | 'B'
  total: string
  tracks: Track[]
  colorClass: string
  onReveal: (track: Track) => void
}) {
  return (
    <section className="mb-10">
      <div className="flex justify-between items-baseline border-b border-ink-black/20 pb-3 mb-1">
        <h3 className="text-[12px] font-bold tracking-[0.15em] text-ink-black">SIDE {side}</h3>
        <span className="text-[13px] font-medium text-warm-muted">{total} TOTAL</span>
      </div>
      <div className="flex flex-col">
        {tracks.map((track) => (
          <TrackItem key={track.num} track={track} colorClass={colorClass} onReveal={onReveal} />
        ))}
      </div>
    </section>
  )
}
