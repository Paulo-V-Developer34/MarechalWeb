import type { NextRequest } from 'next/server'
// import { updateSession } from './utils/session'

export async function middleware(request: NextRequest) {
  // return await updateSession(request)
  console.log('middleware ativado')
}
