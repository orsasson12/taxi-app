import React from 'react'
import { Link as LinkS } from 'react-scroll'
import classes from './Footer.module.css'
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaMailBulk } from 'react-icons/fa'
function Footer() {

    return (
        <footer>
            <div className={classes.container}>
                <div className={classes.leftSide}>
                    <p>
                        אז רוצים גם אתם לנסוע איתנו בסטייל?
                        תנסו, מקסימום תרוויחו .</p>
                </div>
                <div className={classes.center}>
                    <h2>Quick Links</h2>

                    <ul >
                        <li >
                            <LinkS to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}

                            >About</LinkS>
                        </li>
                        <li>
                            <LinkS to="discover"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Customers</LinkS>
                        </li>
                        <li>
                            <LinkS to="services"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Services</LinkS>
                        </li>
                        
                        <div className={classes.social}>
                        <li >
                            <a href='https://www.facebook.com/'><FaFacebook /></a>
                        </li>
                        <li>
                            <a href='https://www.facebook.com/'><FaInstagram/></a>
                        </li>
                        </div>
                    </ul>
                </div>
                <div className={classes.rightSide}>
                    <h2>Contact Us</h2>
                <ul>
                    <li>
                    <FaMapMarkerAlt style={{marginRight:'5px'}}/> 
                            <span>ראשון לציון</span>
                    
                    </li>
                    <li>
                            <FaPhoneAlt style={{ marginRight: '5px' }}/> 
                            <span> 0524673370</span>
                           
                    </li>

                    <li>
                            <FaMailBulk style={{ marginRight: '5px' }}/>
                            <span> taxi@gmail.com</span>
                            
                    </li>
                </ul>
                </div>
            </div>
            <p style={{textAlign:'center', fontSize:'15px'}}>Copyright &copy; {new Date().getFullYear()} Ron & Shay</p>
        </footer>











    )
}

export default Footer
