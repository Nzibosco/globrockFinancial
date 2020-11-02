import React from 'react';
import Footer from '../footerComponent/FooterComponent';
import ImageComp from '../imageComponent/ImageComponent';
import Intro from '../intro/IntroComponent';
import ButtonAppBar from '../navbarComponent/Navbar';
import NewsLetter from '../newsLetterComponent/NewsLetterComp';
import Services from '../serviceComponent/ServicesComp';
import { ServicePresentation } from '../servicePresentationComp/ServicePresentation';





export class HomepageComponent extends React.Component {
    
    super(props:any){

    }


    render(){
        return(
            <>
                <ButtonAppBar/>
                <Intro/>
                <ImageComp/>
                <ServicePresentation/>
                <Services/>
                <NewsLetter/>
                <Footer/>
            </>
        )
    }
}