import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>About page</h1>
            </div>
            <Link to="/users/1">Usuario 1</Link>
            <Link to="/users/2">Usuario 2</Link>
        </div>
    )
}