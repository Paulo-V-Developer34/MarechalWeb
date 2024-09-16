import Link from "next/link"

export default function Agenda(){
    return (
        <section id="agenda">
            <h1>Agendamento Contraturno</h1>
            <p>A seção “Avisos” mostra a você, utilizando as imagens e links acima, avisos sobre as tividades do CMSP, olimpíadas e muito mais...</p>
            <Link href='./Agenda/Agenda' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Agendar</Link>
        </section>
    )
}