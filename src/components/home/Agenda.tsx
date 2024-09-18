import Link from "next/link"

export default function Agenda(){
    return (
        <section id="agenda" className="w-full flex flex-col">
            <h1 className="bg-slate-400 p-1 w-full items-center text-[4vw]"><span className="ml-[120px]">Agendamento Contraturno</span></h1>
            <p className="min-w-[50vw] w-5/6 m-6">A sessão(não sei se está certo) "Agenda" permite aos alunos fazerem o agendamento da utilização de espaços e áreas disponibilizadas pela escola com o intuito da realização de estudos, pesquisas e projetos.</p>
            <Link href='./Agenda/Agenda' >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline right-1/4">Agendar</button>
            </Link>
        </section>
    )
}