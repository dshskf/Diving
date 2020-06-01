import React, { Component } from 'react'
import { benefit_data } from './data'

import { BenefitContainer, Header, Content, SubContent } from './style'

class BenefitComponent extends Component {
    render() {
        const { header, subHeader, picture, content } = benefit_data

        return (
            <BenefitContainer>
                <Header>
                    <p>More than just a courses</p>
                    <h1>It's a Paradise!</h1>
                </Header>

                <Content>
                    {
                        header.map((data, index) => {
                            return (
                                <SubContent>
                                    <img src={require(`../../../Assets/Image/Home/${picture[index]}`)} alt="img" />
                                    <h1>{data}</h1>
                                    <h3>{subHeader[index]}</h3>
                                    <p>{content}</p>
                                </SubContent>
                            )
                        })
                    }
                </Content>
            </BenefitContainer>
        )
    }
}

export default BenefitComponent