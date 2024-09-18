import Avisos from "@/components/home/Avisos";
import Impressora from "@/components/home/Impressora";
import Agenda from "@/components/home/Agenda";
import Fale from "@/components/home/Fale";

export default function Home(){
    return (
        <>
            <Avisos/>
            <Agenda/>
            <Impressora/>
            <Fale/>
        </>
    )
}