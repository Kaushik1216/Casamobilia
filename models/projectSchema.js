const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
    projectname: {
        type: String,
        required: true,
    },
    projectyear: {
        type: String,
        required: true,
    },
    projectplace: {
        type: String,
        required: true,
    },
    projectdesciption: {
        type: String,
        required: true,
    },
    backgroundimage: {
        type: String,
        required: true,
    },
    projecttype: {
        type: String,
        required: true,
    },
    images: [String]
});

mongoose.models  = {};
export const productmodel =  mongoose.model("projects", projectSchema);
