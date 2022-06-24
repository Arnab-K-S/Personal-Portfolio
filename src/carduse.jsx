import Cards from "./cards"
import './cards.css'
const Pythoncard=()=>{
    return (
        <>
            
        </>
    )
}
const cardArray =[
{ 
        cardHeading : "Python Programming & Automation",
        cardImg: require("./images/1.webp") ,
        cardText: " Core Python Expertise |"+
            " Knowledge of Web Frameworks |"+
            " Familiarity with Automation Libraries |"+
            " Familiarity wtih Regex and Request modules |"+
            " Analytical and Problem-Solving Capabilities |"+
            " Expert-level Testing and Debugging skills |"
    
},

{   cardHeading : "Android Development",
        cardText: "Learning in Progress",
        cardImg: require("./images/2.jpg")
},
{   cardHeading : "Web Development",
    cardText: "Good Understanding of HTML CSS JS | Responsivesness | Reactivesness | Familiarity with SASS | CSS GRIDS | CSS Flexbox | Good Knowledge of Backend Frameworks like PhP , Django , Flask and Nodejs | Reactjs | Familar with Databases like MySQL and Firebase",
        cardImg: require("./images/transparent.webp"),
},
]

const Card = () => {
    return (
       <>
            {cardArray.map((cardvalue) => (
        <Cards cardHeading={cardvalue.cardHeading} cardText={cardvalue.cardText} cardImg={cardvalue.cardImg}/>
            ))}
        </>
    )
    }

export default Card;