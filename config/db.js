const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.mongoURI, {
            useUnifiedTopology:true,
            useNewUrlParser: true
        });

        console.log('MongoDB Connected...');
    }catch(err){
        console.error(err.message);
        //Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;