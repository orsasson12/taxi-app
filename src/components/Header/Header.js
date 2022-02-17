import React from 'react'
import bgVideo from '../../assets/videos/pexels-taro-5744341.mp4'
import { HeaderBg, HeaderContainer, VideoBg, HeaderH1, HedaerContent, HeaderP } from './HeaderElements'
const Header = () => {
    return (
        <HeaderContainer>
            <HeaderBg>
                <VideoBg autoPlay loop muted src={bgVideo} type='video/mp4' />
            </HeaderBg>
            <HedaerContent>
                <HeaderH1>The Best Way To Move In The City </HeaderH1>
                <HeaderP>
                   RonShay Productions
                </HeaderP>
            </HedaerContent>
        </HeaderContainer>
    )
}

export default Header
