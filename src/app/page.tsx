import Form from "@/components/Form";
import Image from "next/image";//não sei como usar isso no background ;-;S

export default function Home() {
  return (
    <div
      className="flex items-center justify-center h-screen w-screen"
      style={{
        backgroundImage: `url('/estudantes.png')`,
        backgroundSize: 'cover', // Faz a imagem cobrir toda a área
        backgroundRepeat: 'no-repeat', // Evita a repetição da imagem
        backgroundPosition: 'center',
      }}
    >
      <Form titulo='Login' inputs={[{input:"Nome", type:"text"},{input:"Senha", type:"text"}]}/>
    </div>
  );
}
