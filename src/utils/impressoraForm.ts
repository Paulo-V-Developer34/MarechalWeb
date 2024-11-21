'use server'

import prisma from '@/lib/db'
import toast from 'react-hot-toast'
import { z } from 'zod'
import { getCookies } from './session'
import { revalidatePath } from 'next/cache'

interface PedidoImp {
  nome: string
  motivo: string
  descricao: string
}

export default async function PedirImpressora(formData: FormData) {
  const cookie = await getCookies()

  // não preciso fazer isso pois o middleware fará isso por mim a cada requisição feita
  // if(cookie === null) {
  //   toast.error("Sua sessão expirou!")
  // }

  const pedidotype = z.object({
    nome: z
      .string()
      .min(9, { message: 'Seu título não pode ter menos que 9 caracteres' })
      .max(35, { message: 'Seu título não pode ter mais que 35 caracteres' }),
    motivo: z
      .string()
      .min(12, {
        message: 'O texto sobre o motivo não pode ter menos que 12 caracteres!',
      })
      .max(300, {
        message: 'O texto sobre o motivo não pode ter mais que 300 caracteres!',
      }),
    descricao: z
      .string()
      .min(20, {
        message: 'O texto de descrição não pode ter menos que 20 caracteres!',
      })
      .max(400, {
        message: 'O texto de descrição não pode ter menos que 400 caracteres!',
      }),
  })

  const nome = formData.get('txt-proj') as string
  const motivo = formData.get('txt-motivo') as string
  const descricao = formData.get('txt-descricao') as string

  // esse código não funciona
  // if(nome || motivo || descricao === null)
  //     return null

  const pedido: PedidoImp = {
    //acho que as minhas tipagens não estão sendo feitas da forma correta :/
    nome: nome || '',
    motivo: motivo || '',
    descricao: descricao || '',
  }

  const result = pedidotype.safeParse(pedido)

  if (!result.success) {
    let errorMessage = '' //se eu apenas declara-lo como string ele me retornará um erro

    for (const issue of result.error.issues) {
      errorMessage += `${issue.path[0]}: ${issue.message} .<br/>`
    }

    toast.error(errorMessage)
    return null
  }

  //   const resultado = fazerLogin(conta)
  //   if ((await resultado).resultado === false) {
  //     toast.error((await resultado).error)
  //   } else {
  //     router.push('/home')
  //   }
  try {
    prisma.pedidoImpressora.create({
      data: {
        nomeproj: pedido.nome,
        motivo: pedido.motivo,
        objcriado: pedido.descricao,
        Autor: {
          connect: {
            id: cookie?.id //aqui está dizendo que pode ser null, entretanto o middleware tem o intuito de proibir isso, contudo não sei como remover este aviso
          }
        }
      },
    })
    revalidatePath('/impressora')
  } catch {
    toast.error("Erro na conexão, por favor aguarde e tente novamente mais tarde.")
  }
}
