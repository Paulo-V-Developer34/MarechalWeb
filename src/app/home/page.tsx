import Avisos from "@/components/Avisos";
import Impressora from "@/components/Impressora";
import Nav from "@/components/Nav";
import Agenda from "@/components/Agenda";
import Fale from "@/components/Fale";

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