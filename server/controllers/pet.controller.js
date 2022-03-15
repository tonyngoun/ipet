const Pet = require("../models/pet.model");

// const jwt = require("jsonwebtoken");

module.exports ={

//DISPLAY ALL PETS
    findAllPets: (req,res) => {
        Pet.find({})
        // .populate("createdBy", "username _id") //add line for login/register form
        .then((allPets) => {
            console.log(allPets);
            //response is in json
            res.json(allPets)
        })
        .catch((err) =>{
            console.log("Find all pets failed");
            res.json({message: "Something went wrong in findAllPets", error: err})
    })
},

// line 24-34 added for user/form register

// findAllPetsByUser:(req,res) =>{
//     Pet.find({ createdBy: req.params.userId})
//     .then((allUserPets) => {
//         console.log(allUserPets);
//         res.json(allUserPets);
//     })
//     .catch((err)=>{
//         console.log(err);
//         res.status(400).json(err);
//     })
// },



//GET ONE PET
    findOnePet: (req,res) => {
        Pet.findOne({_id: req.params.id})
        .then((onePet) => {
            console.log(onePet);
            res.json(onePet)
        })
        .catch((err) => {
            console.log("Find one pet failed");
            res.json({message: "Something went wrong in findOnePet", error:err});
        })      
    },


// MAKE NEW PET
// line 53-64 without login/register user form
    createNewPet: (req, res) => {
        Pet.create(req.body)
        .then((newPet) => {
            console.log(newPet);
            res.json(newPet);
        })
        .catch((err) =>{
            console.log("Something went wrong in createNewPet");
            res.status(400).json(err);
    })
    },

// //Make NEW PET w/ register form
// // adding login/register user form, have to modify to Pet.create to Pet.save
//     createNewPet: (req, res) => {
//         const newPetObj = new Pet(req.body);
//         //have to decode our JWT to get the currently logged in user's _id to add to the new
//         //pet document in the collection
//         const decodedJWT = jwt.decode(req.cookies.usertoken,{
//             complete: true
//         })

//     newPetObj.createdBy = decodedJWT.payload.id;



    // newPetObj.save()
    //     .then((newPet) => {
    //         console.log(newPet);
    //         res.json(newPet);
    //     })
    //     .catch((err) =>{
    //         console.log("Something went wrong in createNewPet");
    //         res.status(400).json(err);
    // });
    // },

//UPDATE PETS
    updatePet: (req,res) => {
        Pet.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators:true }
        )
        .then((updatedPet)=> {
            console.log(updatedPet);
            res.json(updatedPet);
            
        })
        .catch((err) =>{
            res.status(400).json(err);

        })
    },

//DELETE PET
    deletePet: (req,res) => {
        Pet.deleteOne({_id: req.params.id})
        .then((deletedPet) => {
            console.log(deletedPet);
            res.json(deletedPet)
        })
        .catch((err) => {
            console.log("Delete pet failed");
            res.json({message: "Something went wrong in deletePet", error:err});
        })      
    },

}