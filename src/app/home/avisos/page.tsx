'use client'

import prisma from '@/lib/db'
import { getCookies, type user } from '@/utils/session'
import type { Noticia, Prisma } from '@prisma/client'
import { useEffect, useState } from 'react'
import AdmButtons from '@/components/home/avisos/AdmButtons'

// const cookie = getCookies().then //tenho que trocar isso por siglas, por enquanto estou utilizando números

export default async function Avisos() {
  const [noticias, setnoticias] = useState<Noticia[]>()
  const [cookies, setCookies] = useState<user | null>() //tenho que consertar isso
  //esses códigos estavam sendo utilizados na versão "use client"

  // useEffect
  useEffect(() => {
    prisma.noticia.findMany().then(retorno => {
      console.log('setnoticias foi ativado!')
      setnoticias(retorno)
    })

    getCookies().then(retorno => {
      setCookies(retorno)
    })
  }, [])
  //////////////////

  //////código para caso o código seja server-side
  // const noticiasdb: Noticia[] = await prisma.noticia.findMany()
  // const cookie = await getCookies()
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
    <section className="w-full flex flex-col items-center mt-10">
      <h1 className="bg-slate-400 p-1 w-full items-center text-[4vw]">
        <span className="ml-[180px]">Avisos</span>
      </h1>
      <div className="grid grid-cols-2 gap-5 items-center w-4/5">
        {noticias?.map((el, i) => {
          return (
            <section
              key={el.slug}
              className="bg-slate-400 rounded shadow-md w-2/5 p-1 m-2"
            >
              <div className="flex justify-between">
                <div className="flex w-5/6">
                  <h1>{el.title}</h1>
                  <h2>Nome autor</h2>
                </div>
                <div>
                  <button
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
                  </button>
                </div>
              </div>
              <h2>{el.intro}</h2>
              <p>{el.content}</p>
              <div className="flex flex-row-reverse">
                <p>{el.dtmodifica.toString()}</p>
                <p>{el.dtcriado.toString()}</p>
              </div>
            </section>
          )
        })}
      </div>
      {
        /* preciso colocar uma condicional que permitirá que apenas ADMs possam ver certos botões */
        cookies?.tipo === 3 && (
          <>
            <div id="testdiv" className="hidden">
              <h1>Bom dia!!!</h1>
            </div>
            <button
              onClick={() => {
                const minhadiv = document.querySelector('#testdiv')
                minhadiv?.setAttribute('className', 'red')
              }}
              type="button"
              className="fixed bottom-5 right-5 w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center text-2xl hover:bg-blue-700"
            >
              Add
            </button>
          </>
        )
      }
    </section>
  )
}
