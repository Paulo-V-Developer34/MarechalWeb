'use client'

import { usePathname } from 'next/navigation'
import UsuarioLogado from './usuario'
import AdmNav from './AdmNav'

export default function Nav() {
  const pathname = usePathname()

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
          <div className={`${pathname !== '/home' && 'hidden'} flex gap-[8vw]`}>
            <a href="#avisos">
              <p className="text-gray-300 hover:text-white">Avisos</p>
            </a>
            <a href="#agenda">
              <p className="text-gray-300 hover:text-white">Agenda</p>
            </a>
            <a href="#impressora">
              <p className="text-gray-300 hover:text-white">Impressora 3D</p>
            </a>
            {/* <AdmNav/> */}
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
