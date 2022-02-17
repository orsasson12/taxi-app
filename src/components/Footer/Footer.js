import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
    FooterTitle    

} from "./FooterElements";
import { Link as LinkS } from 'react-scroll'
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaMailBulk } from 'react-icons/fa'
const Footer = () => {
    return (
        <Box>
            <FooterTitle>
                .אז רוצים גם אתם לנסוע איתנו בסטייל?
                תנסו, מקסימום תרוויחו
            </FooterTitle>
            <Container>
                <Row>
                    <Column>
                        <Heading>Quick Links</Heading>
                        <FooterLink > <LinkS to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}

                        >About</LinkS></FooterLink>
                        <FooterLink > <LinkS to="discover"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                        >Customers</LinkS></FooterLink>
                        <FooterLink > <LinkS to="services"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                        >Services</LinkS></FooterLink>
                    </Column>
                    {/* <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">Writing</FooterLink>
                        <FooterLink href="#">Internships</FooterLink>
                        <FooterLink href="#">Coding</FooterLink>
                        <FooterLink href="#">Teaching</FooterLink>
                    </Column> */}
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#" > <FaMapMarkerAlt style={{ marginRight: '5px' }} />
                            <span>ראשון לציון</span></FooterLink>
                        <FooterLink href="tel:0524673370"> <FaPhoneAlt style={{ marginRight: '5px' }} />
                            <span> 0524673370</span></FooterLink>
                        <FooterLink href="mailto:orsasson72@gmail.com"> <FaMailBulk style={{ marginRight: '5px' }} />
                            <span> taxi@gmail.com</span></FooterLink>

                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href='https://www.facebook.com/'>

                             <FaFacebook /> Facebook

                        </FooterLink>
                        <FooterLink href='https://www.facebook.com/'>

                            <FaInstagram /> Instagram

                        </FooterLink>
                    </Column>
                </Row>
            </Container>
            <p style={{ paddingTop:'10px',color:'#fff',textAlign: 'center', fontSize: '20px' }}>Copyright &copy; {new Date().getFullYear()} רון שי הפקות</p>
        </Box>
    );
};
export default Footer;