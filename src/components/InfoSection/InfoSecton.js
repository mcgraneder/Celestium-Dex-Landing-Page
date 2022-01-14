import React, { useState } from "react";
import { Button } from "../ButtonStyles";
import { InfoContainer,
         InfoWrapper,
         InfoRow,
         Column1,
         TextWrapper,
         TopLine,
         Heading,
         SubTitle,
         BtnWrapper,
         Column2, 
         ImgWrapper, 
         Img} from "./InfoSectionStyles";
import { HeroButtonWrapper } from "../HeroSection/HeroSectionStyles";
import img1 from "../assets/svg/trading.svg"
const InfoSection = ({lightBg, imgStart, id, topLine, headline, description, buttonLabel, img, alt, primary, dark, lightText, darkText}) => {

    return (

        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <SubTitle darkText={darkText}>{description}</SubTitle>
                                <BtnWrapper>
                                    <Button to="home" smoth={true} duration={500} spy={true} exact="true" primary={primary ? 1 : 0} dark={dark ? 1 : 0}>{buttonLabel}</Button>
                                </BtnWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrapper>
                                <Img src={img1} alt={alt}></Img>
                            </ImgWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )

}

export default InfoSection