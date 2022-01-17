import React, { useState } from "react";
import Video from "../assets/video.mp4"
import { Button } from "../ButtonStyles";
import { HeroContainer, 
         HeroBackground, 
         VideoBackground,
         HeroContent,
         HeroH1,
         HeroP,
         HeroButtonWrapper,
         ArrowForward,
         ArrowRight, 
         OverLay,
         TopLine,
         ImageContainer,
         ImageWrapper 
} from "./HeroSectionStyles";
import { NavBtn, NavBtnLink } from "../Navbar/NavbarStyles";
import coinbase from "../assets/svg/coinbase1.png"
const HeroSection = () => {

    const [hoverRight, setHoverRight] = useState(false);
    const [hoverLeft, setHoverLeft] = useState(false);

    const onHoverLeft = () => {

        setHoverLeft(!hoverLeft);
    }

    const onHoverRight = () => {

        setHoverRight(!hoverRight);
    }

    return (

        <HeroContainer id="home">
            <HeroBackground>
                <OverLay></OverLay>
                <VideoBackground autoPlay loop muted src={Video} type="video/mp4">
                </VideoBackground>
            </HeroBackground>
            <HeroContent>
                <TopLine >Celestium-DEX</TopLine>
                <HeroH1>
                    Perpetuals, Decentralised
                </HeroH1>
                <HeroP>
                    Celestium is an advanced decentralised protocol that allows you to trade the top crypto assets with zero fees. Create an account and get started using outr exchange below.
                </HeroP>
                <HeroButtonWrapper>
                    <Button to="signup" onMouseEnter={onHoverLeft} onMouseLeave={onHoverLeft} primary={true} dark="true">
                        Trade {hoverLeft ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                    <Button to="about" onMouseEnter={onHoverRight} onMouseLeave={onHoverRight} primary={false} dark="true">
                        Documentation {hoverRight ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroButtonWrapper>
            </HeroContent>
           
            <ImageContainer>
                <ImageWrapper src={coinbase}>
                </ImageWrapper>
            </ImageContainer>
        </HeroContainer>
    )

}

export default HeroSection