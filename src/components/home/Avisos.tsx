import Link from "next/link";
import Slideshow from "../common/Slideshow";

export default function Avisos(){
    return (
        <section id="avisos" className="w-full flex flex-col items-center mt-10">
            <h1 className="bg-slate-400 p-1 w-full items-center text-[4vw]"><span className="ml-[180px]">Avisos</span></h1>
            {/* esses CSSs não fazem sentido (os códigos que eu estou usando) */}
            {/* por algum motivo o margin button (mb) não está funcionando */}
            <div className="w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/4 m-6 flex flex-col items-center">
                <p className="w-5/6 mb-4 text-[2vw]">Aqui você tem acesso às notícias mais atuais da escola</p>
                <Slideshow/>
                <Link href='/home/avisos' className="flex flex-row-reverse w-full h-full">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline right-1/4 text-4xl">Ver Mais</button>
                </Link>
            </div>
        </section>
    )
}