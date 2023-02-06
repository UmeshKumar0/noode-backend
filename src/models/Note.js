//Steps
//1 . define the schema for the model
//2. create the model
//3. export the model

const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    userId : {  
        type: String,
        required: true,
    },
    title: { 
        type: String,
        required: true,
     },
    content: { 
        type: String,
        
     },
    createdAt: {
        type: Date,
        default: Date.now

    }


  });

    module.exports = mongoose.model('Note', noteSchema);