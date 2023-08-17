const express = require("express");

const crypto = require('node:crypto')
const mysql = require("mysql");
const perfumes = require('./perfumes.json');
const { validatePerfume, validatePartialPerfume } = require("./schema/perfumes");

const app = express();
app.use(express.json());




app.post('/perfumes', (req, res) => {


    const result = validatePerfume(req.body)

    if (!result.success) {
        // 422 Unprocessable Entity
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newPerfume = {
        id: crypto.randomUUID(),
        ...result.data
    }
    perfumes.push(newPerfume)

    res.status(201).json(newPerfume)


});

// filtrar por categoria agregar filtrar por nombre
app.get("/perfumes", (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')

    const { categoria } = req.query
    const { nombre } = req.query

    if (categoria) {
        const filteredPerfumes = perfumes.filter(
            perfume => perfume.categoria.some(g => g.toLowerCase() === categoria.toLocaleLowerCase())
        )
        return res.json(filteredPerfumes)
    } else if (nombre) {
        const filteredPerfumesNombre = perfumes.filter(
            perfume => perfume.nombre.toLowerCase() === nombre.toLocaleLowerCase()
        )
        return res.json(filteredPerfumesNombre)
    }
    res.json(perfumes)

});

app.patch('/perfumes/:id', (req, res) => {

    const result = validatePartialPerfume(req.body)

    if (!result.success) {
        // 422 Unprocessable Entity
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params
    const perfumeIndex = perfumes.findIndex(perfume => perfume.id === id)
   

    if (perfumeIndex === -1) {
        return res.status(404).json({ message: 'Perfume no encontrado' })
    }

    const updatePerfume = {
        ...perfumes[perfumeIndex],
        ...result.data
    }
    perfumes[perfumeIndex] = updatePerfume

    return res.json(updatePerfume)
})

//delete path
app.options('/perfumes/:id', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
    res.send(200)
})

const PORT = process.env.PORT ?? 3001

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})