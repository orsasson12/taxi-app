import React from 'react'
import {
    ImgWrap,
    Img,
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    TextLink
} from './InfoSectionElements'
const InfoSection = ({ linktext, lightText, id, lightBg, imgStart, topLine, headLine, darkText, description, img, alt }) => {
    
    return (
        <main>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <TextLink to="/projects" linktext={linktext}>Click To See Our Projects {'-->'}</TextLink>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </main>
    )

}

export default InfoSection
