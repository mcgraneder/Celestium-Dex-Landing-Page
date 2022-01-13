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
         ArrowRight 
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
                <VideoBackground autoPlay loop muted src={Video} type="video/mp4">
                </VideoBackground>
            </HeroBackground>
            <HeroContent>
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
                    {/* <NavBtn>
                        <NavBtnLink to="/signup">Sign Up</NavBtnLink>
                    </NavBtn> */}
                </HeroButtonWrapper>
            </HeroContent>
        </HeroContainer>
    )

}

export default HeroSection