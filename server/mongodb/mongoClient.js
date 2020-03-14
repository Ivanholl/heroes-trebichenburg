// var mongoose = require('mongoose');

// var user = "Arelam";
// var pass = "1q2w3e4r5t"
//
// mongoose.connect(`mongodb://${user}:${pass}@ds119160.mlab.com:19160/heroes-trebichenburg`, {useNewUrlParser: true});



var mongoose = require('mongoose');
var userSchema = require('./userSchema');

var user = "arelam";
var pass = "1q2w3e4r5t"

mongoose.connect(`mongodb://${user}:${pass}@ds119160.mlab.com:19160/heroes-trebichenburg`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user,
    pass
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to database!')
});

module.exports = db;
