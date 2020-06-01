import React, { useState } from 'react'

import NavigationSubComponent from './navigation/navigation'
import AdsSubComponent from './ads/ads'

import { SlideHandler } from '../../../Contexts/Home/home.context'
import { place_data } from './data'

import {
    OffersContainer,
    OffersContainerPreview,
    ImagePreviewBox,
    BoxLinkContainer,
    BoxLink
} from './style'

const OffersComponent = () => {
    // const { index } = useContext(SlideHandler)

    // const [places, setPlaces] = useState(place_data)
    // const [placesAds, setPlacesAds] = useState(place_ads)
    const [index, setIndex] = useState(0)
    const { header, quotes, picture} = place_data

    const tooglePrev = () => {
        const x = index === 0 ? header.length - 1 : index - 1
        return setIndex(x)
    }
    const toogleNext = () => {
        const x = index === header.length - 1 ? 0 : index + 1
        return setIndex(x)
    }

    return (
        <OffersContainer>
            <OffersContainerPreview imgName={picture[index]}>
                <ImagePreviewBox>
                    <h1>{header[index]}</h1>
                    <p>{quotes[index]}</p>
                    <BoxLinkContainer>
                        <BoxLink href="#">Login</BoxLink>
                        <BoxLink href="#">Take a tour...</BoxLink>
                    </BoxLinkContainer>
                </ImagePreviewBox>

                <SlideHandler.Provider value={
                    { index }
                }>
                    <AdsSubComponent />
                </SlideHandler.Provider>
            </OffersContainerPreview>

            <SlideHandler.Provider value={
                { index, tooglePrev, toogleNext }
            }>
                <NavigationSubComponent />
            </SlideHandler.Provider>

        </OffersContainer>
    )
}


export default OffersComponent