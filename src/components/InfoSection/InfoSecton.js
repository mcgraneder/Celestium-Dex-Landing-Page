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
import img1 from "../assets/svg/savings.svg"
const InfoSection = ({lightBg, imgStart, id, topLine, headline, description, buttonLabel, img, alt}) => {

    return (

        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading>{headline}</Heading>
                                <SubTitle>{description}</SubTitle>
                                <BtnWrapper>
                                    <Button to="home">{buttonLabel}</Button>
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