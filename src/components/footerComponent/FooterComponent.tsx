import React from 'react';



export default function Footer () {

    return (
    <footer className="" id="footer">
                <div className = "row" id="social" >

<div id = 'socialSection'>
{/* <p> */}

        <a className="fa fa-linkedin" href="https://www.linkedin.com/in/bosconzeyi/"
            target="blank"></a> 
        <a className="fa fa-twitter" href="https://twitter.com/nzibosco" target="blank"></a>

        <a className="fa fa-facebook" href="https://www.facebook.com/nzibosco" target="blank"></a>
{/* </p> */}
</div>

</div>
        <div className = "row">
            <div className="contactUs footerItem col-md-4">
                <h6>CONTACT US</h6>
                <p>Globrock Financial Group, Inc.</p>
                <small className = "">161 N. Clark Street, Suite 4700</small> <br/>
                <small className = "">Chicago, Illinois 60601 | U.S.A</small> <br/>
                <small className = "">P+1.312.523.2156 | F+1.312.523.2001</small> <br/>
                <small className = "">C+1.312.927.4830</small> <br/>
                <small className = "">e-mail: info@globrockfinancial.com</small>
            </div>
            <div className = "servicesFooter footerItem col-md-4">
                <h6>SERVICES</h6>
                <small className = "">Management Consulting</small> <br/>
                <small className = "">Investment Advisory</small> <br/>
                <small className = "">Financial Consulting</small> <br/>
            </div>
            <div className = "partnersFooter footerItem col-md-3">
                <h6>PARTNERS</h6>
                <small><a href = "https://africangcc.org/" target = "_" className="partner"> African Global Chamber Of Commerce</a></small><br/>
                <small><a href = "http://habona.rw/" target = "_" className="partner"> Habona Ltd</a></small> <br/>
                <small> City of Chicago</small><br/>
            </div>
        </div>

        <div className="row" id = "poweredBy">

        </div>
    </footer>
    );
}