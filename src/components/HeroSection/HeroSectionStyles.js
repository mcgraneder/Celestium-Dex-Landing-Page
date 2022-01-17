import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md"

export const HeroContainer = styled.div`

    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    margin-bottom: 120px;
    border-bottom: 2px solid rgb(25,25,42);
    
`

export const HeroBackground = styled.div`

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    @media screen and (max-width: 768px) {

        height: 100%;
    }
`

export const VideoBackground = styled.video`

    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`

    margin-top: 150px;
    margin-left: 50px;
    z-index: 3;
    max-width: 550px;
    position: absolute;
    left: 0;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: left;
`

export const ImageContainer = styled.div`

    height: 50%;
    width: 1200px;
    color: #fff;
    z-index: 100;
   
   
`

export const ImageWrapper = styled.img`

    position: absolute;
    right: 0;
    // margin-top: 20px;
    // margin-right: 50px;
    height: 580px;
    overflow: visible;
`


export const HeroH1 = styled.h1`

    color: #fff;
    font-size: 70px;
    text-align: left;
    font-weight: bold;

    @media screen and (max-width: 768px) {

        font-size: 40px;
    }

    @media screen and (max-width: 480px) {

        font-size: 32px;
    }
`
export const OverLay = styled.div`

height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 3;
    background:  rgba(26,26,39, 0.6);
`

export const TopLine = styled.p`

    color: rgb(22,181,127);
    font-size: 25px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    margin-top: 30px;
    padding-left: 5px;

    text-align: left;
`


export const HeroP = styled.p`

    margin-top: 30px;
    margin-bottom: 30px;
    color: #fff;
    font-size: 20px;
    text-align: left;
    max-width: 800px;

    @media screen and (max-width: 768px) {

        font-size: 24px;
    }

    @media screen and (max-width: 480px) {

        font-size: 18px;
    }
`

export const HeroButtonWrapper = styled.div`

    margin-top: 32px;
    display: flex;
    flex-direction: space-between;
    justify-content:space-between;
    align-items: left;
    z-index: 100;
    margin-right: 30px;
`

export const ArrowForward = styled(MdArrowForward)`


    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`


    margin-left: 8px;
    font-size: 20px;
`