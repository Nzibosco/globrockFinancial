import React from 'react';
import { ServicePresentation } from '../servicePresentationComp/ServicePresentation';


export default function ImageComp (){

    return (
        <div className = 'row expand-lg'>
            <img src= 'https://globrockimages.s3.us-east-2.amazonaws.com/images/Nairobi_Giraffe_2.jpg' 
            id='giraffe' alt='Nairobi'/>
            {/* <ServicePresentation/> */}
        </div>
    )
}