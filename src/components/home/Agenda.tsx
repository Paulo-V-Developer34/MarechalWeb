import Link from 'next/link'

export default function Agenda() {
  return (
    <section
      id="agenda"
      className="w-full flex flex-col items-center mt-10 mb-8"
    >
      <h1 className="bg-slate-400 p-1 w-full items-center text-[4vw] ">
        <span className="ml-[120px]">Agendamento Contraturno</span>
      </h1>
      <div className="w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/4 m-6 flex flex-col items-center mt-10">
        <p className="w-5/6 mb-8 text-xl">
          A sessão(não sei se está certo) "Agenda" permite aos alunos fazerem o
          agendamento da utilização de espaços e áreas disponibilizadas pela
          escola com o intuito da realização de estudos, pesquisas e projetos.
        </p>
        <Link
          href="./Agenda/Agenda"
          className="flex flex-row-reverse w-full h-full"
        >
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline right-1/4 text-4xl"
            type="button"
          >
            Agendar
          </button>
        </Link>
      </div>
    </section>
  )
}
