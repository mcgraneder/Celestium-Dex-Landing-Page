import React, { useState } from "react";
import SideBar from "../SideBar/Sidebar";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSecton";
import InfoSection from "../InfoSection/InfoSecton";
import { HomeObjOne } from "../InfoSection/Data";

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
            <InfoSection {...HomeObjOne}></InfoSection>
        </>
    )

}

export default Home