import styled from "styled-components";

export const InfoContainer = styled.div`

   background: rgba(22,25,44, 0.6);
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100%;
    position: relative;
    z-index: 1;
    border-bottom: 2px solid rgb(25,25,42);
`

export const InfoWrapper = styled.div`

    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    // padding-right: 40px;
    justify-content: center;
`

export const InfoRow = styled.div`

    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
   
    grid-template-areas: ${(props) => props.imgStart ? `"col2 col1"` : `"col1 col2"`};

    @media screen and (max-width: 768px) {

        grid-template-areas: ${(props) => props.imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
    }
`

export const Column1 = styled.div`

    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

`

export const Column2 = styled.div`

    margin-bottom: 15px;
    padding: 0 15px;
    // padding-left: 80px;
    // max-width: 1100px;
    grid-area: col2;
    
`

export const TextWrapper = styled.div`

    max-width: 580px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`

    color: #01bf71;
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`

    margin-bottom: 24px;
    font-size: 50px;
    line-height: 1.1;
    font-weight: 600;
    color: ${(props) => props.lightText ? "#f7f8fa" : "#111427"};

    @media screen and (max-width: 480px) {

        font-size: 32px;
    }

`

export const SubTitle = styled.p`

    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${(props) => props.darkText ? "#010606" : "#fff"}

`

export const BtnWrapper = styled.div`

    display: flex;
    justify-content: left;
`

export const ImgWrapper = styled.div`

    max-width: 600px;
    height: 100%
`

export const Img = styled.img`

    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`