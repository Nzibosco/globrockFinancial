
import React from 'react';


export default function Services() {

  return (
    <div className="card-deck">
      <div className="card">
        {/* <img src="..." class="card-img-top" alt="..."> */}
        <div className="card-body">
          <h5 className="card-title">Investment Advisory</h5>
          <p className="card-text">We Raise funding for Governments and Private Sector, Finance Private Projects, Manage your Assets, and 
                            Help you deal with Mergers and Acquisition with ease.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        {/* <img src="..." class="card-img-top" alt="..."> */}
        <div className="card-body">
          <h5 className="card-title">Financial Consulting</h5>
          <p className="card-text">We bring in our expertise to help you with Capital Market Design, Development, and Implementation. 
                            We also help you with Payment Systems Design and Implementation.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        {/* <img src="..." class="card-img-top" alt="..."> */}
        <div className="card-body">
          <h5 className="card-title">Investment Management</h5>
          <p className="card-text">Helping you tackle challenging tasks from Import/Export documentation and strategies, 
                            Business Processes, Technical feasibility studies, all the way to Risk Management.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  )

}
