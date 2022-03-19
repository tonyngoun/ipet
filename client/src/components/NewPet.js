import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, navigate} from '@reach/router';



const NewPet = (props) => {

    const [errors, setErrors] = useState({});

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [firstskill, setFirstSkill] = useState("");
    const [secondskill, setSecondSkill] = useState("");
    const [thirdskill, setThirdSkill] = useState("");
    const [likes, setlikes] = useState("");


    const submitHandler = (e)=>{
        e.preventDefault();

        axios.post("http://localh03ost:8000/api/pets",
        //request's body that the back-end is asking for (see our controller)... create(req.body) THIS IS THAT!
        {
            name, 
            type,
            description,
            firstskill,
            secondskill,
            thirdskill,
            likes,
            
        },

        
        )
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate("/home");
        })

        .catch((err)=>{
            console.log("err:", err);
            console.log("err.response:", err.response);
            console.log("err.response.data:", err.response);

            setErrors(err.response.data.errors);
        });
    };

    return(
        <div>

            <header>
                <h1> Adopt a Pet</h1>
                <h3> Know a pet needing a new home? </h3>
            </header>
                <Link to={"/home"} className="link" >back to home page</Link>

            <form className="container" onSubmit={submitHandler}>
                <div className="input-content"><br/>
                    <label htmlFor="name">Pet Name</label><br/>
                    <input value={name} onChange={(e)=>setName(e.target.value)} name="name" type="text" /><br/>
                    
                    {
                        errors.name ?
                        <span> {errors.name.message}</span>
                        : null
                    }
                
                    <label htmlFor="type">Pet Type</label><br/>
                    <input value={type} onChange={(e)=>setType(e.target.value)} name="type" type="text" /><br />
                    {
                        errors.type ?
                        <span> {errors.type.message}</span>
                        : null
                    }
                
                    <label htmlFor= "description">Pet Description</label><br/>
                    <input value={description} onChange={(e)=>setDescription(e.target.value)} name="description" type="text" /><br/>
                <button className="Addbtn"> Add this Pet </button>
                </div>

                
                <div className="input-content">
                <p> Skill(optional) </p> 
                    <label htmlFor= "firstskill">Skill 1</label><br/>
                    <input value={firstskill} onChange={(e)=>setFirstSkill(e.target.value)} name="firstskill" type="text" /><br/>
                

                
                    <label htmlFor= "secondskill">Skill 2</label><br/>
                    <input value={secondskill} onChange={(e)=>setSecondSkill(e.target.value)} name="secondskill" type="text" /><br/>
                

                    <label htmlFor= "thirdskill">Skill 3</label><br/>
                    <input value={thirdskill} onChange={(e)=>setThirdSkill(e.target.value)} name="thirdskill" type="text" /><br/>
                
                </div>
<br/>
            
            </form>
        </div>

)
}

export default NewPet;