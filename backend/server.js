require("dotenv").config();
const { connectToMongo } = require("./src/db/db");
const app = require("./app");

connectToMongo();

app.listen(process.env.PORT , function(){
    console.log(`Server is running on port ${process.env.PORT}`)
});


