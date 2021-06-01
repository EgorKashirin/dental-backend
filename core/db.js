const mongoose = require('mongoose');


mongoose
    .connect('mongodb+srv://jaime_burn:6p1zysj8@cluster0.u6ui2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true
        })
    .catch(function (err) {
    throw Error(err);
    });


module.exports = mongoose;