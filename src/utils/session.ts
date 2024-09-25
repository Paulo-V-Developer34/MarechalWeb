'use server'

import type { conta, resposta } from '@/components/common/forms/Form-login'
import prisma from '@/lib/db'
import { type JWTPayload, jwtVerify, SignJWT } from 'jose'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

//CRIPTOGRAFIA
//encriptografar
//criar JWT
export async function encrypt(payload: any) {
  console.log(`Entrada do encrypt: ${payload}`)
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('10 sec from now')
    .sign(key)
}
//descriptografar
export async function decript(input: string): Promise<any> {
  console.log(`Entrada do decript: ${input}`)
  console.log(`tipo Entrada do decript: ${typeof input}`)
  const { payload } = await jwtVerify(input, key, {
    //não sei o por que da desestruturação do payload
    algorithms: ['HS256'],
  })
  console.log(`Saída do decript: ${payload}`)
  console.log(`tipo saída do decript: ${typeof input}`)
  return payload
}

//fazer login
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
      const expires = new Date(Date.now() + 5 * 60 * 1000)
      const session = await encrypt({ contabd, expires })

      //criar cookie
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

//pegar o cookie
export async function getCookies() {
  const session = cookies().get('session')?.value
  if (!session) return null
  const parsed = await decript(session) //não gostei de estar trabalhando com um valor que pode ser possívelmente nulo em typescript que é uma linguagem fortemente tipada
  console.log(parsed)
  console.log(typeof(parsed))
  return parsed
}

//fazer a renovação da sessão
export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('session')?.value

  if (!session) return

  //renovar sessão //AVISO, nunca esqueça de realizar o "await"
  const parsed = await decript(session) //seção descriptografada
  parsed.expires = new Date(Date.now() + 5 * 60 * 1000) //acrescentando mais 10 segundos
  const res = NextResponse.next() //não sei exatamente para que serve nem como utilizar!!!!! //mas sei que isso avisa ao Next que iremos preparar uma "resposta" da web para o cliente (ou simplismente uma resposta)
  res.cookies.set('session', await encrypt(parsed), {
    httpOnly: true,
    expires: parsed.expires,
  })

  return res
}

//variáveis
const chavesecreta = 'caisdhfiq'
const key = new TextEncoder().encode(chavesecreta)

//criptografia
//criptografar
