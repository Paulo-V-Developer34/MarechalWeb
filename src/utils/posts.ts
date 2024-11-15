import prisma from "@/lib/db"
import { getCookies } from "./session"

export async function postar(formData:FormData) {
    // eu devo consertar isso aqui
    // erro: eu devo usar o ID, contudo o cookie não possui o ID do usuário (ainda)

    // const user = await getCookies()
    // console.log("get cookies ativado")
    // console.log(user)
    // console.log(`Seu ID é ${user?.user.id}`)


    try {
        console.log("um post foi feito!")
    await prisma.noticia.create({
        data: {
            // não irei utilizar form agora
            // title: formData.get("title") as string,
            // slug: (formData.get("title") as string)
            //         .replace(/\s+/g,"-")
            //         .toLowerCase(),
            // content: formData.get("content") as string,

            content: "Estou testando a postagem de novas notícias"
            autorId: {
                connect: {
                    email: user.user.gmail
                }
            }
        }
})