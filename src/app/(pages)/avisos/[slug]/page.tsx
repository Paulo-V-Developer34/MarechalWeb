import prisma from '@/lib/db'
import type { Noticia } from '@prisma/client'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

export default async function NoticiaSlug() {
  // let noticia: Promise<Noticia | null>
  let noticia: Promise<Noticia | null> = Promise.resolve(null)

  const router = useRouter()
  const slug = router.query.slug
  if (!slug) {
    toast.error('Algo deu errado! Essa notícia não existe')
  } else if (typeof(slug) === 'string') {
    noticia = prisma.noticia.findUnique({
      where: {
        slug: slug,
      },
    })
  }

  noticia.then((result)=>console.log(result))

  // if(!noticia){
  //   toast.error("Essa notícia não pode ser encontrada")
  // }

  return (
    <section>
      {
        noticia.then((result)=>{
          if(result) {
            return (
              <>
                <h1>{result.title}</h1>
              </>
            )
          }
        }
        return (
              <>
                <h1>Algo deu errado!</h1>
              </>
        ))
      }
    </section>
  )
}
