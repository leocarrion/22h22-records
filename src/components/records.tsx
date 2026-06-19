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

function spotifySearchUrl(artist: string, title: string) {
  return `https://open.spotify.com/search/${encodeURIComponent(`${artist} ${title}`)}`
}

function appleMusicSearchUrl(artist: string, title: string) {
  return `https://music.apple.com/search?term=${encodeURIComponent(`${artist} ${title}`)}`
}

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.516 17.313a.75.75 0 01-1.031.25c-2.823-1.725-6.376-2.115-10.563-1.159a.75.75 0 01-.334-1.463c4.583-1.047 8.515-.596 11.678 1.34a.75.75 0 01.25 1.032zm1.472-3.274a.937.937 0 01-1.288.308c-3.23-1.985-8.152-2.56-11.974-1.402a.937.937 0 11-.544-1.794c4.365-1.323 9.79-.682 13.498 1.6a.938.938 0 01.308 1.288zm.127-3.408C15.27 8.28 8.924 8.068 5.292 9.16a1.125 1.125 0 11-.653-2.154c4.213-1.278 11.218-1.031 15.641 1.633a1.125 1.125 0 11-1.165 1.932z"/>
    </svg>
  )
}

function AppleMusicIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208c-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.106 1.597-.35 2.296-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 011.038-2.022c.323-.157.672-.216 1.018-.274.368-.062.737-.12 1.098-.212.282-.072.442-.274.46-.558.003-.04.004-.082.004-.122V7.797c0-.345-.192-.522-.53-.453l-5.005 1.07c-.285.06-.405.2-.405.495v7.17c0 .37-.02.74-.126 1.1-.285.99-1.03 1.542-2.066 1.58-.476.017-.942-.03-1.39-.2a1.878 1.878 0 01-1.24-1.797c.014-.97.64-1.69 1.58-1.894.386-.084.778-.14 1.167-.208.274-.047.554-.08.818-.165.314-.1.42-.274.42-.6V5.645c0-.327.17-.55.485-.62 1.063-.233 2.125-.463 3.19-.692l2.897-.625c.619-.133.928.134.932.764v4.622z"/>
    </svg>
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
        <div className="flex gap-4 flex-1 min-w-0">
          <span className={`text-[13px] font-medium shrink-0 mt-0.5 ${colorClass}`}>
            {track.num}.
          </span>
          <div className="min-w-0">
            <h4 className="font-sans text-[17px] font-semibold leading-tight text-ink-black">
              {track.title}
            </h4>
            <p className="text-[13px] font-medium text-warm-muted mt-0.5">{track.artist}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0 mt-0.5">
          {track.nowPlaying && (
            <span className={`material-symbols-outlined text-[16px] ${colorClass}`}>
              equalizer
            </span>
          )}
          <span className="text-[13px] font-medium text-warm-muted">{track.duration}</span>
          <div className="flex items-center gap-1 ml-1">
            <a
              href={spotifySearchUrl(track.artist, track.title)}
              target="_blank"
              rel="noopener noreferrer"
              title="Écouter sur Spotify"
              className="relative group text-[#1DB954] opacity-70 hover:opacity-100 transition-all hover:scale-105"
              onClick={(e) => e.stopPropagation()}
            >
              <SpotifyIcon />
              <span className="pointer-events-none absolute bottom-full right-0 mb-1 whitespace-nowrap rounded bg-ink-black px-2 py-0.5 text-[10px] font-bold tracking-wide text-white opacity-0 group-hover:opacity-100 transition-opacity">
                Écouter sur Spotify
              </span>
            </a>
            <a
              href={appleMusicSearchUrl(track.artist, track.title)}
              target="_blank"
              rel="noopener noreferrer"
              title="Écouter sur Apple Music"
              className="relative group text-[#FC3C44] opacity-70 hover:opacity-100 transition-all hover:scale-105"
              onClick={(e) => e.stopPropagation()}
            >
              <AppleMusicIcon />
              <span className="pointer-events-none absolute bottom-full right-0 mb-1 whitespace-nowrap rounded bg-ink-black px-2 py-0.5 text-[10px] font-bold tracking-wide text-white opacity-0 group-hover:opacity-100 transition-opacity">
                Écouter sur Apple Music
              </span>
            </a>
          </div>
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
