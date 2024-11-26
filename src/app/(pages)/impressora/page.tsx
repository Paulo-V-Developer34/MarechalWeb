import Form from "@/components/common/forms/Form-impressora";

export default async function Impressora() {
    return (
        <section className="w-full flex flex-col items-center mt-10">
            <h1 className="bg-slate-400 p-1 w-full items-center text-[4vw]"><span className="ml-[180px]">Impressora 3D</span></h1>
            <Form/>
        </section>
    )
}