import { getCookies } from '@/utils/session'

export default async function UsuarioLogado() {
  const usuario = await getCookies()
  console.log(usuario)

  return (
    <div>
      <h1>{usuario?.user.nome}</h1>
    </div>
  )
}
