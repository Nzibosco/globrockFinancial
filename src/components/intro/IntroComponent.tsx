import React from 'react';
import { Link } from 'react-router-dom';


export default function Intro() {
    return (

        <div className = "jumbotron expand-lg text-center" id ="intro">
            <h1 className="display-4" id = "brandName">Globrock Financial</h1>
            <p className="lead" id="pitch">The Globrock Financial Group, Inc. is a global management and investment advisory 
            consulting firm. Our staff offers extensive knowledge and expertise in management consulting, 
            investment management, investment advisory, and other financial services primarily with Small 
            and Medium Enterprises and Institutional Clients.</p>
            <br/>
            <Link to='about'><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></Link>
        </div>

    );
}