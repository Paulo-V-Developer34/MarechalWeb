export default function Fale() {
  return (
    <section
      id="faleconosco"
      className="w-full flex flex-col items-center mt-10 mb-8"
    >
      <h1 className="bg-slate-400 p-1 w-full items-center text-[4vw]">
        <span className="ml-[120px]">Fale Conosco!</span>
      </h1>
      <div className="w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/4 m-6 flex flex-col items-center mt-10">
        <p className="w-5/6 mb-8 text-xl">
          A seção “Fale Conosco” permite a você, reportar um problema no site,
          mandar suas ideias sobre possíveis melhorias que podem acontecer na
          escola...
        </p>
        <form className="flex flex-col mb-4 gap-2 w-full">
          <textarea
            placeholder="Digite aqui..."
            className="rounded bg-gray-200 border border-black w-full"
            name="txt-msg"
            rows={5}
          />
          <span className="flex flex-row-reverse w-full">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline right-1/4 text-4xl"
              type="button"
            >
              Enviar
            </button>
          </span>
        </form>
      </div>
    </section>
  )
}
