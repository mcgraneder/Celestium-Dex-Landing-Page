import styled from "styled-components";
import Marquee  from "react-fast-marquee"

export const MarqueeContainer = styled.div`

    
    // width: 100%;
    // background-color:  rgba(22,25,44, 1);
    // height: 80px;
    // // margin-top: -80px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // z-index: 10;
    background: rgba(26,26,39, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
    height: 80px;
    position: relative;
    z-index: 1;


`

export const MarqueeWrapper = styled.span`

    margin-left: 50px;
    margin-right: 50px;
    justify-content: space-between;
    line-height: 30px;
`

export const StyledMarq = styled(Marquee)`


background: #0c0c0c;
`