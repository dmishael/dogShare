const Appointment = require('../models/Appointment')
const SitterComment = require('../models/SitterComment')



Appointment.deleteMany({})
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



