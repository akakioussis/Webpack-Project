const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
});

// const MongoClient = require('mongodb').MongoClient;

// // replace the uri string with your connection string.
// const uri = "'mongodb+srv://mossbread:<0e6YrDJlshJsu1mP>@mos-e1lxk.mongodb.net/test?retryWrites=true&w=majority'"
// MongoClient.connect(uri, function (err, client) {
//     if (err) {
//         console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
//     }
//     console.log('Connected...');
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mossbread:<0e6YrDJlshJsu1mP>@mos-e1lxk.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true
});
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});