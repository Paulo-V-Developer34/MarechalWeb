import Form from '@/components/common/forms/Form-login'
import Image from 'next/image' //não sei como usar isso no background ;-;
import toast from 'react-hot-toast'
import { z } from 'zod'

// interface conta {
//   nome: string
//   senha: string
// }

// const contatype = z.object({
//   nome: z
//     .string()
//     .min(9, { message: 'Seu nome não pode ter menos que 9 caracteres' })
//     .max(35, { message: 'Seu nome não pode ter mais que 35 caracteres' }),
//   senha: z
//     .string()
//     .min(8, {
//       message:
//         'Sua senha não pode ter menos que 8 caracteres para garantir a sua segurança!',
//     }),
// })

export default function Home() {
  // const fazerLogin = async (formData: FormData) => {
  //   const nome = formData.get('nome') as string
  //   const senha = formData.get('senha') as string

  //   const conta: conta = {
  //     nome: nome !== null ? nome : '',
  //     senha: senha !== null ? nome : '',
  //   }

  //   const result = contatype.safeParse(conta)

  //   if (!result.success) {
  //     let errorMessage = '' //se eu apenas declara-lo como string ele me retornará um erro

  //     for (const issue of result.error.issues) {
  //       errorMessage += `${issue.path[0]}: ${issue.message} .<br/>`
  //     }

  //     toast.error(errorMessage)
  //   }
  // }

  return (
    <div
      className="flex items-center justify-center h-screen w-screen"
      style={{
        backgroundImage: `url('/estudantes.png')`,
        backgroundSize: 'cover', // Faz a imagem cobrir toda a área
        backgroundRepeat: 'no-repeat', // Evita a repetição da imagem
        backgroundPosition: 'center',
      }}
    >
      <Form/>
    </div>
  )
}
