'use server' //nunca se esqueça de usar "use server" caso você não queira ter muita dor de cabeça ;-;

import prisma from '@/lib/db'
import type { AddNoticia } from '@/components/avisos/AddNoticiaForm'
import { revalidatePath } from 'next/cache'

export async function postar(noticia: AddNoticia) {
  try {
    console.log('um post foi feito!')
    await prisma.noticia.create({
      data: {
        title: noticia.titulo,
        slug: noticia.titulo.replace(/\s+/g, '-').toLowerCase(),
        intro: noticia.introducao,
        content: noticia.texto,
        // autorId: noticia.authorid,
        Autor: {
          connect: {
            id: noticia.authorid,
          },
        },
        nomeautor: noticia.author,
      },
    })
    revalidatePath('/avisos')
  } catch (error) {
    console.log(`Algo deu errado ao tentar criar um post, erro: ${error}`)
  }
}

//deletar comentário
export async function deletar(id: string) {
  try {
    console.log('um post foi feito!')
    await prisma.noticia.delete({
      where: {
        id: id,
      },
    })
    revalidatePath('/avisos')
  } catch (error) {
    console.log(`Algo deu errado ao tentar criar um post, erro: ${error}`)
  }
}
