import Footer from '@/components/common/Footer'
import Nav from '@/components/common/Nav'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '| Impressora',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="flex flex-col items-center border-spacing-1 pt-10">
        {children}
      </main>
      <Footer />
    </>
  )
}
