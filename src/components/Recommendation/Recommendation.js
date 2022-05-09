import React, { useEffect, useState } from "react";
import "./Recommendation.css";

const Recommendation = () => {
  const [recommendations] = useState([
    {id:1,name:`תודה רבה לכם על הכל, על הזרימה עם הטירוף שלנו ושלא השתגעתם ממני כשלפעמים גם אני השתגעתי!
יכולה להגיד לכם שאם לא נתראה זה רק בגלל שעזבתי את ההפקות ולא משום סיבה אחרת! 
אין עליכם בעולם❤️`},
{id:2, name:`פשוט מדהימים מקצועיים 
ואנושיים 
אין כמוכם`},
{id:3,name:`אין כמוכם צוות מדהים 
ערב מצויין לכם`},
{id:4,name:`חמוודים שלי !!!!
תודה רבה רבה !!
אוהבת אתכם מאודדדד
תמסרו לכל הנהגיםםם 💛💛
ונפגש בקרובב`},
{id:5,name:`כיף גדול לעבוד אתכם מרמת השירות ועד רמת הנוחות מבחינת הזמנת המוניות
אתם סבלניים וסובלניים וזה די נדיר היום
אתם מקסימים כל אחד ואחת מכם!
באמת שנקשרתי אליכם מבלי להכיר יותר מידי 
אלופיםםםם ! ❤️`},
{id:6,name:`אוהבת אתכם אתם הקמע שלי`},
{id:7,name:`היה מצויין עם המוניות!
אין כמוכם!`},
{id:8,name:`נהגים אהובים ויקרים שלי
היה לי העונג והכבוד לעבוד עם צוות מסור ואהוב כמוכם! 
הסבלנות והסובלנות שהיו לכם זה לא מובן מאליו
תודה שבזכותם ישנתי עוד קצת בבוקר 😛
אוהבת אתכם !
שי, משה מעיין ודוד תודה על היחס והמענה המהיר ! אני אוהבתתתת אתכם ❤️❤️❤️❤️❤️❤️❤️❤️`},
{id:9,name:`תודה על עוד הפקה מוצלחת ביחד ועל כל הימים שהייתם לי משענת ועטפתם וספגתם את כל הבלתמים וההתקלות של ההפקה הזאת. 
אתם באמת הכי טובים שיש ❤️`},
{id:10,name:`חד משמעית הכי טובים ! הכי נוחים !
סיימתי עם שי עכשיו הפקה והם פשוט התאימו את עצמם אלינו !`},
{id:11,name:`פשוט חברה שכולה לב אחד גדול 
שי משה ומעיין שמנהלים את העניינים
נותנים שירות ברמה הכי גבוהה שיש
מהירות זמינות דיוק
והכי חשוב נותנים מענה אנושי ואווירה משפחתית שכל הצוות שלנו מכיר את השמות של הנהגים ואוהב אותם
ממליצה מכל ה - ❤️`},
{id:12,name:`ממליצה מאוד על שי !
הם מבינים הכי טוב במוניות
ומאוד עוזרים !`},
{id:13,name:`הכי טובים שיש
הכי נדיבים שיש
הכי סבלניים שיש
הכי לב שיש
הכי חיים שלי בלב
בלעדיהם לאאאאאאאאא עושה הפקות
ובעיקר צריכים להדליק משואה על שהם סובלים אותי !`},

  ])

const [number, setNumber] = useState(1);
  const [running, setRunning] = useState(true);
  useEffect(() => {
    let interval;
    if(number >= 13){
      setRunning(false)
    }
    if(number <= 1){
      setRunning(true)
    }
    if (running) {
      interval = setInterval(() => {
        setNumber((prevTime) => prevTime + 1);
      }, 3000);
    } else if (!running) {
       interval = setInterval(() => {
        setNumber((prevTime) => prevTime - 1);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [running,number]);


const singleRecommend = recommendations.filter((item,i) => item.id === number).map((item) => item.name) 



  return (
    
    <div className="recommendationContainer">
<div className={`${`circular-sb`}`}>
{singleRecommend}
<div className="circle1"></div>
<div className="circle2"></div>
</div>

      <div className="ourStarsContainer">
      <h3>🌟תשאלו את הכוכבים שירות מהסרטים</h3> 
  
  <p>

  בין הלקוחות המרוצים
•	רוקדים עם כוכבים 
•	הפלמ"ח 
•	פאודה
•	טהרן
•	הזמר במסכה 
•	מאסטר שף
•	חתונה ממבט ראשון
•	סקאי
•	תמונת הניצחון 
•	שנות ה-80
•	שנות ה-90
•	ערוץ גיימינג
•	משחקי השף
•	הכוכב הבא 
•	הישרדות
•	המסעדה הבאה
•	השוטרים
•	המטבח המנצח
•	הבתים היפים בישראל
•	מיס יוניברס
  </p>
      </div>
    </div>
  );
};

export default Recommendation;