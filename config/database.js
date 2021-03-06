const mongoose = require('mongoose')
//db configuration

//connect express to mongo via mongoose
//config the promise lib to be ES6 Promise
mongoose.Promise = global.Promise
mongoose.set('useFindAndModify',false)

//connect to db
mongoose.connect('mongodb://localhost:27017/mern-project-mobiapp', { useNewUrlParser: true, useCreateIndex:true})
    .then(() => {
        console.log('Connected to the DB')
    })
    .catch((err) => {
        console.log('ERROR connected to DB')
    })

module.exports = mongoose
//single value sent module.export = mongoose