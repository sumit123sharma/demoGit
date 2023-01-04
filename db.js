//connect our node/express application tp the database

// mongoose connect this

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/myDatabase' , {
    useNewUrlParser:true,
    useUniFiedTopology:true
}).then(()=>{
    console.log('database connected successfully')
}).catch(err=> console.log(err))     // now require this file in our main file app.js


// after require in app.js create three folders user , order , product

