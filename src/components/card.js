import React from "react";

export default function(props) {
    const person = props.person;
    console.log(person);
    
    return (
        <div className="card">
           <p>Nombre: {person.name}</p>
           <p>Genero: {person.gender}</p>
           <p>Diamtro: {person.diameter}</p>

           
        </div>
    )
}