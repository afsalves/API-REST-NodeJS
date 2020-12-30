const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        unique: true, //define que nao pode ser repetido
        required: true,  //seta obrigatoriedade
        lowercase: true, //forçar caixa baixa
    },

    password: {
        type: String,
        required: true,
        select: false, //evita que ao efetuar uma busca essa informaçao retorne no array de uruário
    },

    passwordResetToken:{
        type: String,
        select: false, 
    },

    passwordResetExpires:{
        type: Date,
        select: false,
    },

    createAt: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
