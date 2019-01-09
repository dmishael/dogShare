const Dog = require('../models/Dog')
const Owner = require('../models/Owner')
//const Appointment = require('../models/Appointment')

Owner.deleteMany({})
.then(() => { 
    Owner.create({
        name: 'Daniel',
        sitter: 'Bill',
        address: '799 Virginia Circle',
        dog: []
    }).then((newOwner) => {  
    const newDog = Dog.create({
        name: 'Rae',
        weight: 50,
        breed: 'Mut'
    }).then((newdog) => {
    newOwner.dog.push(newdog)
})
    })}) 

//     Appointment.create({
//         startDate: 'January, 12 2019',
//         endDate: 'January, 14 2019',
//         owner: 'Daniel',
//         dog: 'Rae'
//     })
// })
/*
Dog.deleteMany()
.then(() => {
    Dog.create({
        name: 'Rae',
        weight: 50,
        breed: 'Mut',
        date: 'January 10, 2019',
        dogRatings: []
    }).then((dog) => {
        const shedComment = ratings.create({
            dogName: 'Rae',
            dogBehavior: 10,
            accidents: 0,
            shed: 10
        }).then((ratings) => {
            dog.shed.push(ratings)
        })

        const shedComment2 = sitterExitTicket.create({
            dogName: 'Murphy',
            dogBehavior: 9,
            accidents: 2,
            shed: 8
        }).then((review) => {
            dog.shed.push(review)
        })

        Promise.all([shedComment, shedComment2])
        .then(() => {
            dog.save()
            console.log("seeded successfully")
        }

    )}
)})

/*
    Dog.create({
        name: 'Murphy',
        weight: 50,
        breed: 'Poodle',
        behavior: 8,
        accidents: 0,
        shed: 1,
        date: 'January 11, 2019'
    })
)},

Owner.deleteMany()
.then(() => {
    Owner.create({
        name: 'Daniel',
        sitterName: 'Daniel',
        dogName: 'Rae',
        address: '799 Virginia Circle NE.'
})
*/


