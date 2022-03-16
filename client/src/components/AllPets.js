import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';


const AllPets = (props) => {

    const [petList, setPetList] = useState([]);

    useEffect(() =>  {
        axios.get("http://localhost:8000/api/pets")
            .then((res)=>{  
                console.log(res);
                console.log(res.data);
                setPetList(res.data);
            })
            .catch((err)=>console.log(err));
        

    },[])

    const deletePet = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/pet/${idFromBelow}`)
        .then((res)=>{
            console.log(res.data);
            const newList = petList.filter((pet, index)=> pet._id !== idFromBelow);
            setPetList(newList);
        })
        .catch((err)=> {
            console.log(err)
        })
    }


return(
        <div>
            <header>
            <h1 style={{fontSize:"45px"}}> The Pet Shelter</h1>
            <h2 style={{marginLeft:"5px"}}>These Pets are looking for a good home</h2>
            {/* path to our NewPet component as set in the Router in app.js */}
            <Link to={"/new"} className="link" ><u >add a pet to the shelter</u></Link>

            </header>


            <table>
                <thead>
                    <tr className="table">
                        <td>Name</td>
                        <td>Type</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                
                <tbody>
            {
                petList.map((pet, index) => (
                    <tr key={index}>
                        <td> {pet.name} </td>
                        <td> {pet.type} </td>
                        <td><Link to={`/pet/${pet._id}`}>Details </Link> | <Link to={`/pet/edit/${pet._id}`}>Edit</Link></td>
                    </tr>
                    ))
        
            }
            </tbody>
</table>

<br />
            
        </div>
    )
}
export default AllPets;