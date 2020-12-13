import React from 'react';
import Footer from '../footerComponent/FooterComponent';
import ImageComp from '../imageComponent/ImageComponent';
import Intro from '../intro/IntroComponent';
import Navbar from '../navbarComponent/Navbar';
import Pitch from '../pitchComponent/Pitch';
import Quote from '../quoteComponent/Quote';
import Services from '../serviceComponent/ServicesComp';
import { ServicePresentation } from '../servicePresentationComp/ServicePresentation';





export class HomepageComponent extends React.Component {
    
    super(props:any){

    }


    render(){
        return(
            <div id = 'home'>
                <Intro/>
                <Pitch/>
                <ServicePresentation/>
                <Quote/>
                {/* <Services/> */}
                <Footer/>
            </div>
        )
    }
}