import React, { useState } from "react";
import Video from "../assets/video4.mp4"
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
         TopLine 
} from "./HeroSectionStyles";
import { NavBtn, NavBtnLink } from "../Navbar/NavbarStyles";

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {

        setHover(!hover);
    }

    return (

        <HeroContainer id="home">
            <HeroBackground>
                <OverLay></OverLay>
                <VideoBackground autoPlay loop muted src={Video} type="video/mp4">
                </VideoBackground>
            </HeroBackground>
            <HeroContent>
                <TopLine >Premium DEX</TopLine>
                <HeroH1>
                    Celestium Descentralised Crypto Exchange
                </HeroH1>
                <HeroP>
                    Sign up for a new account to start trading with all of the top crypto currencies in the market today.
                </HeroP>
                <HeroButtonWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Trade {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroButtonWrapper>
            </HeroContent>
        </HeroContainer>
    )

}

export default HeroSection