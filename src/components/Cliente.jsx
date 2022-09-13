import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cliente = ({cliente, handleEliminar}) => {
    const navigate = useNavigate()

    const { nombre, empresa, email, telefono, notas, id } = cliente

  return (
    <tr className="border-b hover:bg-gray-50">
        <td className="p-3 text-center">{nombre}</td>
        <td className="p-3">
            <p><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p> 
            <p><span className="text-gray-800 uppercase font-bold">Telefono: </span>{telefono}</p> 
        </td>
        <td className="p-3">{empresa}</td>
        <td className="p-3 justify-around">
            <button 
                    type='button' 
                    className="bg-gray-600 hover:bg-gray-800 block w-full text-xs uppercase text-white font-bold p-2"
                    onClick={() => navigate(`/clientes/${id}`)}
                >
                Ver
            </button>    
            <button 
                    type='button' 
                    className="bg-blue-600 hover:bg-blue-800 block w-full text-xs uppercase text-white font-bold p-2 mt-2"
                    onClick={() => navigate(`/clientes/editar/${id}`)}
                >
                Editar
            </button>    
            <button 
                    type='button' 
                    className="bg-red-600  hover:bg-red-800 block w-full text-xs uppercase text-white font-bold p-2 mt-2"
                    onClick={() => handleEliminar(id)}
                    >
                Eliminar
            </button>    
        </td>
    </tr>
  )
}

export default Cliente