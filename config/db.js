const res = require("express/lib/response");
const mongoose = require("mongoose");
require('dotenv').config();

//const MONGOURI = process.env.MONGO_URI;

//mongodb uri
const MONGOURI = process.env.MONGO_URI;

const InitiateMongoServer = async () => {
    try{
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true
        });
        console.log("Connected to MongoDB!!");
    } catch (e){
        console.log(e);
        throw e;
    }
}

module.exports = InitiateMongoServer;

// const InitiateMongoServer = async() => {
//     try {
//         //const mongoDB = MONGOURI;
//         console.log("MONGO DB URI ====== >: ",MONGOURI);
//         mongoose.connect(MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true});
//         const db = mongoose.connection;
//         db.on('error', console.error.bind(console, 'MongoDB connection error: '));
//         console.log('connected to MongoDB');
//     } catch (error) {
//         if(!error.statusCode)
//             error.statusCode = 500;
//         throw error;
//     }
// }

// module.exports = InitiateMongoServer;