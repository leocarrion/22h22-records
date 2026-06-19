export type TrackSide = 'A' | 'B'

export type TrackData = {
  id: string
  vinyl: VinylId
  side: TrackSide
  number: number
  artist: string
  title: string
  duration: string
}

export type VinylId = 'origins' | 'becoming' | 'emerging' | 'crossroads' | 'homecoming'

export type VinylData = {
  id: VinylId
  chapter: number
  label: string
  color: string
  colorVar: string
  sideATracks: TrackData[]
  sideBTracks: TrackData[]
  sideATotal: string
  sideBTotal: string
}

const originsTracklist: TrackData[] = [
  {
    id: 'origins-a-1',
    vinyl: 'origins',
    side: 'A',
    number: 1,
    artist: 'Léopold Nord & Vous',
    title: "C'est l'amour (Version originale)",
    duration: '3:25',
  },
  {
    id: 'origins-a-2',
    vinyl: 'origins',
    side: 'A',
    number: 2,
    artist: 'Pow Wow',
    title: 'Le lion est mort ce soir (Album Version)',
    duration: '2:58',
  },
  {
    id: 'origins-a-3',
    vinyl: 'origins',
    side: 'A',
    number: 3,
    artist: 'Philippe Chany',
    title: 'La carioca (feat. Alain Chabat, Gérard Darmon)',
    duration: '3:29',
  },
  {
    id: 'origins-a-4',
    vinyl: 'origins',
    side: 'A',
    number: 4,
    artist: 'Jungle',
    title: 'Back On 74',
    duration: '3:29',
  },
  {
    id: 'origins-b-1',
    vinyl: 'origins',
    side: 'B',
    number: 1,
    artist: '2 Unlimited',
    title: 'Get Ready',
    duration: '3:43',
  },
  {
    id: 'origins-b-2',
    vinyl: 'origins',
    side: 'B',
    number: 2,
    artist: '113',
    title: 'Truc De Fou (feat. Doudou Masta)',
    duration: '3:49',
  },
  {
    id: 'origins-b-3',
    vinyl: 'origins',
    side: 'B',
    number: 3,
    artist: 'Lazee',
    title: "I'm Not Pop",
    duration: '3:43',
  },
]

const becomingTracklist: TrackData[] = [
  {
    id: 'becoming-a-1',
    vinyl: 'becoming',
    side: 'A',
    number: 1,
    artist: 'Janelle Monáe',
    title: 'Tightrope',
    duration: '4:25',
  },
  {
    id: 'becoming-a-2',
    vinyl: 'becoming',
    side: 'A',
    number: 2,
    artist: 'Duck Sauce',
    title: 'Big Bad Wolf',
    duration: '4:53',
  },
  {
    id: 'becoming-a-3',
    vinyl: 'becoming',
    side: 'A',
    number: 3,
    artist: 'UGK (Underground Kingz)',
    title: 'One Day',
    duration: '5:24',
  },
  {
    id: 'becoming-b-1',
    vinyl: 'becoming',
    side: 'B',
    number: 1,
    artist: 'Vybz Kartel',
    title: 'Summertime',
    duration: '3:13',
  },
  {
    id: 'becoming-b-2',
    vinyl: 'becoming',
    side: 'B',
    number: 2,
    artist: 'Ghali',
    title: '2222',
    duration: '3:00',
  },
  {
    id: 'becoming-b-3',
    vinyl: 'becoming',
    side: 'B',
    number: 3,
    artist: 'Franko',
    title: 'Coller la petite',
    duration: '3:53',
  },
]

const emergingTracklist: TrackData[] = [
  {
    id: 'emerging-a-1',
    vinyl: 'emerging',
    side: 'A',
    number: 1,
    artist: 'Lorenzo',
    title: 'Nique la BAC',
    duration: '2:27',
  },
  {
    id: 'emerging-a-2',
    vinyl: 'emerging',
    side: 'A',
    number: 2,
    artist: 'KID CUDI',
    title: 'Day N Nite',
    duration: '2:48',
  },
  {
    id: 'emerging-a-3',
    vinyl: 'emerging',
    side: 'A',
    number: 3,
    artist: 'Juicy J',
    title: "Stoner's Night 2 (feat. Wiz Khalifa)",
    duration: '3:35',
  },
  {
    id: 'emerging-a-4',
    vinyl: 'emerging',
    side: 'A',
    number: 4,
    artist: 'Yeah Yeah Yeahs',
    title: 'Heads Will Roll (A-Trak Remix)',
    duration: '6:24',
  },
  {
    id: 'emerging-b-1',
    vinyl: 'emerging',
    side: 'B',
    number: 1,
    artist: 'Nightcrawlers',
    title: 'Push The Feeling On (Mk Dub Revisited Edit)',
    duration: '4:03',
  },
  {
    id: 'emerging-b-2',
    vinyl: 'emerging',
    side: 'B',
    number: 2,
    artist: 'Isha, Limsa D\'Aulnay',
    title: 'But en or',
    duration: '2:37',
  },
  {
    id: 'emerging-b-3',
    vinyl: 'emerging',
    side: 'B',
    number: 3,
    artist: 'Kanye West',
    title: 'Runaway (Album Version)',
    duration: '6:11',
  },
]

const crossroadsTracklist: TrackData[] = [
  {
    id: 'crossroads-a-1',
    vinyl: 'crossroads',
    side: 'A',
    number: 1,
    artist: 'Mike Jones',
    title: "Still Tippin' (feat. Slim Thug and Paul Wall)",
    duration: '4:31',
  },
  {
    id: 'crossroads-a-2',
    vinyl: 'crossroads',
    side: 'A',
    number: 2,
    artist: 'Booba x Francky Vincent',
    title: 'Validée de la Passion (Mashup)',
    duration: '4:48',
  },
  {
    id: 'crossroads-a-3',
    vinyl: 'crossroads',
    side: 'A',
    number: 3,
    artist: 'Roy Ayers Ubiquity',
    title: 'Everybody Loves The Sunshine',
    duration: '4:00',
  },
  {
    id: 'crossroads-b-1',
    vinyl: 'crossroads',
    side: 'B',
    number: 1,
    artist: 'Myd',
    title: 'Born a Loser',
    duration: '3:43',
  },
  {
    id: 'crossroads-b-2',
    vinyl: 'crossroads',
    side: 'B',
    number: 2,
    artist: 'Fred again.., Lil Yachty, Overmono',
    title: 'stayinit',
    duration: '4:35',
  },
  {
    id: 'crossroads-b-3',
    vinyl: 'crossroads',
    side: 'B',
    number: 3,
    artist: 'Kwengface, Joy Orbison, Overmono',
    title: 'Freedom 2',
    duration: '3:27',
  },
]

const homecomingTracklist: TrackData[] = [
  {
    id: 'homecoming-a-1',
    vinyl: 'homecoming',
    side: 'A',
    number: 1,
    artist: 'Roy Davis Jr',
    title: 'Gabrielle (Words To Give By mix)',
    duration: '7:24',
  },
  {
    id: 'homecoming-a-2',
    vinyl: 'homecoming',
    side: 'A',
    number: 2,
    artist: 'Chase & Status',
    title: 'Say The Word',
    duration: '3:57',
  },
  {
    id: 'homecoming-b-1',
    vinyl: 'homecoming',
    side: 'B',
    number: 1,
    artist: 'Jorja Smith',
    title: 'The Way I Love You',
    duration: '3:24',
  },
  {
    id: 'homecoming-b-2',
    vinyl: 'homecoming',
    side: 'B',
    number: 2,
    artist: 'Jim Legxacy',
    title: 'sos',
    duration: '2:17',
  },
  {
    id: 'homecoming-b-3',
    vinyl: 'homecoming',
    side: 'B',
    number: 3,
    artist: 'Mansur Brown',
    title: 'Love Is Mine',
    duration: '3:26',
  },
  {
    id: 'homecoming-b-4',
    vinyl: 'homecoming',
    side: 'B',
    number: 4,
    artist: 'Alicia Keys',
    title: 'Un-Thinkable',
    duration: '4:09',
  },
]

export const VINYLS: VinylData[] = [
  {
    id: 'origins',
    chapter: 1,
    label: 'Origins',
    color: '#D9622A',
    colorVar: 'var(--color-origins)',
    sideATracks: originsTracklist.filter((t) => t.side === 'A'),
    sideBTracks: originsTracklist.filter((t) => t.side === 'B'),
    sideATotal: '13:21',
    sideBTotal: '11:15',
  },
  {
    id: 'becoming',
    chapter: 2,
    label: 'Becoming',
    color: '#2A5BD9',
    colorVar: 'var(--color-becoming)',
    sideATracks: becomingTracklist.filter((t) => t.side === 'A'),
    sideBTracks: becomingTracklist.filter((t) => t.side === 'B'),
    sideATotal: '14:42',
    sideBTotal: '10:06',
  },
  {
    id: 'emerging',
    chapter: 3,
    label: 'Emerging',
    color: '#C99A2B',
    colorVar: 'var(--color-emerging)',
    sideATracks: emergingTracklist.filter((t) => t.side === 'A'),
    sideBTracks: emergingTracklist.filter((t) => t.side === 'B'),
    sideATotal: '15:14',
    sideBTotal: '12:52',
  },
  {
    id: 'crossroads',
    chapter: 4,
    label: 'Crossroads',
    color: '#6B7A3A',
    colorVar: 'var(--color-crossroads)',
    sideATracks: crossroadsTracklist.filter((t) => t.side === 'A'),
    sideBTracks: crossroadsTracklist.filter((t) => t.side === 'B'),
    sideATotal: '13:19',
    sideBTotal: '11:45',
  },
  {
    id: 'homecoming',
    chapter: 5,
    label: 'Homecoming',
    color: '#8B2A2A',
    colorVar: 'var(--color-homecoming)',
    sideATracks: homecomingTracklist.filter((t) => t.side === 'A'),
    sideBTracks: homecomingTracklist.filter((t) => t.side === 'B'),
    sideATotal: '11:21',
    sideBTotal: '13:16',
  },
]

export function getVinyl(id: VinylId): VinylData {
  const vinyl = VINYLS.find((v) => v.id === id)
  if (!vinyl) throw new Error(`Vinyl not found: ${id}`)
  return vinyl
}
