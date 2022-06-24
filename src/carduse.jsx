import Cards from "./cards"
import './cards.css'

const cardArray =[
{ 
        cardHeading : "Card",
        cardImg: require("./images/1.webp") ,
        cardText    :"Lorem" ,
},

{   cardHeading : "Card",
        cardText: "card 2",
        cardImg: require("./images/2.jpg")
},
{   cardHeading : "Card",
        cardText: "card 3",
        cardImg: require("./images/2.jpg"),
},
]
// const cardArray = [{ cardHeading: "Card", cardImg: require("./images/2.jpg"), cardText: "Lorem"}]
const Card = () => {
    return (
       <>
            {cardArray.map((cardvalue) => (
        <Cards cardHeading={cardvalue.cardHeadinsg} cardText={cardvalue.cardText} cardImg={cardvalue.cardImg}/>
            ))}
        </>
    )
    }

export default Card;