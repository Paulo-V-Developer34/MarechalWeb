import prisma from '@/lib/db'
import { getCookies } from '@/utils/session'
import type { Noticia } from '@prisma/client'
import AdmButtons from '@/components/avisos/AdmButtons'
import NoticiaBtn from '@/components/avisos/NoticiaBtn'
import Image from 'next/image'
import Link from 'next/link'

export default async function Avisos() {
  //////código para caso o código seja server-side
  const noticiasdb: Noticia[] = await prisma.noticia.findMany()
  const cookie = await getCookies()
  /////////////////////////////

  //simulando os dados do cookie
  //simulando a API
  // const noticias = [
  //   {
  //     ID: 'dsarewr34',
  //     title: 'Prova do Enem',
  //     slug: 'prova-do-enem',
  //     intro: 'A prova do ENEM ocorrerá em breve!',
  //     content:
  //       'A prova do ENEM vai ocorrer nos dias kk do mês kk, vocês devem se preparar, especialmente para a redação',
  //     img: [{ href: '', alt: 'imagem' }],
  //     author: 'Paulo',
  //     createat: new Date('2024-09-19'),
  //     modifiedat: new Date('2024-09-22'),
  //   },
  //   {
  //     ID: 'ds213',
  //     title: 'Mês da Pizza!',
  //     slug: 'mes-da-pizza',
  //     intro: 'Teremos muitas pizzas!',
  //     content: 'Haverá pizza no refeitório todos os dias do mês de onzembro',
  //     img: [{ href: '', alt: 'imagem' }],
  //     author: 'Desconhecido',
  //     createat: new Date('2024-09-19'),
  //     modifiedat: new Date('2024-09-22'),
  //   },
  //   {
  //     ID: 'd123412',
  //     title: 'Prova da Proz',
  //     slug: 'prova-da-proz',
  //     intro: 'A prova da Proz ocorrerá em breve!',
  //     content:
  //       'A prova da Proz vai ocorrer nos dias kk do mês kk, vocês devem se preparar, especialmente para a redação',
  //     img: [{ href: '', alt: 'imagem' }],
  //     author: 'Jennifer',
  //     createat: new Date('2024-09-19'),
  //     modifiedat: new Date('2024-09-22'),
  //   },
  // ]

  return (
    <>
      <div className="grid grid-cols-2 gap-5 items-center w-4/5">
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
                  {/* <div className="flex w-5/6">
                    <h2>Nome autor</h2>
                  </div> */}
                  <div>
                    {/* <button
                      type="button"
                      className="w-2 h-2"
                      onClick={() =>
                        prisma.noticia.delete({ where: { id: el.id } })
                      }
                    >
                      lx
                    </button>
                    <button type="button" className="w-2 h-2">
                      ed
                    </button> */}

                    {/* substitutos */}
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
