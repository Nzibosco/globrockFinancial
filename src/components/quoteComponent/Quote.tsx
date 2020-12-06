import React from 'react';


export default function Quote() {
    return (
        <div className="jumbotron text-center" id = 'quote'>
            <h1 className="display-4">Get A quote</h1>
            <p className="lead">We pride in helping you achieve your financial goals. Select a service below to get a quote</p>
            <select id='options' className = 'lead text-center'>
                <option>-----Select a service----</option>
                <option>Investment Management</option>
                <option>Financial Consulting</option>
                <option>Investment Advisory</option>
            </select>
            <br/>
            <a className="btn btn-primary btn-lg" href="#" role="button">&nbsp;  Go &nbsp;</a>
        </div>
    )
}