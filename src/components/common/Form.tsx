import Link from "next/link";

interface input {
  input:string
  type:string
}

interface dados {
  titulo:string
  inputs:input[]
}

export default function Form(props:dados) {
  function gerarinputs(){
    return props.inputs.map((el,i)=>{
      return (
        <div className="mb-4" key={el.input}>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={el.input}>
            {el.input}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={(Math.random()*999999).toString()}
            type={el.type}
            placeholder="Digite aqui"
          />
        </div>
      )
    })
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-2xl font-bold mb-4">{props.titulo}</h2>
      <form>
          {
            gerarinputs()
          }
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Enviar
          </button>
        </div>
        <Link href={'./home'}>Link temporário</Link>
      </form>
    </div>
  )
}
