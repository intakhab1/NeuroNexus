const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser : true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("mongodb database connection with express is successfull "))
    .catch((error) => {
        console.log("error in connection");
        console.error(error.message);
        process.exit(1);
    })
}
module.exports = dbConnect;