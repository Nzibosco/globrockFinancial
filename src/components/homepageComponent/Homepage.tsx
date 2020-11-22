import React from 'react';
import Footer from '../footerComponent/FooterComponent';
import ImageComp from '../imageComponent/ImageComponent';
import Intro from '../intro/IntroComponent';
import Navbar from '../navbarComponent/Navbar';
import Services from '../serviceComponent/ServicesComp';
import { ServicePresentation } from '../servicePresentationComp/ServicePresentation';





export class HomepageComponent extends React.Component {
    
    super(props:any){

    }


    render(){
        return(
            <>
                <Intro/>
                <ImageComp/>
                <ServicePresentation/>
                <Services/>
                <Footer/>
            </>
        )
    }
}