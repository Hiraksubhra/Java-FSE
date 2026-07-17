import React from "react";
import { useParams, Link } from "react-router-dom";
import trainersMock from "./trainersMock";

const TrainerDetails = ()=>{
    const { id } = useParams();
    const trainer = trainersMock.find(t=>t.trainerId === id);

    if(!trainer){
        return <div>Trainer not found</div>
    }

    return(
        <div>
            <h2>Trainer Details</h2>
            <br />
            <h4>{trainer.name} ({trainer.technology})</h4>
            <p>{trainer.email}</p>
            <p>{trainer.phone}</p>
            <ul>
                {trainer.skills.map((skill, index)=>(
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            <br />
            <Link to="/trainers">Back to Trainers</Link>
        </div>
    );
}

export default TrainerDetails;