// We are exporting an object of key-value pairs from our controller.
// Rather than writing the ENTIRE function, we simply access it using PetController.findAllPets
const PetController = require("../controllers/pet.controller");

// const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
    //if data is being sent to my server to create something new,we use a POST request
    app.get("/api/pets", PetController.findAllPets);
    //added "authenticate" for user/register form <<<<<<<<<<<<<<<<
    // app.post("/api/pets", authenticate, PetController.createNewPet);
    app.post("/api/pets", PetController.createNewPet);

    //Make sure calls with params go after the previous calls
    app.get("/api/pet/:id", PetController.findOnePet);

    //added line below for user/register form <<<<<<<<<<<<<<<
    // app.get("/api/user/pets/:userId", PetController.findAllPetsByUser);

    app.put("/api/pet/:id", PetController.updatePet);
    
    app.delete("/api/pet/:id", PetController.deletePet);

}

