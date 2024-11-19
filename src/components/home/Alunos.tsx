import Link from "next/link";

export default function Alunos() {
    return(
        <section
            id="alunos"
            className="w-full flex flex-col items-center mt-10 mb-8"
            >
            <h1 className="bg-slate-400 p-1 w-full items-center text-[4vw] ">
                <span className="ml-[120px]">Gerenciamento de Alunos</span>
            </h1>
            <div className="w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/4 m-6 flex flex-col items-center mt-10">
                <p className="w-5/6 mb-8 text-xl">
                A sessão "Gerenciamento de Alunos" permite aos diretores e coordenadores fazerem a gestão dos alunos que utilizam este site, bem como a exclusão, modificação, adição e visualização.
                </p>
                <Link
                href="/alunos"
                className="flex flex-row-reverse w-full h-full"
                >
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline right-1/4 text-4xl"
                    type="button"
                >
                    Gerenciar
                </button>
                </Link>
            </div>
        </section>
    )
}