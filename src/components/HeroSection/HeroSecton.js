import React from "react";

const HeroSection = () => {

    return (

        <HeroContainer id="home">
            <HeroBackground>
                <VideoBackground autoPlay loop muted src={Video} type="video/mp4">

                </VideoBackground>
            </HeroBackground>
        </HeroContainer>
    )

}

export default HeroSection