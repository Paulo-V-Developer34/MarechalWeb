'use client'

import { getCookies, user } from '@/utils/session'
import { useEffect, useState } from 'react'

export default function UsuarioLogado() {
  const [cookies, setCookies] = useState<user|null>(null)

  useEffect(() => {
    async function fetchCookies() {
      const result = await getCookies()
      console.log(result?.nome || "desconectado")
      setCookies(result?.nome || {nome: "null",id: "null",sala: null, tipo: 1})//devemos resolver este problema rápido
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
