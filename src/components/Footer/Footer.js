import React from 'react'
import { Link as LinkS } from 'react-scroll'
import classes from './Footer.module.css'
function Footer() {
    return (
        <footer className={classes.footer}>
            <ul className={classes.list}>
                <li className={classes.listItem}>
                    <LinkS className={classes.link} to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}

                    >About</LinkS>
                </li>
                <li className={classes.listItem}>
                    <LinkS className={classes.link} to="discover"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >Discover</LinkS>
                </li>
                <li className={classes.listItem}>
                    <LinkS className={classes.link} to="services"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >Services</LinkS>
                </li>
            </ul>
            <h3 className={classes.copyright}>Ron & Shay {new Date().getFullYear()}</h3>
        </footer>
    )
}

export default Footer
