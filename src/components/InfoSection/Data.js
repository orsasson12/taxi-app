import img1 from '../../assets/images/undraw_about_us_page_re_2jfm.svg'
import img2 from '../../assets/images/undraw_treasure_of-9-i.svg'
import img3 from '../../assets/images/56260-customer-service.gif'
const arrImg = [img1, img2,img3]
export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    headLine: 'צוות הנהגים שלנו',
    description: `הצוות שלנו המונה כ 80 נהגים שותף לסטנדרטים יוצאי דופן של השירות, כל אחד מהנהגים נבחר בקפידה ועליו לעבור הכשרות קפדניות שלנו הכוללות קישורי נהיגה, ניווט, עמידה בזמנים ושירות לקוחות כדי להבטיח לנוסעים נסיעה נוחה ובטוחה.`,
    imgStart: false,
    img: arrImg[0],
    alt: 'TeamWork',
    dark: true,
    primary: true,
    darkText: false,
    linktext: false

}
export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    headLine: 'תשאלו את הכוכבים שירות מהסרטים',
    description: `
    בין הלקוחות המרוצים :
•	רוקדים עם כוכבים 
•	הפלמ"ח 
•	פאודה
•	טהרן
•	הזמר במסכה 
•	מאסטר שף
•	חתונה ממבט ראשון
•	סקאי
•	תמונת הניצחון 
•	שנות ה 80
•	שנות ה90 
•	קוקה בע"מ 
•	השוטרים
•	מיס יוניברס`,
    imgStart: true,
    img: arrImg[2],
    alt: 'collab',
    dark: false,
    primary: false,
    darkText: true,
    linktext: false
}