
import useBuscarPersonaje from '../Hook/useBuscarPersonaje'
import Buscador from '../Componentes/Buscador'
import Personaje from '../Orquestadores/Personaje'
import '../Style/Personajes.css'

export default function Inicio() {

    const { nombre, setNombre, personaje, buscar } = useBuscarPersonaje()

    return (
        <div>

            <h1>Personajes de Los Simpson</h1>

            <Buscador
                nombre={nombre}
                setNombre={setNombre}
                buscar={buscar}
            />

            <Personaje personaje={personaje} />

        </div>
    )

}
