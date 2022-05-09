import React, { useState } from 'react'
import SideBar from '../components/Sidebar/SideBar'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import InfoSection from '../components/InfoSection/InfoSection'
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footer'
import Recommendation from '../components/Recommendation/Recommendation'
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Header />
            <InfoSection {...homeObjOne} />
            <Recommendation/>
            {/* <InfoSection {...homeObjTwo} /> */}
            <Services />
            <Footer />
        </>
    )
}

export default Home
