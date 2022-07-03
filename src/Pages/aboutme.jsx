import Skills, {BasicKnowledge} from "./components/skills";
import Cards from "./components/cards"

const AboutMe=()=>{
    const date= new Date();
    return(
        <>
        <div className="skillboxparent">
        <Skills/>
            <Cards cardHeading="About Me" cardImg={require('./Users/me.png')} 
            cardText={
                <div className="about">

                <p><span className="bold">Name</span> : Arnab Kumar Singh<br/>
                    <span className="bold">Age  : </span>{date.getFullYear()-2002}<br/>
                   Front End Web Developer | Competitive Coder | Android Developer |
                   Student | FreeLancer | Engineer | 
                </p>
                </div>}/>
        </div>  
        <BasicKnowledge/>
        </>
    )
}

export default AboutMe