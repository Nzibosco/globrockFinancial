import React from 'react';
import { Link } from 'react-router-dom';


export default function Intro() {
    return (

        <div className = "jumbotron expand-lg text-center" id ="intro">


            <h1 className="display-4" id = "brandName">Globrock <p id ='financial'>FINANCIAL</p></h1>
            <p id='highlight'> <span className = "hi2">Investment Advisory</span> | <span className = "hi2">Financial Consulting</span> | 
            <span className = "hi2">Investment Management</span></p>
            <br/>
            <Link to='about'><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></Link>
        </div>

    );
}