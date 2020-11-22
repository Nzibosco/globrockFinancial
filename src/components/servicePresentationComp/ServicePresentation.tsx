import React from 'react';


export function ServicePresentation() {

    return (

        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators" id = "slides">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active slide"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1" className = "slide"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2" className = "slide"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active" data-interval="3000">

                    <div className="carousel-caption">
                        <h4>Management Consulting</h4>
                        <p>Helping you tackle challenging tasks from Import/Export documentation and strategies, 
                            Business Processes, Technical feasibility studies, all the way to Risk Management</p>
                    </div>
                </div>
                <div className="carousel-item" data-interval="3000">
                    <div className="carousel-caption">
                        <h4>Investment Advisory</h4>
                        <p>We Raise funding for Governments and Private Sector, Finance Private Projects, Manage your Assets, and 
                            Help you deal with Mergers and Acquisition with ease
                        </p>
                    </div>
                </div>
                <div className="carousel-item" data-interval="3700">
                    <div className="carousel-caption">
                        <h4>Financial Consulting</h4>
                        <p>We bring in our expertise to help you with Capital Market Design, Development, and Implementation. 
                            We also help you with Payment Systems Design and Implementation</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}