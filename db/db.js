const mongoose = require('mongoose')
const connectDB = async ()=>{
  const connecting = await mongoose.connect(process.env.Mongo_URI,{
    useNewUrlParser:true
  })
  console.log(`Mongodb connected to ${connecting.connection.host}`);
}
module.exports = connectDB