import React from 'react'
import NavBar from '../../Component/Navbar/navbar'
import HomeComponent from '../../Component/Home/home.component'

class HomePage extends React.Component{
    render(){
        return(
            <React.Fragment>
                <NavBar></NavBar>                
                <HomeComponent></HomeComponent>
            </React.Fragment>
        )
    }
}

export default HomePage