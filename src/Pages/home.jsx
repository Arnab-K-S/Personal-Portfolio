import Card from "./components/carduse"
import Wave from "./components/svgwave"
import './css/home.css'
import { StrictMode } from "react";

const para = `Personal Portfolio Website as well as my first reactjs project.
This website contains an accumulation of all my projects and skills.
This website was made by me in my first year where i explored and gained a bit of experience in various fields of computer science. My top skills include css and web front end desiging , python automation and web scrapping.`
function Home() {
  return (
    <>
    <StrictMode>
      <Wave/>
      <section id='section1'>
        <div className="titlebox">
          <h1 id="intro">Welcome to my Website | Arnab</h1>
          <p>{para}</p>
          <button id="resume">Download Resume</button>
        </div>
        <img id='webdesign' src={require("./images/webdesign.jpg")} alt='.'/>
      </section>
      <div className="flexbox"><Card/></div>
        {/* <img id='frontpage' src={require("./images/frontpage.png")} alt='.'/> */}
        <div id="frontpage">
        <img id="c4" class="cascade c3 cleft" src={require("./images/cascade/w4.jpg")} alt='.'/>
        <img id="c2" class="cascade c2 cleft" src={require("./images/cascade/w1.jpg")} alt='.'/>
        <img id="c1" class="cascade c1" src={require("./images/cascade/w2.jpg")} alt='.'/>
        <img id="c3" class="cascade c2 cright" src={require("./images/cascade/w3.jpg")} alt='.'/>
        <img id="c5" class="cascade c3 cright" src={require("./images/cascade/w5.jpg")} alt='.'/>
        </div>
      </StrictMode>
    </>
    );
}
export default Home;