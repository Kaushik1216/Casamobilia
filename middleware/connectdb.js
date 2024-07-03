const mongoose = require("mongoose");

export const connectDB = async () => {        
    try {
        // const Database = "mongodb://localhost:27017/casamobilia"
        const Database = process.env.DATABASE_URL;
        mongoose
            .connect(Database, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => console.log("DB connection successful!"));
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

