const { findOne } = require('../models/Student');
const Student = require('../models/Student')

module.exports = {
    Query: {
        students: () => Student.findAll(),
        studentByName: (parent, { name }, context, info) => {
            return Student.findOne({ where: { name: name}})
        },
        studentByCpf: (parent, { cpf }, context, info) => {
            return Student.findOne({ where: { cpf: cpf }})
        },
        studentByEmail: (parent, { email }, context, info) => {
            return Student.findOne({ where : {email: email }})
        },
    }
};