export type TrackSide = 'A' | 'B' | 'J'

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
  sideBLabel: string
}

const originsTracklist: TrackData[] = [
  {
    id: 'origins-a-1',
    vinyl: 'origins',
    side: 'A',
    number: 1,
    artist: 'Léopold Nord & Vous',
    title: "C'est l'amour (1988)",
    duration: '3:15',
  },
  {
    id: 'origins-a-2',
    vinyl: 'origins',
    side: 'A',
    number: 2,
    artist: 'Pow Wow',
    title: 'Le Lion est mort ce soir',
    duration: '2:59',
  },
  {
    id: 'origins-a-3',
    vinyl: 'origins',
    side: 'A',
    number: 3,
    artist: 'Chabat, Lauby, Darmon, Farrugia',
    title: 'La Carioca',
    duration: '2:25',
  },
  {
    id: 'origins-a-4',
    vinyl: 'origins',
    side: 'A',
    number: 4,
    artist: 'Jungle',
    title: 'Back on 74',
    duration: '3:29',
  },
  {
    id: 'origins-b-1',
    vinyl: 'origins',
    side: 'B',
    number: 1,
    artist: '2 Unlimited',
    title: 'Get Ready',
    duration: '3:42',
  },
  {
    id: 'origins-b-2',
    vinyl: 'origins',
    side: 'B',
    number: 2,
    artist: '113 feat. Doudou Masta',
    title: 'Truc de fou',
    duration: '4:16',
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
    duration: '4:24',
  },
  {
    id: 'becoming-a-2',
    vinyl: 'becoming',
    side: 'A',
    number: 2,
    artist: 'Duck Sauce, A-Trak, Armand Van Helden',
    title: 'Big Bad Wolf',
    duration: '2:59',
  },
  {
    id: 'becoming-a-3',
    vinyl: 'becoming',
    side: 'A',
    number: 3,
    artist: 'UGK',
    title: 'One Day',
    duration: '4:47',
  },
  {
    id: 'becoming-b-1',
    vinyl: 'becoming',
    side: 'B',
    number: 1,
    artist: 'Vybz Kartel',
    title: 'Summer Time',
    duration: '4:10',
  },
  {
    id: 'becoming-b-2',
    vinyl: 'becoming',
    side: 'B',
    number: 2,
    artist: 'Ghali',
    title: '22:22',
    duration: '3:00',
  },
  {
    id: 'becoming-b-3',
    vinyl: 'becoming',
    side: 'B',
    number: 3,
    artist: 'Franko',
    title: 'Coller la petite',
    duration: '3:52',
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
    artist: 'Kid Cudi',
    title: "Day 'n' Nite",
    duration: '2:48',
  },
  {
    id: 'emerging-a-3',
    vinyl: 'emerging',
    side: 'A',
    number: 3,
    artist: 'Juicy J feat. Wiz Khalifa',
    title: "Stoner's Night 2",
    duration: '3:35',
  },
  {
    id: 'emerging-a-4',
    vinyl: 'emerging',
    side: 'A',
    number: 4,
    artist: 'Yeah Yeah Yeahs',
    title: 'Head Will Roll (A-Trak remix)',
    duration: '3:23',
  },
  {
    id: 'emerging-b-1',
    vinyl: 'emerging',
    side: 'B',
    number: 1,
    artist: 'Mk Dub Revisited Edit',
    title: 'Push The Feeling On',
    duration: '4:03',
  },
  {
    id: 'emerging-b-2',
    vinyl: 'emerging',
    side: 'B',
    number: 2,
    artist: "ISHA & Limsa D'Aulnay",
    title: 'But en Or',
    duration: '2:37',
  },
  {
    id: 'emerging-b-3',
    vinyl: 'emerging',
    side: 'B',
    number: 3,
    artist: 'Kanye West, Pusha T',
    title: 'Runaway',
    duration: '7:00',
  },
]

const crossroadsTracklist: TrackData[] = [
  {
    id: 'crossroads-a-1',
    vinyl: 'crossroads',
    side: 'A',
    number: 1,
    artist: 'Mike Jones feat. Slim Thug and Paul Wall',
    title: "Still Tippin'",
    duration: '4:31',
  },
  {
    id: 'crossroads-a-2',
    vinyl: 'crossroads',
    side: 'A',
    number: 2,
    artist: 'Booba x Francky Vincent Mashup',
    title: 'Validée de la Passion',
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
    duration: '4:34',
  },
  {
    id: 'crossroads-b-3',
    vinyl: 'crossroads',
    side: 'B',
    number: 3,
    artist: 'Kwengface, Joy Orbison, Overmono',
    title: 'Freedom 2',
    duration: '3:26',
  },
]

const homecomingTracklist: TrackData[] = [
  {
    id: 'homecoming-a-1',
    vinyl: 'homecoming',
    side: 'A',
    number: 1,
    artist: 'Roy Davis Jr. & Peven Everett',
    title: 'Gabrielle (Words To Give By Mix)',
    duration: '7:22',
  },
  {
    id: 'homecoming-a-2',
    vinyl: 'homecoming',
    side: 'A',
    number: 2,
    artist: 'Chase & Status, Clementine Douglas',
    title: 'Say The Word',
    duration: '3:57',
  },
  {
    id: 'homecoming-j-1',
    vinyl: 'homecoming',
    side: 'J',
    number: 1,
    artist: 'Jorja Smith',
    title: 'The Way I Love You',
    duration: '3:22',
  },
  {
    id: 'homecoming-j-2',
    vinyl: 'homecoming',
    side: 'J',
    number: 2,
    artist: 'Jim Legxacy',
    title: 'sos',
    duration: '2:15',
  },
  {
    id: 'homecoming-j-3',
    vinyl: 'homecoming',
    side: 'J',
    number: 3,
    artist: 'Mansur Brown',
    title: 'Love is Mine',
    duration: '3:26',
  },
  {
    id: 'homecoming-j-4',
    vinyl: 'homecoming',
    side: 'J',
    number: 4,
    artist: 'Alicia Keys',
    title: 'Un-thinkable',
    duration: '4:09',
  },
]

export const VINYLS: VinylData[] = [
  {
    id: 'origins',
    chapter: 1,
    label: 'Origins',
    color: '#C65D3B',
    colorVar: 'var(--color-origins)',
    sideATracks: originsTracklist.filter((t) => t.side === 'A'),
    sideBTracks: originsTracklist.filter((t) => t.side === 'B'),
    sideATotal: '12:08',
    sideBTotal: '11:41',
    sideBLabel: 'B',
  },
  {
    id: 'becoming',
    chapter: 2,
    label: 'Becoming',
    color: '#1D4ED8',
    colorVar: 'var(--color-becoming)',
    sideATracks: becomingTracklist.filter((t) => t.side === 'A'),
    sideBTracks: becomingTracklist.filter((t) => t.side === 'B'),
    sideATotal: '12:10',
    sideBTotal: '11:02',
    sideBLabel: 'B',
  },
  {
    id: 'emerging',
    chapter: 3,
    label: 'Emerging',
    color: '#7856AF',
    colorVar: 'var(--color-emerging)',
    sideATracks: emergingTracklist.filter((t) => t.side === 'A'),
    sideBTracks: emergingTracklist.filter((t) => t.side === 'B'),
    sideATotal: '12:13',
    sideBTotal: '13:40',
    sideBLabel: 'B',
  },
  {
    id: 'crossroads',
    chapter: 4,
    label: 'Crossroads',
    color: '#68703E',
    colorVar: 'var(--color-crossroads)',
    sideATracks: crossroadsTracklist.filter((t) => t.side === 'A'),
    sideBTracks: crossroadsTracklist.filter((t) => t.side === 'B'),
    sideATotal: '13:19',
    sideBTotal: '11:43',
    sideBLabel: 'B',
  },
  {
    id: 'homecoming',
    chapter: 5,
    label: 'Homecoming',
    color: '#7A1F1F',
    colorVar: 'var(--color-homecoming)',
    sideATracks: homecomingTracklist.filter((t) => t.side === 'A'),
    sideBTracks: homecomingTracklist.filter((t) => t.side === 'J'),
    sideATotal: '11:19',
    sideBTotal: '13:12',
    sideBLabel: 'J',
  },
]

export function getVinyl(id: VinylId): VinylData {
  const vinyl = VINYLS.find((v) => v.id === id)
  if (!vinyl) throw new Error(`Vinyl not found: ${id}`)
  return vinyl
}
