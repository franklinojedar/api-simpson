
import { useState } from 'react'

export default function useBuscarPersonaje() {

    const [nombre, setNombre] = useState('')
    const [personaje, setPersonaje] = useState(null)

    async function buscar() {

        const respuesta = await fetch('http://localhost:3000/personaje/' + nombre.trim())

        const datos = await respuesta.json()

        setPersonaje(datos)

    }

    return { nombre, setNombre, personaje, buscar }

}
