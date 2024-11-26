'use server'

import prisma from '@/lib/db'
import toast from 'react-hot-toast'
import { z } from 'zod'
import { getCookies } from './session'

interface PedidoImp {
  nome: string
  motivo: string
  descricao: string
}

export default async function PedirImpressora(formData: FormData) {
  const cookie = await getCookies()
  if (!cookie) {
    // O middleware vai fazer isso para mim
    // toast.error('Sua sessão expirou')
    return null
  }
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
        motivo: pedido.motivo,
        objcriado: pedido.descricao,
        nomeproj: pedido.nome,
        Autor: {
          connect: {
            id: cookie.id,
          },
        },
      },
    })
    toast.success('Pedido realizado com sucesso!')
  } catch (error) {
    toast.error(`O erro ${error} ocorreu`)
  }
}
