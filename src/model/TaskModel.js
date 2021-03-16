const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    macaddress: {type: String, required: true},
    cpf: {type: Number, required: true},
    type: {type: Number, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    fone: {type: Number, required: true},
    description: {type: String, required: true},
    //when: {type: Date, required: true},
    done: {type: Boolean, required: false},
    created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('task', TaskSchema);