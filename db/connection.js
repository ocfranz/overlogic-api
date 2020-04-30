const mongoose = require('mongoose');

const dbConnection = () =>{
    mongoose.connect(process.env.DATABASE_CONNECTION,
        {useUnifiedTopology: true, useNewUrlParser : true}
        , (err)=>{
        if(err){
            console.log('Error', err);
        }else{
            console.log('Conected');
        }
      })
}

module.exports = dbConnection;