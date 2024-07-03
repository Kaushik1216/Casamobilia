const mongoose = require("mongoose");

const carouselSchema = mongoose.Schema({
    alt: {
        type: String,
        required: true,
    },
    srcleft: {
        type: String,
        required: true,
    },
    srcright: {
        type: String,
        required: true,
    },
    projectname: {
        type: String,
        required: true,
    },
    projectplace: {
        type: String,
        required: true,
    },
    bgcolor: {
        type: String,
        required: true,
    }
});

mongoose.models  = {};
export const carouselmodel =  mongoose.model("carousels", carouselSchema);
