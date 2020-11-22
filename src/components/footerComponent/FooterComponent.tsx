import React from 'react';



export default function Footer () {

    return (
    <footer className="" id="footer">
        <div className = "row">
            <div className="contactUs col-md-4">
                <h6>CONTACT US</h6>
                <p>Globrock Financial Group, Inc.</p>
                <small className = "">161 N. Clark Street, Suite 4700</small> <br/>
                <small className = "">Chicago, Illinois 60601 | U.S.A</small> <br/>
                <small className = "">P+1.312.523.2156 | F+1.312.523.2001</small> <br/>
                <small className = "">C+1.312.927.4830</small> <br/>
                <small className = "">e-mail: info@globrockfinancial.com</small>
            </div>
            <div className = "servicesFooter col-md-4">
                <h6>SERVICES</h6>
                <small className = "">Management Consulting</small> <br/>
                <small className = "">Investment Advisory</small> <br/>
                <small className = "">Financial Consulting</small> <br/>

            </div>
            <div className = "partnersFooter col-md-4">
                <h6>PARTNERS</h6>

            </div>
        </div>
        <div className = "row" id="social">

        </div>
        <div className="row" id = "poweredBy"></div>
    </footer>
    );
}