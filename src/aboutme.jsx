import Skills, {basicKnowledge} from "./skills";
import Cards from "./cards"

const AboutMe=()=>{
    const date= new Date();
    return(
        <>
        <div className="skillboxparent">
        <Skills/>
            <Cards cardHeading="About Me" cardImg={require('../src/Users/me.png')} 
            cardText={
                <div className="about">

                <p><span className="bold">Name</span> : Arnab Kumar Singh<br/>
                    <span className="bold">Age  : </span>{date.getFullYear()-2002}<br/>
                   Front End Web Developer | Competitive Coder | Android Developer |
                   Student | FreeLancer | Engineer | 
                </p>
                </div>}/>
        </div>  
        <basicKnowledge/>
        </>
    )
}

export default AboutMe