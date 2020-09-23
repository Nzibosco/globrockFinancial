import React from 'react';
import Intro from '../intro/IntroComponent';
import ButtonAppBar from '../navbarComponent/Navbar';





export class HomepageComponent extends React.Component {
    
    super(props:any){

    }


    render(){
        return(
            <>
                <ButtonAppBar/>
                <Intro/>
            </>
        )
    }
}