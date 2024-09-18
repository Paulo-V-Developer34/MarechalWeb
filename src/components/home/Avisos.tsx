import Link from "next/link";
import Slideshow from "../common/Slideshow";

export default function Avisos(){
    return (
        <section id="avisos" className="w-full flex flex-col">
            <h1 className="bg-slate-400 p-1 w-full items-center text-[4vw]"><span className="ml-[120px]">Avisos</span></h1>
            <p className="min-w-[50vw] w-5/6 m-6 text-[2vw]">Aqui você tem acesso às notícias mais atuais da escola</p>
            <Slideshow/>
            <Link href='./' >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline right-1/4">Agendar</button>
            </Link>
        </section>
    )
}