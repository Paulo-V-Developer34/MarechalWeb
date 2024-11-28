import Form from '@/components/common/forms/Form-login'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '| Login', //algo de errado não está certo, era para esse título se juntar com o "Marechal Web"
}

export default function Home() {
  return (
    <div
      className="flex items-center justify-center h-screen w-screen"
      style={{
        backgroundImage: `url('/estudantes.png')`,
        backgroundSize: 'cover', // Faz a imagem cobrir toda a área
        backgroundRepeat: 'no-repeat', // Evita a repetição da imagem
        backgroundPosition: 'center',
      }}
    >
      <Form />
    </div>
  )
}
