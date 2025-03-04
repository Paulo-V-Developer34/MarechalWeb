"use client"

import UsuarioLogado from './usuario'
import AdmNav from './AdmNav'
import { getCookies, user } from '@/utils/session'
import { urlpath } from '@/app/layout'
import { useEffect, useState } from 'react'
import { getURL } from 'next/dist/shared/lib/utils'

export default function Nav() {
  const [cookies, setCookies] = useState<user>({nome: "Usuário inválido", tipo: 1, id: "sdlkfj", sala: null})
  // const [urlPath, setUrlPath] = useState<string>(getURL())

  getURL()

  useEffect(()=>{},[getURL])

  const cookies = getCookies()
  console.log(`Sua localização é: ${urlpath}`)
  console.log(`Sua conta no home page é ${cookies}`)

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-base font-bold">
          <i>
            <p>Logo</p>
          </i>
        </div>
        <div className="flex space-x-4">
          {/* links */}
          <div className={`${urlpath !== '/home' && 'hidden'} flex gap-[8vw]`}>
            <a href="#avisos">
              <p className="text-gray-300 hover:text-white">Avisos</p>
            </a>
            <a href="#agenda">
              <p className="text-gray-300 hover:text-white">Agenda</p>
            </a>
            <a href="#impressora">
              <p className="text-gray-300 hover:text-white">Impressora 3D</p>
            </a>

            {cookies?.tipo === 3 && <AdmNav />}
            <a href="#faleconosco">
              <p className="text-gray-300 hover:text-white">Fale conosco</p>
            </a>
          </div>
          <UsuarioLogado />
        </div>
      </div>
    </nav>
  )
}

//esse código não funcionou
// export const GetSSProps: GetServerSideProps = async (context)=>{
//   const { req } = context
//   const pathname: string = req.url || '/'

//   return {
//     props: {
//       pathname
//     }
//   }
// }
