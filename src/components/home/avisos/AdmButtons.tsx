"use client"

import { useState } from "react";
import AddNoticiaForm from "./AddNoticiaForm";

export default function AdmButtons() {

    const [isOpen, setIsOpen] = useState(false);

    // Funções para abrir e fechar o modal
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <>
            {isOpen && 
                (<div id="modal" className="fixed inset-0 w-full h-full items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                        <AddNoticiaForm/>
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