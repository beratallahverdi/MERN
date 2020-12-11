const mongoose = require('mongoose');
require('dotenv').config({path:'.env'});

const hostname = '192.168.1.128';
const port = 8080;

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

const app = require('./app')

const server = app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

derslerController.Deneme;