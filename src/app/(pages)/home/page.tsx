import Avisos from "@/components/home/Avisos";
import Impressora from "@/components/home/Impressora";
import Agenda from "@/components/home/Agenda";
import Fale from "@/components/home/Fale";
import { getCookies } from "@/utils/session";
import Alunos from "@/components/home/Alunos";

export default async function Home(){
    const cookies = await getCookies()
    return (
        <>
            <Avisos/>
            <Agenda/>
            <Impressora/>
            {cookies?.tipo === 3 && (<Alunos/>)}
            <Fale/>
        </>
    )
}