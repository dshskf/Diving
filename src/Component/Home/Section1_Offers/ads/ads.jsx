import React, { useContext } from 'react'
import { AdsContainer, AdsBox, AdsDetail, AdsImage } from './style'
import { place_ads } from '../data'
import { SlideHandler } from '../../../../Contexts/Home/home.context'

const isEndOfArray = (input, index, arr_length) => {

    if (index === arr_length) {
        return [input[0], input[1]]
    }
    if (index + 1 === arr_length && index === 1) {
        return [input[2], input[0]]
    }
    return [input[index + 1], input[arr_length]]
}

const AdsSubComponent = () => {
    const { index } = useContext(SlideHandler)
    const { header, quotes, picture } = place_ads

    const end = header.length - 1

    const ads_data = {
        header: isEndOfArray(header, index, end),
        quotes: isEndOfArray(quotes, index, end),
        picture: isEndOfArray(picture, index, end)
    }


    return (
        <AdsContainer>
            {
                ads_data.header.map((data, index) => (
                    <AdsBox key={index}>
                        <AdsImage src={require(`../../../../Assets/Image/Home/${ads_data.picture[index]}`)} />
                        <AdsDetail>
                            <h1>{data}</h1>
                            <p>{ads_data.quotes[index]}</p>
                            <a href="www.google.com">More...</a>
                        </AdsDetail>
                    </AdsBox>
                ))
            }
        </AdsContainer>
    )
}


export default AdsSubComponent