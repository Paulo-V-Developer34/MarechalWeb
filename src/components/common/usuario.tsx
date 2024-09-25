import { getCookies } from '@/utils/session'

export default function UsuarioLogado() {
  const usuario = async () => await getCookies()

  return (
    <div>
      <h1>{usuario?.user.nome}</h1>
    </div>
  )
}
