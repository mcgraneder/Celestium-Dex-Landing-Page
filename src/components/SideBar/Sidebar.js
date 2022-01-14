import React from "react";
import { SideBarContainer,
        Icon,
        CloseIcon,
        SideBarWrapper, 
        SideBarMenu, 
        SideBarLink, 
        SideBarBtnWrap, 
        SideBarBtn
} from "./SideBarStyles";

const SideBar = ({isOpen, toggle}) => {


    return (

        <SideBarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about">
                        About
                    </SideBarLink>
                    <SideBarLink to="discover">
                        Discover
                    </SideBarLink><SideBarLink to="services">
                        Services
                    </SideBarLink><SideBarLink to="sign up">
                        Sign Up
                    </SideBarLink>
                </SideBarMenu>
                <SideBarBtnWrap>
                    <SideBarBtn to="/signup">Sign In</SideBarBtn>
                </SideBarBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar