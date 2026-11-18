export default function ImagenPersonaje({ img }) {

    return (
        <img
            className="ImagenPersonaje"
            src={'https://cdn.thesimpsonsapi.com/500' + img}
            alt="Personaje"
        />
    )

}