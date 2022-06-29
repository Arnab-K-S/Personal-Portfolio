import './project.css'
import InfoCards from "./infoCards"
const projects = [
    {
        "slno": '1',
        "name": "Personal Portfolio",
        'url': 'https://arnab-k-s.github.io/Personal-Portfolio-/',
        'repo': 'https://github.com/Arnab-K-S/Personal-Portfolio-',
        'description': `An archive collection and database to all my projects and skills.A collection of all the Skill Related information.This version of is website made using pure Vanila JS and CSS. (Same as the current one but from scratch without using Reactjs)`
    },

    {
        "slno": '2',
        "name": "Real-Time-Chat App Solochat",
        'url': '',
        'repo': 'https://github.com/Arnab-K-S/Real-Time-Chat-App-2.0',
        'description': `Communication is a great way to improve connectivity between people. Our life is goverened by social media apps and drawing an inspiration i built a Real Time Chat App with Basic Login System.The site uses Firebase Resouces for its Backend. (Pure Vanila JS and CSS)`
    },

    {
        "slno": '3',
        "name": "Real-Time-Chat-App 2.0",
        'url': 'https://arnab-k-s.github.io/Real-Time-Chat-App-2.0/login-local.html',
        'repo': '',
        'description': `Learning from mistakes is the key to improvement. After the first Chat App trial i made improvements in the UI Design and a group chat app where one  can chit-chat and gossip with his friends.Again everything is built form scracth using Vanila JS and CSS.`
    },

    {
        "slno": '4',
        "name": "Real-Time-Chat-App",
        'url': '',
        'repo': 'https://github.com/Arnab-K-S/Real-Time-Chat-App',
        'description': `A First try to make a real time chat app fasinated and eager to learn about DBMS through Firebase.The App has an option to choose over variety of wallpapers and the base colour is black.The website is built from scracth using Vanila JS and CSS`
    },

    {
        "slno": '5',
        "name": "Coding Website",
        'url': 'https://arnab-k-s.github.io/ARNAB-CODING-WEBSITE',
        'repo': 'https://github.com/Arnab-K-S/ARNAB-CODING-WEBSITE',
        'description': `A Prototype Website of my own coding website , with an inbuilt sand box HTML CSS playground to tussle around with.Don't miss out the detailed icon animation at the bottom of the page.The project itself helped me to gain new experiences about sandbox and making flip cards using only css.`
    },

    {
        "slno": '6',
        "name": "Personal Portfolio (Reactjs)",
        'url': 'https://arnab-k-s.github.io/Personal-Portfolio-Reactjs/',
        'repo': 'https://github.com/Arnab-K-S/Personal-Portfolio-Reactjs.git',
        'description': `This is the website which you are currently browsing. Brought together all my projects skill and other professional information to give a bird'eye view.A sneek peek about my knowlege and creativity.This is my first project on Reactjs and made my fundamentals really sharp.`
    },

    // {
    //     "slno":' ',
    //     "name": " ",
    //     'url':'',
    //     'githubrepo':' '
    // },
]
const TeamProjects = [
    {
        "slno": '1',
        "name": "Deepor Bill",
        'teamname': 'Coding Noobs',
        'url': '',
        'repo': ' ',
        "description": `Deepor Bil boasts of an enormous variety of flora and fauna, rich biodiversity and varied wildlife. The lakeside has divergent species of plants- water hyacinths, water lilies, aquatic grasses, marshy lands and vegetation patches. As per research 18 varieties of phytoplanktons have been found at the site. Also, rare plants like Euryale Ferox, potamogeton crispus etc have been spotted.
        Needless to mention, Dipor Bil is a proud abode of a sweeping number of very rare and endangered birds. Harbouring close to 19000 birds on a single day basis, the lake is a dwelling of approx 220 bird species out of which 70 are migratory. Some endangered birds found here include Spot Billed Pelican, Lesser Adjutant Stork, White Bellied Eagle, Siberian Crane etc.
       
        A total of 20 amphibians, 12 lizards, 18 snakes, 6 turtle and tortoise species have been listed here. Considering the aforementioned factors, the area attracts a lot of researchers, students and wildlife photographers other than the regular tourists.`
    },

    {
        "slno": '2',
        "name": "E-Libary Project",
        'teamname': 'Coding Noobs',
        'url': '',
        'repo': '',
        'description': ` The First Project and a team work on web development in fulfilment of Fast Web 2022 Hackathon , held by the ECS Society, under the event spectrum.We are glad to say that even having a very minor knowledge of HTML and CSS ( no JavaScript was used), we bagged the 2nd Runner Up. The Judges were Impressed with our work too.

        After that several commits were made to this project until completion.
        The website is a sample to a Library Website along with multiple features.`
    },
]
// <InfoCards cardHeading={solo.name} cardText={solo.description} /> 
const Projects = () => {
    return (
        <>
        <div className="grid-3">
            {projects.map((solo) => (
                <InfoCards cardHeading={solo.name} cardText={solo.description} href={solo.repo} />
            ))}
        </div>            
    
            
    {TeamProjects.map((team) => {
           <InfoCards cardHeading={team.name} cardText={team.description} href={team.repo} />
    }) }</>
        )
}

export default Projects