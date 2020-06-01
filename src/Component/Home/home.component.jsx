import React, { Component } from 'react'
import OffersComponent from './Section1_Offers/offers'
import BenefitComponent from './Section2_Benefit/benefit'
import TrainerComponent from './Section3_Trainer/trainer'

class HomeComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <OffersComponent />
                <BenefitComponent />
                <TrainerComponent />
            </React.Fragment>

        )
    }
}

export default HomeComponent