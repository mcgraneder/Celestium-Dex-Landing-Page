import React from "react"
import { FaBars } from "react-icons/fa"
import { Nav, 
    NavContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink 
} from "./NavbarStyles";

const Navbar = ({toggle}) => {


    return (

        <>
            <Nav>
                <NavContainer>
                    <NavLogo to="/">
                        CELESTIUM
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="Services">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signup">Sign Up</NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar;