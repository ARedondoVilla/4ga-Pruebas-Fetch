import React, { useState, useEffect } from "react";

import Card from "../components/card.js"

export default function(props) {

    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);
    
    useEffect(() => {
        
        const endpoint = "https://swapi.dev/api/people/";
        const config = {
            method: "GET"
        }              
        fetch(endpoint, config).then((response) => {
            return response.json()
            console.log(response);
        }).then((json) => {
            setPeople(json.results);
            console.log(json.results);
        });  
    }, []);

    useEffect(() => {
        
        const endpoint = "https://swapi.dev/api/planets/";
        const config = {
            method: "GET"
        }              
        fetch(endpoint, config).then((response) => {
            return response.json()
            console.log(response);
        }).then((json) => {
            setPlanets(json.results);
            console.log(json.results);
        });  
    }, []);

    

    return (
        <div className="container">
            <h1>People</h1>
            {people.map((person, index) => <Card key={index} person={person}/>)}
            
            <h1>Planets</h1>
            {planets.map((person, index) => <Card key={index} person={person}/>)}
        </div>
    )
}