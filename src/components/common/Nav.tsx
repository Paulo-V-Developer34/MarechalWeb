"use client"

import UsuarioLogado from './usuario'
import AdmNav from './AdmNav'
import { getCookies, type user } from '@/utils/session'
// import { urlpath } from '@/app/layout'
// import { getURL } from 'next/dist/shared/lib/utils'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Link from 'next/link'

export default function Nav() {
  const [cookies, setCookies] = useState<user | null>(null)
  const urlpath = usePathname()
  // const cookies = await getCookies()
  console.log(`Sua localização é: ${urlpath}`)
  console.log(`Sua conta no home page é ${cookies}`)

  useEffect(()=>{
    getCookies().
      then(
        result => setCookies(result)
      )
  },[])

  // switch (urlpath) {
  //   case "value":
  //     console.log("o valor de 'urlpath' é 'value'")
  //     break;
        
  //   default:
  //     console.log(`o valor de 'urlpath' é ${urlpath}`)
  //     break;
  // }

  return (
    <header>
      <nav className="bg-gray-800 p-4 fixed top-0 w-full shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-base font-bold">
            <i>
              <p>Logo</p>
            </i>
          </div>
          <div className="flex space-x-4">
            {/* links */}
            {urlpath === "/home"?
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

                {cookies? 
                  cookies.tipo === 3 && <AdmNav />:
                  toast.error("Você não está logado ou sua sessão expirou")
                }

                <a href="#faleconosco">
                  <p className="text-gray-300 hover:text-white">Fale conosco</p>
                </a>
              </div>
              :
              <Link href={"/home"} className="text-gray-300 hover:text-white">HOME</Link>
            }
            <UsuarioLogado />
          </div>
        </div>
      </nav>
    </header>
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
