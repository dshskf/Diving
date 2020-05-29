import React, { useState } from 'react'
import { LogoImg, LogoNav } from './style'
import { ShowSideBar } from '../../../Contexts/NavBar/navbar.context'
import SideBar from '../SideBar/sidebar'

const LogoPanel = () => {
    const [hidden, setHidden] = useState(false)
    const toogleHidden = () => setHidden(!hidden)
    console.log(hidden)
    return (
        <React.Fragment>
            <ShowSideBar.Provider value={{ hidden, toogleHidden }}>
                {
                    hidden ?
                        <SideBar />
                        :
                        null
                }
            </ShowSideBar.Provider>

            <LogoNav>
                <svg className="bi bi-list" width="2rem" height="2rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" onClick={toogleHidden}>
                    <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
                <LogoImg src={require('../../../Assets/Image/NavBar/logo.png')} />
            </LogoNav>
        </React.Fragment>
    )
}





export default LogoPanel