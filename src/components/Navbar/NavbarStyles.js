import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const Nav = styled.nav`

    position: fixed;
    top: 0;
    width: 100%;
    background-color:  rgba(22,25,44, 0.7);
    backdrop-filter: blur(10px);
    height: 80px;
    // margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    // position: sticky;
    top: 0;
    z-index: 10;
    
    border-bottom: 2px solid rgb(25,25,42);

    @media screen and (max-width: 960px) {

        transition: 0.8s all ease;
       
    }
`;

export const NavContainer = styled.div`

    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1300px;
    
`

export const NavLogo = styled(LinkR)`

    color: #fff;
    justify-self: flex-start;
    font-size: 2rem;
    display: flex;
    cursor: pointer;
    align-items: center;
    // margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

`;

export const MobileIcon = styled.div`

    display: none;
    // z-index: 1000;

    @media screen and (max-width: 768px) {

        display: block;
        position: absolute;
        top: 5%;
        right: 0;
        font-size: 1.8rem;
        transform: translate(-100%, 60%);
        cursor: pointer;
        color: #fff;
        z-index: 1000000;
    }
`

export const NavMenu = styled.ul`

    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 22px;
    

    @media screen and (max-width: 768px) {

        display: none;
    }
`

export const NavItem = styled.li`

    height: 80px;
    

`

export const NavLinks = styled(LinkS)`

    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 17px;

    &:hover {

        color: rgb(52,201,157);
        border-bottom: 1px solid #01bf71;
    }

   
`

export const NavBtn = styled.nav`

    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {

        display: none
    }
`

export const NavBtnLink = styled(LinkR)`

    border-radius: 50px;
    background: rgb(77, 102, 235);
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {

        transition: all 0.2s ease-in-out;
        background: rgb(57, 82, 215);
        color: #010606;
        text-decoration: none;
    }
`
