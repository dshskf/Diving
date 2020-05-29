import React, { Component } from 'react'
import { LinkMenu, LinkItem, RouteButton } from './style'

class LinkPanel extends Component {
    render() {
        const link_arr = ["Courses", "Travel", "About", "Sign-up"]
        return (
            <LinkMenu>
                {
                    link_arr.map((data, index) => {
                        return (
                            <LinkItem key={index} signButton={index === link_arr.length - 1 ? true : false}>
                                <RouteButton signButton={index === link_arr.length - 1 ? true : false}>{data}</RouteButton>
                            </LinkItem>
                        )
                    })
                }
            </LinkMenu>
        )
    }
}

export default LinkPanel