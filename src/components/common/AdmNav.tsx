import { getCookies } from "@/utils/session";

export default async function AdmNav() {
    const cookies = await getCookies()
    return (
        <>
            {cookies?.tipo == 3 && (
                <>
                    <a href="#alunos">
                        <p className="text-gray-300 hover:text-white">Alunos</p>
                    </a>
                </>
            )}
        </>
    )
}