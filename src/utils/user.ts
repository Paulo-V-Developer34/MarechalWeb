'use server'

import type { conta, resposta } from '@/components/common/forms/Form-login'
import prisma from '@/lib/db'
import { jwtVerify, SignJWT } from 'jose'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('10 sec from now')
    .sign(key)
}
//descriptografar
export async function decript(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    //não sei o por que da desestruturação do payload
    algorithms: ['HS256'],
  })
  return payload
}

export async function fazerLogin(conta: conta): Promise<resposta> {
  console.log('login acionado')
  try {
    const contabd = await prisma.user.findUnique({
      where: {
        nome: conta.nome,
        senha: conta.senha,
      },
      select: {
        nome: true,
        sala: true,
        tipo: true,
      },
    })

    try {
      //removerei este try catch de dentro de outro try catch o mais cedo possível
      //criar sessão

      console.log('sua conta foi achada')
      console.log(contabd)
      const expires = new Date(Date.now() + 10 * 1000)
      const session = await encrypt({ contabd, expires })

      cookies().set('session', session, { expires, httpOnly: true })

      //redirecionamento para a página principal
      const respota: resposta = {
        error: '',
        resultado: true,
      }

      return respota
    } catch (error) {
      let mensagemErro: string

      if (error instanceof Error) {
        mensagemErro = error.message
      } else {
        mensagemErro = String(error)
      }

      const resposta: resposta = {
        error: mensagemErro,
        resultado: false,
      }
      return resposta
    }
  } catch (error) {
    let mensagemErro: string

    if (error instanceof Error) {
      mensagemErro = error.message
    } else {
      mensagemErro = String(error)
    }

    const resposta: resposta = {
      error: mensagemErro,
      resultado: false,
    }
    return resposta
  }
}

//funções para a criação da sessão
//variáveis
const chavesecreta = 'caisdhfiq'
const key = new TextEncoder().encode(chavesecreta)

//criptografia
//criptografar
