"use client"

import { useState } from "react";

export default function AdmButtons() {

    const [isOpen, setIsOpen] = useState(false);

    // Funções para abrir e fechar o modal
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <>
            {isOpen && 
                (<div id="modal" className="fixed inset-0 bg-black bg-opacity-50 items-center justify-center">
                    <div className="bg-white w-96 p-6 rounded shadow-lg relative">
                        {/* <!-- Conteúdo do Modal --> */}
                        <h2 className="text-2xl font-bold mb-4">Este é um Modal</h2>
                        <p className="text-gray-700 mb-6">Você pode adicionar qualquer conteúdo aqui.</p>
                        {/* <!-- Botão para fechar o modal --> */}
                        <button onClick={()=>closeModal()} className="bg-red-500 text-white px-4 py-2 rounded">
                            Fechar
                        </button>
                    </div>
                </div>)
            }
            <button
            onClick={() => {
                // const minhadiv = document.querySelector('#testdiv')
                // minhadiv?.setAttribute('className', 'red')
                openModal()
            }}
            type="button"
            className="fixed bottom-5 right-5 w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center text-2xl hover:bg-blue-700"
            >
            Add
            </button>
        </>
    )
}