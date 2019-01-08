const Dog = require('../models/Dog')

Dog.deleteMany()
.then(() => {
    Dog.create({
        name: 'Rae',
        weight: 50,
        breed: 'Mut',
        behavior: 10,
        accidents: 0,
        shed: 8,
        date: 'January 10, 2019'
    }),
    Dog.create({
        name: 'Murphy',
        weight: 50,
        breed: 'Poodle',
        behavior: 8,
        accidents: 0,
        shed: 1,
        date: 'January 11, 2019'
})
})
