
import Nombre from '../Componentes/Nombre'
import ImagenPersonaje from '../Componentes/ImagenPersonaje'
import Edad from '../Componentes/Edad'
import FechaNacimiento from '../Componentes/FechaNacimiento'
import Genero from '../Componentes/Genero'
import Ocupacion from '../Componentes/Ocupacion'


export default function Personaje({ personaje }) {

    if (!personaje) {
        return null
    }

    return (
        <div className="TarjetaPersonaje">

            <Nombre nombre={personaje.name} />

            <ImagenPersonaje img={personaje.portrait_path} />

            <Edad edad={personaje.age} />

            <FechaNacimiento fecha={personaje.birthdate} />

            <Genero genero={personaje.gender} />

            <Ocupacion ocupacion={personaje.occupation} />

        

        </div>
    )

}
