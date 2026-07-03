export type RevealMedia = {
  type: 'image' | 'video'
  src: string
  caption?: string
}

export type Reveal = {
  trackId: string
  contributor: string
  media: RevealMedia[]
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

  // Reveals avec photos / vidéo / messages
  { trackId: 'origins-b-1', contributor: 'Alexis', media: [{ type: 'image', src: '/reveals/origins-b-1-alexis-1.jpeg' }] },
  { trackId: 'origins-b-2', contributor: 'Jérémie Gaspalon', media: [], message: "À l'époque où on commençait à rapper, t'étais arrivé avec un texte de malade. Je m'étais dit \"Ouaaaa le gars est trop fort !\" alors que t'avais juste pris les paroles du 113 et fait croire que c'était de toi ! 🤣" },
  { trackId: 'origins-b-3', contributor: 'Wyssam', media: [{ type: 'image', src: '/reveals/origins-b-3-wyssam-1.jpeg' }, { type: 'image', src: '/reveals/origins-b-3-wyssam-2.jpeg' }] },
  { trackId: 'becoming-a-1', contributor: 'Cécilia', media: [{ type: 'image', src: '/reveals/becoming-a-1-cecilia-1.jpeg' }, { type: 'image', src: '/reveals/becoming-a-1-cecilia-2.jpeg' }] },
  { trackId: 'becoming-a-2', contributor: 'Marie', media: [{ type: 'image', src: '/reveals/becoming-a-2-marie-1.jpeg' }, { type: 'image', src: '/reveals/becoming-a-2-marie-2.jpeg' }, { type: 'image', src: '/reveals/becoming-a-2-marie-3.jpeg' }] },
  { trackId: 'becoming-a-3', contributor: 'Jérémy Casteuble', media: [{ type: 'image', src: '/reveals/becoming-a-3-jeremy-casteuble-1.jpeg' }] },
  { trackId: 'becoming-b-1', contributor: 'Amin', media: [{ type: 'image', src: '/reveals/becoming-b-1-amin-1.jpeg' }] },
  { trackId: 'becoming-b-2', contributor: 'Manu', media: [{ type: 'image', src: '/reveals/becoming-b-2-manu-1.jpeg' }] },
  { trackId: 'homecoming-a-1', contributor: 'Léo', media: [
    { type: 'image', src: '/reveals/homecoming-a-1-leo-1.jpeg', caption: 'La main sur le cuissot (aka frôler la mort)' },
    { type: 'image', src: '/reveals/homecoming-a-1-leo-2.jpeg', caption: 'Montaigristo' },
    { type: 'image', src: '/reveals/homecoming-a-1-leo-3.jpeg', caption: 'Grimace (& rides) marseillais' },
    { type: 'image', src: '/reveals/homecoming-a-1-leo-4.jpeg', caption: 'Tema la dégaine' },
    { type: 'video', src: '/reveals/homecoming-a-1-leo-5.mp4', caption: 'Un amour refoulé' },
  ], message: "Mon Pic'Pic, toi et moi on a connecté musicalement par notre amour respectif pour la House Music. Très sûrement le point de départ d'une belle amitié de gros bézeurrrs. Sur l'énorme quantité de titres qu'on s'est partagés depuis le début, c'est clairement la House qui ressort le plus. J'ai choisi ce titre parce que c'est mon fav parmi tous ceux que tu m'as fait découvrir, et sur lequel je te revois hocher la tête et les rides quand tu m'as vu le jouer la seule fois où tu m'as vu mixer en public. Et si t'es pas content du titre ou de la version, sache que c'était ça ou la BO de Père Castor pour toutes tes tunnel-anecdotes de vieux bourlingueur de la musique. Donc estime-toi heureux ! Allez bisous ma vieille branche ancestrale fossilisée" },
]

export function getReveal(trackId: string): Reveal | undefined {
  return reveals.find((r) => r.trackId === trackId)
}
