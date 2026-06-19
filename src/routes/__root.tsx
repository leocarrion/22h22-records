import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import * as React from 'react'
import type { QueryClient } from '@tanstack/react-query'
import appCss from '~/styles/app.css?url'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: '22H22 Records',
      },
      {
        name: 'description',
        content: 'Quatre vinyles, une vie en musique. Un cadeau pour Adrien.',
      },
      {
        property: 'og:title',
        content: '22H22 Records',
      },
      {
        property: 'og:description',
        content: 'Quatre vinyles, une vie en musique. Un cadeau pour Adrien.',
      },
      {
        property: 'og:image',
        content: '/og-image.png',
      },
      {
        property: 'og:type',
        content: 'website',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Archivo+Black&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap',
      },
    ],
  }),
  notFoundComponent: () => (
    <div
      className="min-h-screen bg-warm-surface flex items-center justify-center"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <p className="text-[13px] font-bold tracking-[0.15em] text-warm-muted uppercase">
        404 — Page introuvable
      </p>
    </div>
  ),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
