import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { headers } from 'next/headers'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: {
    absolute: 'Marechal Web ',
    template: '%s | Login'
  },
  description: 'Generated by create next app',
}

export default async function RootLayout({
  //queria saber se é uma boa ideia eu ficar colocando async em quase tudo :/
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  //tive que remover "urlpath" daqui pois na nova versão do Next ele não pode mais ser usado aqui

  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/*vou remover esta fonte na versão final */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Pacifico&family=Whisper&display=swap"
          rel="stylesheet"
        />
        {/* possível font da versão final */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        {/* JQuery */}
        {/* Acho que eu irei excluir o JQuery e deixar tudo com o React */}
        <link
          rel="stylesheet"
          href="https://cdn.datatables.net/2.0.7/css/dataTables.dataTables.css"
        />
        <script
          src="https://code.jquery.com/jquery-3.7.1.js"
          integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
