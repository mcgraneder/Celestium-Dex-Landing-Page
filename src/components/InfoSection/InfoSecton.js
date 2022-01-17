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
         Column3, 
         ImgWrapper, 
         HeroContent,
         HeroH1,
         HeroP,
         IconWrapper,
         Container,
         Img} from "./InfoSectionStyles";
import candle from "../assets/svg/Ren1.svg"
import Ren2 from "../assets/svg/Ren2.svg"
import Ren3 from "../assets/svg/Ren3.svg"
import img1 from "../assets/svg/trading.svg"
const InfoSection = ({lightBg, imgStart, id, topLine, headline, description, buttonLabel, img, alt, primary, dark, lightText, darkText}) => {

    return (

        <>
            <InfoContainer lightBg={lightBg} id={id}>
            <HeroContent>
                <HeroH1>
                    Trading Without Limits
                </HeroH1>
                
                <HeroP>
                    Unlike many Dexes that exist today, Celestium allows users to realise the full potneital of trading. Here you can margin trade, create limit orders, stop limits and more, <br></br><br></br>all with a responsive UI that has lightning quick price feeds so that YOU can get the most out of your trading expereince
                </HeroP>
                {/* <ImgWrapper>
                                <Img src={candle} alt={alt}></Img>
                            </ImgWrapper> */}
            </HeroContent>
            <IconWrapper>
                    {/* <Column1></Column1>
                    <Column2></Column2>
                    <Column3></Column3> */}
                    <Container>
                         <ImgWrapper>
                            <img src={candle} height="90px"></img>
                        </ImgWrapper>
                        <TextWrapper>
                                
                                <SubTitle darkText={darkText}>Execute margin, limits, stop limits orders and more with zero fees</SubTitle>
                               
                            </TextWrapper>
                    </Container>
                    <Container>
                        <ImgWrapper>
                            <img src={Ren2} height="90px"></img>
                        </ImgWrapper>
                        <TextWrapper>
                                
                                <SubTitle darkText={darkText}>Responsive Charts with up-to-date price feeds all day everyday</SubTitle>
                               
                            </TextWrapper>
                    </Container>
                    <Container>
                        <ImgWrapper>
                            <img src={Ren3} height="90px"></img>
                        </ImgWrapper>
                        <TextWrapper>
                                
                                <SubTitle darkText={darkText}>Email notifications so you dont have to constantly watch prices</SubTitle>
                               
                            </TextWrapper>
                    </Container>
                </IconWrapper>
                {/* <InfoWrapper>
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
                </InfoWrapper> */}
            </InfoContainer>
        </>
    )

}

export default InfoSection