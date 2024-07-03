const mongoose = require("mongoose");

const faqSchema = mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    }
});

mongoose.models  = {};
export const faqmodel =  mongoose.model("faqs", faqSchema);
