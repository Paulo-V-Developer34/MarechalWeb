"use client"

import { deletar } from "@/utils/posts";
import Image from "next/image";

interface NoticiaProps {
    props: string
}

export default function NoticiaBtn({props}: NoticiaProps) {
    return (
        <>
        {/* dessa vez eu estou mandando a mensagem diretamente ao back-end */}
            <button name="btndelete" onClick={()=>{deletar(props)}} className="h-full">
                <Image src={'/lixeira.svg'} alt="imagem de uma lixeira" width={10} height={10}/>
            </button>
            <button name="btnedit" onClick={()=>{}} className="h-full">
                <Image src={'/lapis.svg'} alt="imagem de um lapis" width={10} height={10}/>
            </button>
        </>
    )
}