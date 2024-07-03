const mongoose = require("mongoose");

const collectionSchema = mongoose.Schema({
    collectionname: {
        type: String,
        required: true,
    },
    firstdesciption: {
        type: String,
        required: true,
    },
    seconddesciption: {
        type: String,
        required: true,
    },
    thirddesciption: {
        type: String,
        required: true,
    },
    fourthdesciption: {
        type: String,
        required: true,
    },
    fifthdesciption: {
        type: String,
        required: true,
    },
    firstimage: {
        type: String,
        required: true,
    },
    secondimage: {
        type: String,
        required: true,
    },
    thirdimage: {
        type: String,
        required: true,
    },
    fourthimage: {
        type: String,
        required: true,
    },
    fifthimage: {
        type: String,
        required: true,
    },
    secondmodalimages: [String],
    secondmodaldiscription:[String],
    thirdmodalimages: [String],
    thirdmodaldiscription:[String],
    fourthmodalimages: [String],
    fourthmodaldiscription:[String],
    fifthmodalimages: [String],
    fifthmodaldiscription:[String],
});

mongoose.models  = {};
export const collectionmodel =  mongoose.model("collections", collectionSchema);
