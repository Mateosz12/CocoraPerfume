const z = require('zod')


const perfumeSchema = z.object({
    nombre: z.string(),
    cantidad:z.number().positive(),
    categoria:z.string().array(),
    notas:z.string(),
})

function validatePerfume (object){
    return perfumeSchema.safeParse(object)
}

function validatePartialPerfume (input) {
    return perfumeSchema.partial().safeParse(input)
}

module.exports = {
    validatePerfume,
    validatePartialPerfume
}