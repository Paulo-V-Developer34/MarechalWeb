export default async function Avisos() {
    //simulando a API
    const noticias = [
        {
            ID:"dsarewr34",
            title:"Prova do Enem",
            slug:"prova-do-enem",
            intro:"A prova do ENEM ocorrerá em breve!",
            content:"A prova do ENEM vai ocorrer nos dias kk do mês kk, vocês devem se preparar, especialmente para a redação",
            img: [
                {href:"",alt:"imagem"}
            ],
            author: "Paulo",
            createat: new Date('2024-09-19'),
            modifiedat: new Date('2024-09-22')
        },
        {
            ID:"ds213",
            title:"Mês da Pizza!",
            slug:"mes-da-pizza",
            intro:"Teremos muitas pizzas!",
            content:"Haverá pizza no refeitório todos os dias do mês de onzembro",
            img: [
                {href:"",alt:"imagem"}
            ],
            author: "Desconhecido",
            createat: new Date('2024-09-19'),
            modifiedat: new Date('2024-09-22')
        },
        {
            ID:"d123412",
            title:"Prova da Proz",
            slug:"prova-da-proz",
            intro:"A prova da Proz ocorrerá em breve!",
            content:"A prova da Proz vai ocorrer nos dias kk do mês kk, vocês devem se preparar, especialmente para a redação",
            img: [
                {href:"",alt:"imagem"}
            ],
            author: "Jennifer",
            createat: new Date('2024-09-19'),
            modifiedat: new Date('2024-09-22')
        },
    ]

    return (
        <section className="w-full flex flex-col items-center mt-10">
            <h1 className="bg-slate-400 p-1 w-full items-center text-[4vw]"><span className="ml-[180px]">Avisos</span></h1>
            <div className="grid grid-cols-2 gap-5">
                {
                    noticias.map((el,i)=>{
                        return (
                            <section key={el.slug} className="bg-slate-400 rounded shadow-md w-2/5 p-1">
                                <div className="flex justify-between">
                                    <h1>{el.title}</h1>
                                    <h2>{el.author}</h2>
                                </div>
                                <h2>{el.intro}</h2>
                                <p>{el.content}</p>
                                <div className="flex flex-row-reverse">
                                    <p>{el.modifiedat.toString()}</p> 
                                    <p>{el.createat.toString()}</p> 
                                </div>
                            </section>
                        )
                    })
                }
            </div>
        </section>
    )
}