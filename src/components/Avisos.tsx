import Slideshow from "./Slideshow";

export default function Avisos(){
    return (
        <section id="avisos">
            <h1>Avisos</h1>
            <p>Aqui você tem acesso às notícias mais atuais da escola</p>
            <Slideshow/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >Veja mais</button>
        </section>
    )
}