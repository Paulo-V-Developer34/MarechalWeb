interface Login {
  nome: string
  senha: string
  sala: number
}

const usuario: Login = {
  nome: 'Paulo',
  senha: 'senha',
  sala: 123,
}

if (typeof usuario === 'Login') {
  console.log('usuario type === Login')
}
