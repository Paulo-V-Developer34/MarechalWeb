//aqui posso criar dados fictícios (semear o BD) para meu BD
//adicione um comando ao package.json
//execute o comando no git usando npx prisma db seed

import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const initialUsers: Prisma.UserCreateInput[] = [
  {
    nome: 'Paulo Victor Nunes Cunha',
    sala: '3NT',
    senha: 'Senhasegura',
  },
  {
    nome: 'Ian Peixinho Barbosa',
    sala: '3NT',
  },
  {
    nome: 'Isac Monteiro Barbosa',
    sala: '2A',
  },
  {
    nome: 'Diretor da Escola',
    senha: 'Senhasupersegura',
    tipo: 3,
  },
  {
    nome: 'Aluno ajudante da escola',
    sala: '1C',
    tipo: 2,
  },
]

const initialNoticias: Prisma.NoticiaCreateInput[] = [
  {
    title: 'Notícia interessante',
    slug: 'noticia-interessante',
    intro:
      'Essa notícia é a mais incrível de todas as notícias que você já viu na vida',
    content:
      'Essa notícia conta a história de como a notícia mais incrível do mundo foi criada, ela é realmente muito incrível',
    nomeautor: 'Diretor da Escola',
    Autor: {
      connectOrCreate: {
        where: {
          nome: 'Diretor da Escola',
        },
        create: {
          nome: 'Vice diretor da escola',
        },
      },
    },
  },
  {
    title: 'Notícia interessante pt2',
    slug: 'noticia-interessante-pt2',
    intro:
      'Essa notícia é a mais incrível de todas as notícias que você já viu na vida',
    content:
      'Essa notícia conta a história de como a notícia mais incrível do mundo foi criada, ela é realmente muito incrível',
    nomeautor: 'Diretor da Escola',
    Autor: {
      connectOrCreate: {
        where: {
          nome: 'Diretor da Escola',
        },
        create: {
          nome: 'Vice diretor da escola',
        },
      },
    },
  },
  {
    title: 'Notícia interessante pt3',
    slug: 'noticia interessante-pt3',
    intro:
      'Essa notícia é a mais incrível de todas as notícias que você já viu na vida',
    content:
      'Essa notícia conta a história de como a notícia mais incrível do mundo foi criada, ela é realmente muito incrível',
    nomeautor: 'Diretor da Escola',
    Autor: {
      connectOrCreate: {
        where: {
          nome: 'Diretor da Escola',
        },
        create: {
          nome: 'Vice diretor da escola',
        },
      },
    },
  },
]

async function main() {
  console.log('Começando a semear dados...')
  //   for (const user of initialUsers) {
  //     const newuser = await prisma.user.create({
  //       data: user,
  //     })
  //     console.log(`user com o Nome ${newuser.nome} foi inserido`)
  //   }
  for (const noticia of initialNoticias) {
    const newnoticia = await prisma.noticia.create({
      data: noticia,
    })
    console.log(`noticia com o título ${newnoticia.title} foi inserido`)
  }
  console.log('Semeação concluída')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
