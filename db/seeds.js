const dog = require('../models/Dog')

let newDogs = [
    {
        name: 'Rae'
    },
    {
        name: 'Murphy'
    }
]

dog.create(newDogs).then(stuff => {
    console.log('Saved stuff', stuff)
})

