const mongoose = require('mongoose');
require('dotenv').config({path:'.env'});

const hostname = '192.168.1.128';
const port = 8080;

const file = require("./db.json");

mongoose.connect(process.env.DATABASE,{
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(`Database Connection Error -> ${err.message}`);
})

require('./models/Dersler');

const derslerController = require('./models/Dersler');

/*
console.log(recursiveJson(file,[]));

function recursiveJson(json, arr = []){
    json.map((data)=>{
        arr.push(data);
        console.log("aq");
        if(data.subCategories.length > 0){
            return recursiveJson(data.subCategories, arr);
        }
        else{
            arr.push(data);
        }
    })
    return arr;
}
*/
const app = require('./app')

const server = app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

derslerController.Deneme;