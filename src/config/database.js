const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://deploy:uploaddeploy@cluster0.5or3g.mongodb.net/uploadcrud?retryWrites=true&w=majority';
mongoose.connect(MONGO_URL, { useNewUrlParser: true });

module.exports = mongoose;