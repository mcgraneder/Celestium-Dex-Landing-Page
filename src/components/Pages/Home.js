import React, { useState } from "react";
import SideBar from "../SideBar/Sidebar";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSecton";
import InfoSection from "../InfoSection/InfoSecton";
import { HomeObjOne, HomeObjTwo } from "../InfoSection/Data";
import DiscoverSection from "../DiscoverSection/DiscoverSection";
import StyledMarquee from "../Marquee/Marquee";

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {

        setIsOpen(!isOpen);
    }

    return (

        <>
           
            <SideBar isOpen={isOpen} toggle={toggle}></SideBar>
            <Navbar toggle={toggle}></Navbar>
            <HeroSection></HeroSection>
            <StyledMarquee></StyledMarquee>
            <InfoSection {...HomeObjOne}></InfoSection>
            <DiscoverSection {...HomeObjTwo}></DiscoverSection>
        </>
    )

}

export default Home