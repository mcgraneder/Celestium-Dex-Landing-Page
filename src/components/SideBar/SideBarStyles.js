import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SideBarContainer = styled.aside`

    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: rgba(26,26,39, 1);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${(props) => (props.isOpen ? `100%` : `0`)};
    top:  ${(props) => (props.isOpen ? `0` : `-100`)};

    @media screen and (max-width: 780px) {

        z-index: 1000;
    }
    
`

export const CloseIcon = styled(FaTimes)`

    color: #fff;
`

export const Icon = styled.div`

    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SideBarWrapper = styled.div`

    color: #fff;

`

export const SideBarMenu = styled.ul`

    display: grid;
    grid-template-column: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {

        grid-template-rows: repeat(6, 60px);
    }

`

export const SideBarLink = styled(LinkS)`

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;
   

    &:hover {
        color: rgb(77, 102, 235);
        transition: 0.2s ease-in-out;
        // background: green;
    }
`
export const SideBarBtnWrap = styled.div`

    display: flex;
    justify-content: center;
`

export const SideBarBtn = styled(LinkR)`

    border-radius: 50px;
    background: rgb(77, 102, 235);
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    outline: none;
    cursor: pointer;
    border: none;
    transition: all 0.2s eas-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s eas-in-out;
        background: #010606;
    }
`