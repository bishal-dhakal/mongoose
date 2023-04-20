const mongoose = require('mongoose');

//create connection and db
mongoose.connect("mongodb://127.0.0.1/biodata")
    .then(() => console.log("connection successfull... "))
    .catch((err) => console.log(err))

//schema
const biodataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    age: Number,
    degree: String,
    employee: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

//create collection from schema
const Biodata = mongoose.model("Biodata", biodataSchema);


//create document
const createDocument = async () => {
    try {
        //insert the documents
        const anishBiodata = new Biodata({
            name: "Anish",
            address: 'Ktm',
            age: 24,
            degree: '+2',
            employee: true,
        });

        const prabhuBiodata = new Biodata({
            name: "Ankit",
            address: 'KTM',
            age: 22,
            degree: '10',
            employee: true,
        });

        const ankitBiodata = new Biodata({
            name: "Prabhu",
            address: 'Siriha',
            age: 24,
            degree: 'PHD',
            employee: true,
        });
        
        //const result = await dipsonBiodata.save();
        const result = await Biodata.insertMany([anishBiodata,prabhuBiodata,ankitBiodata]);
        console.log(result)
    }catch(err){
        console.log(err)
    }
}

// createDocument()

//read document
const getDocument = async () => {
   try{
    const result = await Biodata
    //.find({age:24})
    //.find({address :{ $nin :['Jhapa','Ktm','Siriha','lalitpur']}})
    //.find({$and : [{address : 'Jhapa'} , {degree:'masters'}]})
    .find()
    .select({name:1})
    .sort({name:1});
    //.countDocuments();

    console.log(result);
   }catch(err){
    console.log(err);
   }
}

getDocument();


//update
//delete
//custome validate