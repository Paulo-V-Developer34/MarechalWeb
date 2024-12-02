import prisma from '@/lib/db'
import type { Noticia } from '@prisma/client'
import Image from 'next/image'
import toast from 'react-hot-toast'

export default async function NoticiaSlug({ params }) {
  // let noticia: Promise<Noticia | null>
  let noticia: Promise<Noticia | null> = Promise.resolve(null)

  // const router = useRouter()
  // const slug = router.query.slug
  const slug = params.slug

  if (!slug) {
    toast.error('Algo deu errado! Essa notícia não existe')
  } else if (typeof slug === 'string') {
    noticia = prisma.noticia.findUnique({
      where: {
        slug: slug,
      },
    })
  }

  noticia.then(result => console.log(result))

  // if(!noticia){
  //   toast.error("Essa notícia não pode ser encontrada")
  // }

  return (
    <section className="m-4 p-2 rounded-sm bg-slate-400">
      {noticia.then(result => {
        if (result) {
          return (
            <>
              <h1 className="text-2xl">{result.title}</h1>
              <Image
                src={'/enem.png'}
                alt="Imagem aleatória"
                width={160}
                height={90}
              />
              <p className="text-xl">{result.intro}</p>
              <p className="text-base">{result.content}</p>
              <div className="flex justify-between">
                <span>Autor: {result.nomeautor}</span>
                <div>
                  <span>Data de criação: {result.dtcriado.toString()}</span>
                  <span>
                    Data da última modificação: {result.dtmodifica.toString()}
                  </span>
                </div>
              </div>
            </>
          )
        }
        // Um conselho para você... tome cuidado onde você abre e fecha as chaves, porque aqui eu tive um problema grande com isso ;-;
        return (
          <>
            <h1 className="text-2xl">Algo deu errado!</h1>
            <p className="text-xl">
              Tente recarregar a página ou tente ver outra notícia
            </p>
          </>
        )
      })}
    </section>
  )
}
