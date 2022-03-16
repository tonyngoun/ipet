import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, navigate} from '@reach/router';

const OnePet = (props) => {

    const {id} = props;
    
    const [pet, setPet] = useState({});



    useEffect(()=>{
        //This id is very important. We were able to send it from AllPets to here 
        // The id acts as a prop in React.
        // We deconstruct it and use it as our request's params as set in our controller!
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then((res)=>{
            console.log(res.data);
            console.log(props.location.state);
            setPet(res.data);
        })
        .catch((err)=>console.log(err));
    
    },[])

    const deletePet = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/pet/${idFromBelow}`)
        .then((res)=>{
            console.log(res.data);
            navigate("/home");
        })
        .catch((err)=> {
            console.log(err)
        })
    }




    return(
        <div className="container-detail">
            <h1> The Pet Shelter </h1>
            <h2> Details about {pet.name} ! </h2>
            <Link to={"/home"} className="link">Return Home</Link>
            
            <div className="detail-content">
                
                <p> Pet Name: {pet.name} </p>
                <br/>
                
                <p> Pet Type: {pet.type} </p>
                <br/>
                
                <p> Pet Description: {pet.description} </p>
                <br/>
                <p> Pet Skills:</p> 
                <li> {pet.firstskill}</li> <br/>
                <li>  {pet.secondskill} </li><br/>
                <li> {pet.thirdskill} </li><br/>
                <br/>
                <button className="adoptbutton" onClick={(e)=> deletePet(pet._id)}>Adopt this Pet</button>
                <p>{pet.Likes ? pet.petLikes : 0} Likes for {pet.name}</p>
            </div>

            

        </div>


    );


}

export default OnePet;