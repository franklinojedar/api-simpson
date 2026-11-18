
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/personaje/:id', async (req, res) => {

    const response = await fetch(
        'https://thesimpsonsapi.com/api/characters'
    )

    const data = await response.json()

    const personaje = data.results.find((p) => {

        return (
            String(p.id) === req.params.id ||
            p.name.toLowerCase() === req.params.id.toLowerCase()
        )

    })

    console.log(personaje)

    res.json(personaje || null)

})

app.listen(3000, () => console.log("CORRIENDO"))
