import mongoose from "mongoose";

const usersCollection = 'user'

const usersSchema = new mongoose.Schema({

    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    },
    profileImg: {
        type: String,
        required: true,
        default:'',
    },
    cart: {
        type: [
            {
                cart: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'cart'
                },
                id: {
                    type: String,
                    
                },
            },
        ],
        default: [],
        required: true
    },
    documents: {
        type: [
            {
            name: String,
            reference: String,
            }
        ],
        default: [],
        required: true
    },
    lastConnection: {
        type: Date,
        default: Date.now,
        required: true
    }
})
usersSchema.pre('findOneAndUpdate', function(next) {
    this.set({ lastConnection: Date.now() });
    next();
});

const usersModel = mongoose.model(usersCollection, usersSchema)

export default usersModel;