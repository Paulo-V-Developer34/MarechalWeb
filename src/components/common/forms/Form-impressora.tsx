import { PedirImpressora } from '@/utils/impressoraForm'

// https://www.youtube.com/watch?v=RadgkoJrhu0&t=800s //access this link to learn about how to fix this error

export default function Form() {
  // Como eu não posso passar uma função de servidor diretamente eu a passarei por aqui
  // function pedir(formData: FormData) {
  //   PedirImpressora(formData)
  // }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-2xl font-bold mb-4 p-4">Agendamento da Impressora</h2>
      <form action={async evt => PedirImpressora(evt)}>
        {/*preciso urgentemente adicionar uma action aqui */}
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="nome-proj"
        >
          Nome do projeto
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="txt-proj"
          placeholder="Digite o nome do objeto que será impresso"
          required
        />
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="motivo"
        >
          Motivo
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          cols={3}
          name="txt-motivo"
          placeholder="Digite para que o objeto será feito"
          required
        />
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="motivo"
        >
          Descrição
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          cols={5}
          name="txt-descricao"
          placeholder="Digite como o objeto vai realizar a tarefa e como ele se parece"
          required
        />

        {/* avisos */}
        <h2>Avisos importantes</h2>
        <h3>
          O objeto pode ser 'desclassificado' (devo mudar esta palavra) se ele
        </h3>
        <ul>
          <li>
            Possuir o tamanho maior que 12cm de largura, 12cm de comprimento e
            10cm de altura - isso é apenas um exemplo
          </li>
          <li>
            O motivo pela qual ele será feito ou sua descrição não for de acordo
            com o projeto
          </li>
          <li>
            Não houver o arquivo do modelo 3D do objeto disponível no dia da
            impressão
          </li>
        </ul>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}
