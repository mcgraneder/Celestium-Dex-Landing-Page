import styled from "styled-components";
import { Link } from "react-scroll"

export const Button = styled(Link)`

    border-radius: 50px;

    background: ${({primary}) => (primary ? `rgb(57, 82, 215)` : `010606`)};
    white-space: nowrap;
    border: 1px solid #f76fb1;
    padding: ${({big}) => (big ? `14px 48px` : `12px 30px`)};
    width: ${({big}) => (big ? `100px` : `200px`)};
    color: ${(dark) => (dark ? `#010606` : `#fff`)};
    font-size: ${(fontBig) => (fontBig ? `25px` : `16px`)};
    outline: none;
    // border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    // z-index: 100000000;

    &:hover {
        background: ${(primary) => (primary ? `#f76fb1` : `#f76fb1`)};
        transition: all 0.2s ease-in-out;
    }
`