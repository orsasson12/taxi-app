import React from 'react'
import Icon1 from '../../assets/images/undraw_fast_car_p-4-cu.svg'
import Icon2 from '../../assets/images/undraw_fast_car_p-4-cu.svg'
import Icon3 from '../../assets/images/undraw_fast_car_p-4-cu.svg'
import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH1,
    ServicesH2,
    ServicesP
} from './ServicesElements'
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Experience</ServicesH2>
                    <ServicesP>We have 30 years of Experience</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>best mans</ServicesH2>
                    <ServicesP>asdasdasdasd</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>asdasdasd</ServicesH2>
                    <ServicesP>asdasdasdasd</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
