import React, { Component } from 'react';
import { trainer_data } from './data'

import {
    TrainerContainer,
    Box,
    BoxDetail,
    BoxImage,
    BoxLink,
    PrevButton,
    NextButton
} from './style'

class TrainerComponent extends Component {
    render() {
        const { name, price, image, place } = trainer_data
        return (
            <TrainerContainer>
                <PrevButton />
                {
                    name.map((data, index) => {
                        if (index < 5) {
                            return (
                                <Box>
                                    <BoxImage>
                                        <img src={require(`../../../Assets/Image/Home/${image[index]}`)} alt="img" />
                                    </BoxImage>
                                    <BoxDetail>
                                        <h1>{data}</h1>
                                        <h3>$ {price[index]}/month</h3>
                                        <p>{place[index]}</p>
                                    </BoxDetail>
                                    <BoxLink>
                                        <a href="#">More....</a>
                                    </BoxLink>
                                </Box>
                            )
                        }
                    })

                }
                <NextButton />
            </TrainerContainer>
        )
    }
}

export default TrainerComponent