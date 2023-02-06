//Initialise express
const  express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const noteRouter = require('./routes/Note');

const mongoose = require('mongoose');

const Note = require('./models/Note');

//Connect to MongoDB
mongoose.connect('mongodb+srv://vamp_goku:Kiyanyadav%401@cluster0.kfzmhcg.mongodb.net/notesdb', {useNewUrlParser: true}).then(()=> { 
    
console.log('MongoDB connected...')


app.use("/api", noteRouter);
}).catch(err => console.log(err));





        //Listen to port 5000 (Start server)
        const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started on port '+ PORT));