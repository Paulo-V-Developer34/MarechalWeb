"use client"

import { fazerLogin } from '@/utils/user'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { z } from 'zod'

///////não sei se eu utilizarei essas interfaces novamente (provavelmente não)
interface input {
  input: string
  type: string
}

interface dados {
  titulo: string
  action: (formData: FormData) => Promise<void>
  inputs: input[]
}

//interfaces
export interface conta {
  nome: string
  senha: string
}

//interface do zod
const contatype = z.object({
  nome: z
    .string()
    .min(9, { message: 'Seu nome não pode ter menos que 9 caracteres' })
    .max(35, { message: 'Seu nome não pode ter mais que 35 caracteres' }),
  senha: z
    .string()
    .min(8, {
      message:
        'Sua senha não pode ter menos que 8 caracteres para garantir a sua segurança!',
    }),
})


export default function Form() {
  //função para verificar os dados com Zod
  const login = async (formData: FormData) => {
    console.log('o form está funcionando')
    const nome = formData.get('txt-nome') as string
    const senha = formData.get('txt-senha') as string

    const conta: conta = {
      nome: nome !== null ? nome : '',
      senha: senha !== null ? nome : '',
    }

    const result = contatype.safeParse(conta)
    console.log(result.success)
    console.log(result)

    if (!result.success) {
      let errorMessage = '' //se eu apenas declara-lo como string ele me retornará um erro

      for (const issue of result.error.issues) {
        errorMessage += `${issue.path[0]}: ${issue.message} .<br/>`
      }

      toast.error(errorMessage)
    }

    fazerLogin(conta)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-2xl font-bold mb-4 p-4">Login</h2>
      <form action={login}>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="nome"
        >
          Nome
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          // id={(Math.random() * 999999).toString()} //criação de ID //deve ser removido na versão final
          type='text'
          name='txt-nome'
          placeholder="Digite seu nome"
        />
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="senha"
        >
          Senha
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type='text'
          name='txt-senha'
          placeholder="Digite sua senha"
        />
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enviar
          </button>
        </div>
        <Link href={'./home'}>Link temporário</Link>
      </form>
    </div>
  )
}
