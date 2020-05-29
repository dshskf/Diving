import React from 'react'

import LinkPanel from './Link/link'
import LogoPanel from './Logo/logo'
import SearchBoxPanel from './SearchBox/search-box'

import { NavBarContainer } from './style'

class NavBar extends React.Component {
    render() {
        return (
            <NavBarContainer>
                <LogoPanel />
                <SearchBoxPanel />
                <LinkPanel />
            </NavBarContainer>
        )
    }
}

export default NavBar