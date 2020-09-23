import React from 'react';


export default function NewsLetter() {

    return (
        <div id = "newsLetterArea">

            <h3 className = "text-center">Sign up for our newsletter</h3>
       
        <form id = "newsLetter">
            <div className="form-group">
                <label htmlFor="firstname" className = "inputName">First Name</label>
                <input type="text" className="form-control" id="firstname" aria-describedby="firstnameHelp"/>
            </div>

            <div className="form-group">
                    <label htmlFor="lastname">Last name</label>
                    <input type="text" className="form-control" id="lastname" aria-describedby="lastnameHelp"/>
            </div>

            <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="number" className="form-control" id="number" aria-describedby="numberHelp"/>
            </div>

            <div id="newsLetterButton">
                <button type="submit" className="btn btn-primary">Sign up</button>
            </div>
            

        </form>

        </div>
    );

}