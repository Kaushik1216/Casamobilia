const mongoose = require("mongoose");

// export const connectDB = handler => async (req , res) => {

//     if(mongoose.connection[0].readyState){
//         return handler(req , res);
//     }

//     try {
//         const Database = "mongodb://localhost:27017/casamobilia"
//         //  const Database = process.env.DATABASE_URI.replace(
//         //      "<password>",
//         //      process.env.DATABASE_PASSWORD
//         //  );
//         mongoose
//             .connect(Database, {
//                 useNewUrlParser: true,
//                 useUnifiedTopology: true,
//             })
//             .then(() => console.log("DB connection successful!"));
//     } catch (err) {
//         console.error(err);
//         process.exit(1);
//     }
// };

export const connectDB = async () => {
    if(mongoose.connection[0].readyState){
        return true;
    }
        
    try {
        const Database = "mongodb://localhost:27017/casamobilia"
        //  const Database = process.env.DATABASE_URI.replace(
        //      "<password>",
        //      process.env.DATABASE_PASSWORD
        //  );
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

