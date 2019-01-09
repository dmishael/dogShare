const Appointment = require('../models/Appointment')
const SitterComment = require('../models/SitterComment')
const UserProfile = require('../models/UserProfile')


UserProfile.deleteMany({})
.then(() => {
    return Appointment.create({
            startDate: 'January 10, 2019',
            endDate: 'January 12, 2019',
            owner: 'Bill',
            dog: 'Murphy',
            sitterComment: []
    }).then((newApp) => {
        const sitterComment = SitterComment.create({
            name: 'George',
            email: 'george@gmail.com',
            cellNumber: '770-222-3333',
            comments: 'I am excited to meet Murphy'
        }).then((sitter) => {
            newApp.sitterComment.push(sitter)
        })

        Promise.all([sitterComment])
        .then(() => {
            newApp.save()
        })

    })
})







//     Dog.create({
//         name: 'Murphy',
//         weight: 50,
//         breed: 'Poodle',
//         behavior: 8,
//         accidents: 0,
//         shed: 1,
//         date: 'January 11, 2019'
//     })
// )},

// Owner.deleteMany()
// .then(() => {
//     Owner.create({
//         name: 'Daniel',
//         sitterName: 'Daniel',
//         dogName: 'Rae',
//         address: '799 Virginia Circle NE.'
// })


// Owner.deleteMany({})
// // .then(() => { 
// //     const newApp = Appointment.create({
// //         startDate: 'January 10, 2019',
// //         endDate: 'January 12, 2019',
// //         owner: 'Daniel',
// //         dog: 'Rae'
// //     }).then((appointment) => {
// //     const newOwner = Owner.create({
// //         name: 'Daniel',
// //         sitter: 'Bill',
// //         address: '799 Virginia Circle',
// //         dog: 'Rae'
// //     }).then((owner) => {  
// //     const newDog = Dog.create({ 
// //         name: 'Rae',  
// //         weight: 50,
// //         breed: 'Mut' 
// //     }).then((newdog) => {
// //     const sitterXT = SitterExitTicket.create({
// //         dogName: 'Rae',
// //         dogBehavior: 10,
// //         accidents: 1,
// //         shed: 2
// //     })
// // })
// // })
// // })
// // })


