
export default function Buscador({ nombre, setNombre, buscar }) {

    return (
        <div className="Buscador">

            <input
                type="text"
                placeholder="Nombre o ID del personaje"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        buscar()
                    }
                }}
            />

            <button onClick={buscar}>Buscar</button>

        </div>
    )

}
