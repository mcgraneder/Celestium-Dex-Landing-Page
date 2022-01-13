import styled from "styled-components";
import { Link } from "react-scroll"

export const Button = styled(Link)`

    border-radius: 50px;
    background: ${({primary}) => (primary ? `rgb(77, 102, 235)` : `010606`)};
    white-space: nowrap;
    padding: ${({big}) => (big ? `14px 48px` : `12px 30px`)};
    color: ${(dark) => (dark ? `#010606` : `#fff`)};
    font-size: ${(fontBig) => (fontBig ? `25px` : `16px`)};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    // z-index: 100000000;

    &:hover {
        background: ${(primary) => (primary ? `#fff` : `rgb(77, 102, 235)`)};
        transition: all 0.2s ease-in-out;
    }
`