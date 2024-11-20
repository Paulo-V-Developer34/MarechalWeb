import UsuarioLogado from './usuario'
import AdmNav from './AdmNav'
import { getCookies } from '@/utils/session'
import { header_url } from '@/app/layout'

export default async function Nav() {
  const cookies = await getCookies()
  console.log(`Sua localização é: ${header_url}`)
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
          <div className={`${header_url !== '/home' && 'hidden'} flex gap-[8vw]`}>
            <a href="#avisos">
              <p className="text-gray-300 hover:text-white">Avisos</p>
            </a>
            <a href="#agenda">
              <p className="text-gray-300 hover:text-white">Agenda</p>
            </a>
            <a href="#impressora">
              <p className="text-gray-300 hover:text-white">Impressora 3D</p>
            </a>

            {cookies?.tipo === 3 && (<AdmNav/>)}
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
