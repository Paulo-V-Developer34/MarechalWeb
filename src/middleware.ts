import { NextResponse, type NextRequest } from 'next/server'
// import { updateSession } from './utils/session'

export async function middleware(request: NextRequest) {
  // return await updateSession(request)
  console.log('middleware ativado')

  //guardando o path name para usá-lo em SSC
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-url',request.url)

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })
}
