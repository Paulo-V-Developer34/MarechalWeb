import prisma from '@/lib/db'
import { getCookies } from '@/utils/session'
import type { Noticia } from '@prisma/client'
import AdmButtons from '@/components/avisos/AdmButtons'
import NoticiaBtn from '@/components/avisos/NoticiaBtn'
import Image from 'next/image'
import Link from 'next/link'

export default async function Avisos() {
  //pegando as notícias
  const noticiasdb: Noticia[] = await prisma.noticia.findMany()

  //pegando os cookies
  const cookie = await getCookies()

  return (
    <>
      <div className="grid grid-cols-2 gap-5 items-center w-4/5  border-spacing-1 border-x-orange-600">
        {noticiasdb?.map((el, i) => {
          return (
            <Link href={`/avisos/${el.slug}`} key={el.slug}>
              <section className="bg-slate-400 rounded shadow-md w-2/5 p-1 m-2">
                <h1>{el.title}</h1>
                <Image
                  src={'/enem.png'}
                  width={160}
                  height={90}
                  alt="Imagem de representação"
                  className="w-11/12 rounded-md"
                />
                <div className="flex justify-between">
                  <div>
                    {cookie?.tipo === 3 && <NoticiaBtn props={el.id} />}
                  </div>
                </div>
                <p>{el.intro}</p>
                {/* <p>{el.content}</p> */}
                <div className="flex flex-row-reverse">
                  {/* <p>{el.dtmodifica.toString()}</p> */}
                  <p>{el.dtcriado.toString()}</p>
                </div>
              </section>
            </Link>
          )
        })}
      </div>
      {cookie?.tipo === 3 && <AdmButtons />}
    </>
  )
}
