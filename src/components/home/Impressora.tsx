import Link from "next/link";

export default function Impressora(){
    return (
        <section id="impressora" className="w-full flex flex-col items-center">
            <h1 className="bg-slate-400 p-1 w-full items-center text-[4vw]" ><span className="ml-[180px]">Impressora 3D</span></h1>
            <div className="w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/4 m-6 flex flex-col items-center">
                <p className="w-5/6 mb-4 text-[2vw]">A E.E. Marechal do Ar Eduardo Gomes encomendou uma impressora 3D que pode ser utilizada para a criação de materiais de aprendizado e outros mais, para imprimir algo nela você deve possuir um modelo 3d pronto clicar no botão abaixo, informar o motivo pela qual você fará a impressão do modelo e agende uma data</p>
                <Link href='./' className="flex flex-row-reverse w-full h-full">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline right-1/4 text-4xl">Agendar</button>
                </Link>
            </div>
        </section>
    )
}