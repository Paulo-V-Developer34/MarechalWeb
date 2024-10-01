'use client'

import { getCookies } from '@/utils/session'
import { useEffect, useState } from 'react'

export default function UsuarioLogado() {
  const [cookies, setCookies] = useState(null)

  useEffect(() => {
    async function fetchCookies() {
      const result = await getCookies()
      console.log(result.nome)
      setCookies(result.nome)
    }
    fetchCookies()
  }, [])
  console.log(cookies)
  return (
    <button type="button">
      <p className="text-gray-300 hover:text-white">
        Usuário: {cookies ? <>{cookies}</> : 'Carregando...'}
      </p>
    </button>
  )
}
