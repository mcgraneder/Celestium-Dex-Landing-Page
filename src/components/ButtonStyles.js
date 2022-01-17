import styled from "styled-components";
import { Link } from "react-scroll"

export const Button = styled(Link)`

    border-radius: 10px;
    // margin-right: 80px;
    background: ${(props) => (props.primary ? `rgb(57, 82, 215)` : `rgb(22,181,127)`)};
    white-space: nowrap;
    height: 50px;
    padding: ${({big}) => (big ? `14px 48px` : `12px 30px`)};
    width: ${({big}) => (big ? `100px` : `210px`)};
    color: ${(dark) => (dark ? `#fff` : `#fff`)};
    font-size: ${(fontBig) => (fontBig ? `20px` : `16px`)};
    outline: none;
    // border: none;
    cursor: pointer;
    display: flex;
    flex-direction: space-between;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    // z-index: 100000000;

    &:hover {
        background: ${(props) => (!props.primary ? `rgb(52,201,157)` : `rgb(77, 92, 235)`)};
        transition: all 0.2s ease-in-out;
    }
`