"use client"

import Image from "next/image"

export default function Slideshow(){
    //simulando a API
    const slideimages = [
        {local:"/public/enem.png"},
        {local:"/public/estudantes.png"},
        {local:"/public/impressora3d.jpg"},
        {local:"/public/medalharedacao.jpg"},
    ]

    return (
        <div className="max-w-[1400px] h-[780px] m-auto py-16 px-4 relative">
            <div style={{backgroundImage:slideimages[0].local}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"/>
            {/* seta direita */}
            {/* <i class="fi fi-ss-arrow-circle-right"></i> */}
            {/* seta esquerda */}
        </div>
    )
}