import React from 'react'


import cars from '../../assets/images/animation_200_kz011hgi.gif'
import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH1,
    ServicesH2,
    ServicesP
} from './ServicesElements'
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_wjfepheg.json" style={{height: "300px" }} background="transparent" speed="1"  loop autoplay></lottie-player>
                    <ServicesH2>Experience</ServicesH2>
                    <ServicesP>ניסיון של שנים,
                        שירות מקצועי חם ואדיב.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_ZZ5gpp.json" background="transparent" speed="1"  loop autoplay></lottie-player>
                    <ServicesH2>application</ServicesH2>
                    <ServicesP>ממשק עבודה נוח וידידותי למשתמש עם מערכת ועם אפליקציה חדשנית אשר בכל הזמנה ניתן לראות מי הנהג המשובץ על הנסיעה כולל הפרטים שלו, המיקום שלו והמחיר עבור הנסיעה.
                        במקביל למערכת - מענה גם בקבוצת WhatsApp  הכוללת את כל מנהלי המשמרת.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={cars} style={{ height: "300px" }} />
                    <ServicesH2>Vehicles</ServicesH2>
                    <ServicesP>החברה מספקת מוניות רגילות, מוניות יוקרה , מוניות גדולות ומפוארות ומיני בוסים ונותנת פתרון זמין ומענה מהיר לכלל הצרכים של הלקוחות.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
