const mongoose = require('mongoose');
// run below to connect to mongo shell
// mongo "mongodb+srv://cluster0-k94qv.mongodb.net/test" --username kelv123
const mongoURI = 'mongodb+srv://kelv123:kelvin12@cluster0-k94qv.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, }).then(() => console.log('DATABASE CONNECTED'));


const Schema = mongoose.Schema;

// set a new schema for the 'bucketUsers' collection
// add signedOn as a strech feature or goal

const bucketUserSchema = new Schema(
  {
    user: { type: String, required: true },
    buckets: [{ bucketName: String, bucketItems: [String] }],
  }
);

const bucketUser = mongoose.model('bucketUsers', bucketUserSchema);

module.exports = bucketUser;