import { getCookies } from "@/utils/session";

export default function AdmNav() {
    
    return (
        <>
            {getCookies().then((evt)=>{
                evt?.tipo == 3 && (
                    <>
                        <a href="#alunos">
                            <p className="text-gray-300 hover:text-white">Alunos</p>
                        </a>
                    </>
                )
            })}
        </>
    )
}