const mongoose = require('mongoose');

const url = 'mongodb+srv://deploy:uploaddeploy@cluster0.5or3g.mongodb.net/deploy?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true });

module.exports = mongoose;