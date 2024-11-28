import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '| Avisos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className="w-full flex flex-col items-center mt-10 border-spacing-1 border-e-teal-700">
      <h1 className="bg-slate-400 p-1 w-full items-center text-[4vw]">
        <span className="ml-[180px]">Avisos</span>
      </h1>

      {children}
    </section>
  )
}
