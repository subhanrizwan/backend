import mongoose, { Schema } from "mongoose";
// import { Schema } from mongoose;

const UserSchema = mongoose.Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: Schema.Types.String,
        required: true
    }
})

const User = mongoose.model("User",UserSchema)

export default User;