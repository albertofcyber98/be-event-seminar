const mongoose = require('mongoose');
const { model, Schema } = mongoose;
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

let userSchema = Schema(
    {
        name: {
            type: String,
            required: [true, 'Nama harus diisi'],
            minlength: 3,
            maxlength: 50
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'Email harus diisi'],
        },
        password: {
            type: String,
            required: [true, 'Password harus diisi'],
            minlength: 6,
        },
        role: {
            type: String,
            enum: ['admin', 'organizer', 'owner'],
            default: 'admin',
        },
        organizer: {
            type: mongoose.Types.ObjectId,
            ref: 'Organizer',
            required: true,
        },
    },
    { timestamps: true }
);

userSchema.pre('save', async function (next) {
    // .pre hooks dari mongoose jadi sebelum
    // melakukan modifikasi di set dulu model dari User
    // yang akan dimodifi adalah password
    const User = this;
    if (User.isModified('password')) {
        User.password = await bcrypt.hash(User.password, 12);
    }
    next();
})

// methods sejenis function yang dapat digunakan untuk compare pwd
// untuk mencocokkan request dari client dan yang ada di collection
// hasilnya itu true / false
userSchema.methods.comparePassword = async function (canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password);
    return isMatch;
}

module.exports = model('User', userSchema);