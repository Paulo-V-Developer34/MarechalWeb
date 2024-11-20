"use client"

import prisma from "@/lib/db";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Aluno {
    nome: string,
    sala: string | null,//a sala não poderia ter o tipo "null" mas como eu juntei funcionários (diretores e coordenadores) eu tenho que deixar assim
    advertencias: number,
    tipo: number
}



export default async function Alunos() {
    //simulando a API
    // const [alunos, setAlunos] = useState<User[] | null | string>("")//não sei se eu coloquei tipos demais
    const faluno: Aluno[] = [{nome: 'nenhum',sala: null, advertencias: 0, tipo: 1}] //eu não sei se é uma boa ideia eu criar um array de 1 elemento para burlar o typescript :/
    const [alunos, setAlunos] = useState<Aluno[] | null>(faluno)//eu não deveria colocar o valor "{nome: 'nenhum',sala: null, advertencias: 0, tipo: 1}" mas não sabia um jeito melhor

    useEffect(()=>{
        prisma.user.findMany({
            select: {
                nome: true,
                sala: true,
                advertencias: true,
                tipo: true
            }
        }).then((evt)=>{
            setAlunos(evt)
        })
    },[])

    //fn para gerar as linhas dos alunos
    function tabelaAlunos(alunos: Aluno[]){
        for(let aluno of alunos) { //tomara que ele não retorne apenas 1 elemento
            return (<tr> 
                <td>{aluno.nome}</td>
                <td>{aluno.sala}</td>
                <td>{aluno.advertencias}</td>
                <td>Aluno {aluno.tipo}</td>
                <td><Image src={'/lixeira.svg'} alt="lixeira" width={10} height={10}/></td>
            </tr>)
        }
    }

    return (
        // criando a tabela
        <>
            <h1 className="bg-slate-400 p-1 w-full items-center text-[4vw]">
                <span className="ml-[180px]">Alunos</span>
            </h1>

            {/* posso componentizar essa tabela, mas não sei se eu já estou componentizando coisas de mais */}
            <table className="w3-table-all w3-centered w3-text-black" id="tabelaAlunos">
                <thead>
                    <tr className="w3-center w3-teal">
                        <th>Nome</th>
                        <th>Sala</th>
                        <th>N° de advertencias</th>
                        <th>Cargo</th>
                        <th></th>{/**não sei se é uma boa ideia deixar um th vazio só para conseguir completar 5 colunas */}
                    </tr>
                </thead>
                <tbody>
                    {alunos === null ?(
                        <tr>
                            <td>Não há alunos registrados</td>
                        </tr>
                    // ): typeof(alunos) == "Aluno" ? (//não deu certo
                    ):  alunos[0].nome === "nenhum" ? (
                        <tr>
                            <td>Carregando...</td>
                        </tr>
                    ):(
                        tabelaAlunos(alunos)//eu gostaria de remover essa gambiarra mas não sei como
                    )}
                </tbody>
            </table>

            {/* incluindo o DataTable */}

            $(document).ready(function() {
                $('#experimentosTabela').DataTable({
                    "language": {
                        "url": "https://cdn.datatables.net/plug-ins/1.12.1/i18n/pt-BR.json"
                    },
                    paging: true
                });
            });
        
            <script src="https://cdn.datatables.net/2.0.7/js/dataTables.js"></script>
        </>
    )
}