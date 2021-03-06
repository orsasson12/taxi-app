import React from 'react'
import classes from './Service.module.css'

import cars from '../../assets/images/animation_200_kz011hgi.gif'
import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH1,
    ServicesH2,
    ServicesP,
  
} from './ServicesElements'
const Services = () => {
  
   
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <lottie-player style={{height:'230px'}} src="https://assets6.lottiefiles.com/packages/lf20_wjfepheg.json"     background="transparent" speed="1"  loop autoplay></lottie-player>
                    <ServicesH2>Experience</ServicesH2>
                    <ServicesP>
                        <span className={classes.span}>ניסיון של שנים,
                        שירות מקצועי חם ואדיב.
                        </span>
                        </ServicesP>
                </ServicesCard>
                <ServicesCard >
                        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_ZZ5gpp.json" background="transparent" speed="1"  loop autoplay></lottie-player>
                    <ServicesH2 >application</ServicesH2>
                    <ServicesP>ממשק עבודה נוח וידידותי למשתמש עם מערכת ועם אפליקציה חדשנית אשר בכל הזמנה ניתן לראות מי הנהג המשובץ על הנסיעה כולל הפרטים שלו, המיקום שלו והמחיר עבור הנסיעה.
                        במקביל למערכת - מענה גם בקבוצת WhatsApp  הכוללת את כל מנהלי המשמרת.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={cars}  />
                    <ServicesH2>Vehicles</ServicesH2>
                    <ServicesP> <span className={classes.span}>
                        החברה מספקת מוניות רגילות, מוניות יוקרה , מוניות גדולות ומפוארות ומיני בוסים ונותנת פתרון זמין ומענה מהיר לכלל הצרכים של הלקוחות.
                        </span>
                        </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
