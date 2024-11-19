'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Slideshow() {
  //simulando a API
  const slideimages = [
    { local: '/enem.png', alt: 'enem' },
    { local: '/estudantes.png', alt: 'enem' },
    { local: '/impressora3d.jpg', alt: 'enem' },
    { local: '/medalharedacao.jpg', alt: 'enem' },
  ]

  const [slideatual, setslideatual] = useState<number>(0)

  function anterslide() {
    const isslideatual = slideatual === 0
    const mudarslide = isslideatual ? slideimages.length - 1 : slideatual - 1
    setslideatual(mudarslide)
  }
  function proxslide() {
    const isslideatual = slideatual === slideimages.length - 1
    const mudarslide = isslideatual ? 0 : slideatual + 1
    setslideatual(mudarslide)
  }

  return (
    <div className="w-full h-full m-auto py-16 px-4 flex justify-center relative">
      <Image
        src={slideimages[slideatual].local}
        width={700}
        height={500}
        alt={slideimages[slideatual].alt}
        className="w-[500] h-[350] rounded-2xl bg-center bg-cover duration-500"
      />
      {/* seta direita */}
      <Image
        src={'/seta.svg'}
        onClick={anterslide}
        alt="seta para esquerdo"
        width={30}
        height={30}
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      />
      {/* seta esquerda */}
      <Image
        src={'/seta.svg'}
        onClick={proxslide}
        alt='seta para a direita'
        width={30}
        height={30}
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      />
    </div>
  )
}
