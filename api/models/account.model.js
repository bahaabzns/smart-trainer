import mongoose from "mongoose";
const accountSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    domain:{
        type: String,
        required: true,
        unique: true,
    }
});

const Account = mongoose.model('Account', accountSchema);

export default Account;