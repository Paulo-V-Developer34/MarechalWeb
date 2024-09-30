'use client'

import { getCookies } from '@/utils/session'
import { useEffect, useState } from 'react'

export default function UsuarioLogado() {
  const [usuario, setusuario] = useState<any>('')

  useEffect(() => {
    const usuario = async () => await getCookies()
    setusuario(usuario)
  }, [])

  return (
    <div>{usuario}</div>
  ) /*talvez como o getCookies retorna um valor eu posso simplismente criar uma async arrow function, mas vou implementar isso depois :D*/
}
