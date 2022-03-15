const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({

    name: {
        type:String,
        minlength:[3, "Must have 3 characters"],
        required: [true, "A pet name is required"]
    },

    type: {
        type:String,
        required:[true, "We need to know what kind of pet"],
        minlength:[3, "Must have 3 characters"]
    },

    description: {
        type:String,
        required:[true, "Please describe pet"],
        minlength:[3, "Must have 3 characters"]
    },

    firstskill: {
        type:String,
    },

    secondskill: {
        type:String,
    },

    thirdskill: {
        type:String,
    },

    likes: {
        type: Number,
        default: 0
    },

    //making new field for user/login/register form

    // createdBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     // this also needs to match what we put in our collection and it is case sensitive.
    //     //ref is able to grab any collection in the database
    //     ref: "User"
    // },
    
    

    //timestamps automatically create "createdAt" and "updatedAt" date and time info for each document 
}, 

    {timestamps: true}
);

const Pet = mongoose.model("Pet", PetSchema);
//Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc

module.exports = Pet;
