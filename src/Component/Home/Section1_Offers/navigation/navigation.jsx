import React, { useContext } from 'react'
import {
    PageInfo,
    PageInfoData,
    LeftArrowButton,
    RightArrowButton
} from './style'

import { SlideHandler } from '../../../../Contexts/Home/home.context'
import { place_title } from '../data'


const NavigationSubComponent = () => {
    const { index, tooglePrev, toogleNext } = useContext(SlideHandler)
    return (
        <PageInfo>
            <LeftArrowButton onClick={tooglePrev} />
            <PageInfoData>
                <h1>0{index + 1}</h1>
                <p>{place_title[index]}</p>
            </PageInfoData>
            <RightArrowButton onClick={toogleNext} />
        </PageInfo>
    )
}

export default NavigationSubComponent