import { postar } from "@/utils/posts"
import { getCookies } from "@/utils/session"
import toast from "react-hot-toast"

export interface AddNoticia {
    titulo: string,
    introducao: string,
    texto: string,
    author: string,
    authorid: string
}

export default function () {

    //interface das notícias que estarão sendo criadas

    //Depois eu devo criar a validação com o Zod
    //Talvez eu deva colocar isso no lado servidor!!!
    function inserirNoticia(formData: FormData){
        getCookies().then((evt)=>{
            if (evt) {
                console.log("criando notícia")
                const noticia: AddNoticia = {
                    titulo: formData.get('txt-titulo') as string,
                    introducao: formData.get('txt-introducao') as string,
                    texto: formData.get('txt-noticia') as string,
                    authorid: evt.id, 
                    author: evt.nome 
                }

                postar(noticia)
            } else {
                //devo melhorar essa mensagem de erro depois :/
                console.log("não há usuário logado")
                toast.error("Não há usuário logado ou a sessão expirou!")
            }
        })
    }
    return (
        <>
            <h2 className="text-2xl font-bold mb-4 p-4">Noticia - Adicionar</h2>
            {/*os tamanhos estão muito grandes ;-;, devo redefinir todos*/}
            <form
                action={evt => {
                inserirNoticia(evt)
                }}
            >
                <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="titulo"
                >
                Titulo
                </label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // id={(Math.random() * 999999).toString()} //criação de ID //deve ser removido na versão final
                type="text"
                name="txt-titulo"
                placeholder="Digite o título"
                required
                />
                <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="introducao"
                >
                Introdução
                </label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="txt-introducao"
                placeholder="Digite uma introdução sobre a notícia"
                required
                />
                <label 
                htmlFor="textonoticia"
                className="block text-gray-700 text-sm font-bold mb-2">
                    Noticia
                </label>
                <textarea name="txt-noticia" id="txt-noticia" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" cols={10} placeholder="Digite a notícia" required/>
                <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Enviar
                </button>
                </div>
            </form>
        </>
    )
}