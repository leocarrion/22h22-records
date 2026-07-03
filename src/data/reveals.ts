export type Reveal = {
  trackId: string
  contributor: string
  media: string[]
  message?: string
}

export const reveals: Reveal[] = [
  { trackId: 'origins-a-1', contributor: 'Maman', media: [] },
  { trackId: 'origins-a-2', contributor: 'Papa', media: [] },
  { trackId: 'origins-a-3', contributor: 'Alice, Sibylle & Sasha', media: [] },
  { trackId: 'origins-a-4', contributor: 'Alice, Sibylle & Sasha', media: [] },
  { trackId: 'becoming-b-3', contributor: 'Zoé', media: [] },
  { trackId: 'emerging-a-1', contributor: 'Dumè', media: [] },
  { trackId: 'emerging-a-2', contributor: 'Julien', media: [] },
  { trackId: 'emerging-a-3', contributor: 'Louis', media: [] },
  { trackId: 'emerging-a-4', contributor: 'Salima', media: [] },
  { trackId: 'emerging-b-1', contributor: 'Pauline', media: [] },
  { trackId: 'emerging-b-2', contributor: 'Yaya', media: [] },
  { trackId: 'emerging-b-3', contributor: 'Diva', media: [] },
  { trackId: 'crossroads-a-1', contributor: 'Lysiane', media: [] },
  { trackId: 'crossroads-a-2', contributor: 'Jérémie Roturier', media: [] },
  { trackId: 'crossroads-a-3', contributor: 'Maxime Fruit', media: [] },
  { trackId: 'crossroads-b-1', contributor: 'Michèle', media: [] },
  { trackId: 'crossroads-b-2', contributor: 'Mareva', media: [] },
  { trackId: 'crossroads-b-3', contributor: 'Angelina', media: [] },
  { trackId: 'homecoming-a-2', contributor: 'Julie', media: [] },
  { trackId: 'homecoming-j-1', contributor: 'Julie', media: [] },
  { trackId: 'homecoming-j-2', contributor: 'Julie', media: [] },
  { trackId: 'homecoming-j-3', contributor: 'Julie', media: [] },
  { trackId: 'homecoming-j-4', contributor: 'Julie', media: [] },
]

export function getReveal(trackId: string): Reveal | undefined {
  return reveals.find((r) => r.trackId === trackId)
}
