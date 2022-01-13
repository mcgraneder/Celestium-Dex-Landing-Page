import React, { useState } from "react";
import SideBar from "../SideBar/Sidebar";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSecton";

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {

        setIsOpen(!isOpen);
    }

    return (

        <>
            <HeroSection></HeroSection>
            <SideBar isOpen={isOpen} toggle={toggle}></SideBar>
            <Navbar style={{position: "absolute"}} toggle={toggle}></Navbar>
            
        </>
    )

}

export default Home