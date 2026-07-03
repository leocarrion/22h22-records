import { useState } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { getReveal } from '~/data/reveals'
import { youtubeUrls } from '~/data/youtube-urls'

export type Selector = {
  name: string
  initials: string
  note: string
  collectorId: string
}

export type Track = {
  id?: string
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
        <Link
          to="/"
          className="font-sans text-xl font-bold text-ink-black uppercase hover:opacity-70 transition-opacity"
          style={{ letterSpacing: '-0.03em' }}
        >
          22H22 RECORDS
        </Link>
        <button className="opacity-40 hover:opacity-100 transition-opacity flex items-center">
          <span className="material-symbols-outlined text-ink-black">graphic_eq</span>
        </button>
      </div>
    </header>
  )
}

/** @deprecated Footer nav removed — use RecordsHeader backTo prop instead */
export function RecordsBottomNav({ active: _active }: { active: string }) {
  return null
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

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
    </svg>
  )
}

export function TrackItem({
  track,
  colorClass,
  onReveal,
  macaronSrc,
}: {
  track: Track
  colorClass: string
  onReveal: (track: Track) => void
  macaronSrc?: string
}) {
  const ytUrl = track.id ? youtubeUrls[track.id] : undefined

  return (
    <div className="track-row flex flex-col gap-1.5 py-3 border-b border-ink-black/10 last:border-0 -mx-2 px-2 hover:bg-warm-container rounded-sm transition-colors">
      <div className="flex justify-between items-start gap-3">
        <div className="flex gap-3 flex-1 min-w-0 items-center">
          {macaronSrc && (
            <div className="shrink-0 w-10 h-10 rounded-full overflow-hidden border border-black/10">
              <img
                src={macaronSrc}
                alt=""
                className="macaron-spin w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}
          <span className={`text-[13px] font-medium shrink-0 mt-0.5 ${colorClass}`}>
            {track.num}.</span>
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
          {ytUrl && (
            <div className="ml-1">
              <a
                href={ytUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Écouter sur YouTube"
                className="relative group text-[#FF0000] opacity-70 hover:opacity-100 transition-all hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              >
                <YouTubeIcon />
                <span className="pointer-events-none absolute bottom-full right-0 mb-1 whitespace-nowrap rounded bg-ink-black px-2 py-0.5 text-[10px] font-bold tracking-wide text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  Écouter sur YouTube
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
      {track.id && getReveal(track.id) && (
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
  macaronSrc,
}: {
  side: 'A' | 'B' | 'J'
  total: string
  tracks: Track[]
  colorClass: string
  onReveal: (track: Track) => void
  macaronSrc?: string
}) {
  return (
    <section className="mb-10">
      <div className="flex justify-between items-baseline border-b border-ink-black/20 pb-3 mb-1">
        <h3 className="text-[12px] font-bold tracking-[0.15em] text-ink-black">SIDE {side}</h3>
        <span className="text-[13px] font-medium text-warm-muted">{total} TOTAL</span>
      </div>
      <div className="flex flex-col">
        {tracks.map((track) => (
          <TrackItem
            key={track.num}
            track={track}
            colorClass={colorClass}
            onReveal={onReveal}
            macaronSrc={macaronSrc}
          />
        ))}
      </div>
    </section>
  )
}

export function RevealModal({
  track,
  onClose,
  themeColor = '#8B2A2A',
}: {
  track: Track | null
  onClose: () => void
  themeColor?: string
}) {
  const [mediaIndex, setMediaIndex] = useState(0)

  if (!track || !track.id) return null
  const reveal = getReveal(track.id)
  if (!reveal) return null

  const media = reveal.media
  const currentItem = media[mediaIndex] ?? null
  const total = media.length

  const prev = () => setMediaIndex((i) => Math.max(0, i - 1))
  const next = () => setMediaIndex((i) => Math.min(total - 1, i + 1))

  return (
    <div className="fixed inset-0 z-[100] flex items-end">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative z-10 w-full bg-[#141414] text-white max-h-[90vh] overflow-y-auto">
        <div className="max-w-lg mx-auto px-6 pt-6 pb-12">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 opacity-50 hover:opacity-100 transition-opacity"
          >
            <span className="material-symbols-outlined text-white">close</span>
          </button>

          <p
            className="text-[11px] font-bold tracking-[0.15em] text-white/40 mb-1"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {track.num}. {track.title.toUpperCase()}
          </p>
          <p className="text-[13px] font-medium mb-6" style={{ color: themeColor }}>
            {track.artist}
          </p>

          <div className="h-px bg-white/10 mb-6" />

          <p className="text-[11px] font-bold tracking-[0.15em] text-white/40 mb-4">
            SÉLECTIONNÉ PAR
          </p>
          <p
            className="text-[40px] font-bold text-white leading-tight mb-6"
            style={{ letterSpacing: '-0.03em', fontFamily: 'Inter, sans-serif' }}
          >
            {reveal.contributor}
          </p>

          {/* Media slider */}
          {total > 0 && currentItem && (
            <div className="mb-6">
              <div className="relative bg-black rounded overflow-hidden">
                {currentItem.type === 'image' ? (
                  <img
                    src={currentItem.src}
                    alt={currentItem.caption ?? ''}
                    className="w-full max-h-[60vw] object-cover"
                  />
                ) : (
                  <video
                    src={currentItem.src}
                    controls
                    playsInline
                    className="w-full max-h-[60vw]"
                  />
                )}
                {total > 1 && (
                  <>
                    <button
                      onClick={prev}
                      disabled={mediaIndex === 0}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 rounded-full disabled:opacity-20 hover:bg-black/80 transition-colors"
                    >
                      <span className="material-symbols-outlined text-white text-[18px]">chevron_left</span>
                    </button>
                    <button
                      onClick={next}
                      disabled={mediaIndex === total - 1}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 rounded-full disabled:opacity-20 hover:bg-black/80 transition-colors"
                    >
                      <span className="material-symbols-outlined text-white text-[18px]">chevron_right</span>
                    </button>
                  </>
                )}
              </div>

              <div className="flex items-center justify-between mt-2 px-1">
                {currentItem.caption ? (
                  <p className="text-[12px] text-white/50 italic flex-1">{currentItem.caption}</p>
                ) : (
                  <span />
                )}
                {total > 1 && (
                  <p className="text-[11px] font-bold tracking-wider text-white/30 shrink-0 ml-3">
                    {mediaIndex + 1} / {total}
                  </p>
                )}
              </div>

              {/* Dot indicators */}
              {total > 1 && (
                <div className="flex justify-center gap-1.5 mt-3">
                  {Array.from({ length: total }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setMediaIndex(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${i === mediaIndex ? 'bg-white' : 'bg-white/25'}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Message */}
          {reveal.message && (
            <p className="text-white/85 text-[15px] leading-relaxed italic whitespace-pre-line">
              "{reveal.message}"
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
