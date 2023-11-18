const mongoose = require('mongoose')

const connectMongo = async () => { 
    try {
        await mongoose.connect('mongodb+srv://nicolasgarciagorchs:nicolasgarciagorchs@primerbasededatos.fk1940x.mongodb.net/?retryWrites=true&w=majority')
        console.log("Mongodb connected successfully")
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectMongo;