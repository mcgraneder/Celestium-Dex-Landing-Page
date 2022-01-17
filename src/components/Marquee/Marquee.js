import React from "react";
import Marquee from "react-fast-marquee"
import { MarqueeContainer } from "./MarqueeStyled";
import oneInch from "../assets/svg/oneinch.svg"
import { StyledMarq } from "./MarqueeStyled";
import { MarqueeWrapper } from "./MarqueeStyled";
import coinbase from "../assets/svg/coinbase3.svg"
import coingecko from "../assets/svg/coingecko.svg"
import binance from "../assets/svg/binance.svg"
import badger from "../assets/svg/badger.svg"



const StyledMarquee = () => {

    return (

        <>
        <MarqueeContainer>
            {/* <marquee loop="0" speed={100} play="false"> */}
                <MarqueeWrapper>
                    <img src={oneInch} height="60px"></img>
                </MarqueeWrapper>
                <MarqueeWrapper>
                    <img src={binance} height="40px"></img>
                </MarqueeWrapper>
                <MarqueeWrapper>
                    <img src={coinbase} height="40px"></img>
                </MarqueeWrapper>
                <MarqueeWrapper>
                    <img src={coingecko} height="50px"></img>
                </MarqueeWrapper>
                <MarqueeWrapper>
                    <img src={badger} height="50px"></img>
                </MarqueeWrapper>
            {/* </marquee> */}
        </MarqueeContainer>

    </>
    )
}

export default StyledMarquee;