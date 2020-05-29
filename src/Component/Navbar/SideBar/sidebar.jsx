import React, { useContext, useState } from 'react'
import { ShowSideBar } from '../../../Contexts/NavBar/navbar.context'

import {
    SideBarContainer,
    SideBarItem,
    ItemButton,
    SideBarBottomImageBox,
    SideBarBottomImage,
    DimmedArea
} from './style'



const SideBar = () => {
    const links = ["Home", "Travel", "About", "Sign-Up"]
    const { toogleHidden } = useContext(ShowSideBar)
    const [hover, setHover] = useState(false)
    const toogleHover = () => setHover(!hover)

    return (
        <React.Fragment>
            <SideBarContainer>
                <img src={require('../../../Assets/Image/NavBar/logo.png')} alt="Pic" />
                {
                    links.map((data, index) => {
                        return (
                            <SideBarItem key={index} onMouseOver={toogleHover} onMouseLeave={toogleHover}>
                                <ItemButton isHover={hover}>{data}</ItemButton>
                            </SideBarItem>
                        )
                    })
                }

                <SideBarBottomImageBox>
                    <SideBarBottomImage src={require('../../../Assets/Image/NavBar/s_bottom.png')} />
                </SideBarBottomImageBox>
            </SideBarContainer>
            <DimmedArea onClick={toogleHidden}></DimmedArea>
        </React.Fragment>
    )
}


export default SideBar