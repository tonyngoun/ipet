import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, navigate} from '@reach/router';



const EditPet = (props) => {

    const{id}=props;

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [firstskill, setFirstSkill] = useState("");
    const [secondskill, setSecondSkill] = useState("");
    const [thirdskill, setThirdSkill] = useState("");
    const [likes, setlikes] = useState("");


    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then((res) => {
            console.log(res.data);
            setName(res.data.name);
            setType(res.data.type);
            setDescription(res.data.description);
            setFirstSkill(res.data.firstskill);
            setSecondSkill(res.data.secondskill);
            setThirdSkill(res.data.thirdskill);
        })
        .catch((err) =>{
            console.log(err);
        })
    },[])

    const submitHandler = (e)=>{
        e.preventDefault();

        axios
            .put(
                `http://localhost:8000/api/pet/${id}`,
        //request's body that the back-end is asking for (see our controller)... create(req.body)
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
            console.log(err);
        });
    };


    return(
        <div>

            <header>
                <h1> The Pet Shelter </h1>
                <h3> Update {name} info </h3>
                <Link to={"/home"} className="link" >back to home page</Link>
            </header>

            <form className="container" onSubmit={submitHandler}>
                
                <div className="input-content"><br/>
                    <label htmlFor="name">Pet Name</label><br/>
                    <input value={name} onChange={(e)=>setName(e.target.value)} name="name" type="text" /><br/>
                
                    <label htmlFor="type">Pet Type</label><br/>
                    <input value={type} onChange={(e)=>setType(e.target.value)} name="type" type="text" /><br/>
                
                    <label htmlFor= "description">Pet Description</label><br/>
                    <input value={description} onChange={(e)=>setDescription(e.target.value)} name="description" type="text" /><br/>
                <button className="Updatebtn"> Update Pet </button>
                
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

            

            </form>

        </div>

);
};

export default EditPet;
