import './project.css'
import InfoCards from "./infoCards"
const projects = [
    {
        "slno": '1',
        "name": "Personal Portfolio",
        'img': require('./projects/Personal Portfolio.png'),
        'url': 'https://arnab-k-s.github.io/Personal-Portfolio-/',
        'repo': 'https://github.com/Arnab-K-S/Personal-Portfolio-',
        'description': `An archive collection and database to all my projects and skills.A collection of all the Skill Related information.This version of is website made using pure Vanila JS and CSS. (Same as the current one but from scratch without using Reactjs)`
    },

    {
        "slno": '2',
        "name": "Marvel Movies Website",
        'url': 'https://arnab-k-s.github.io/Marvel-Website/marvel.html',
        'img': require('./projects/Marvel.png'),
        'repo': 'https://github.com/Arnab-K-S/Marvel-Website',
        'description': `Right from Childhood i am really fasinated with Sci-Fi stories and movies.Marvel Presented them in the most beautiful way even having half the character rights to other studios.This websites contains list of all marvel movies released with their dates.The concept of CSS Grid is used appreciably in the website.(Pure Vanila JS and CSS)`
    },
    
    {
        "slno": '3',
        "name": "Real-Time-Chat-App 2.0",
        'img': require('./projects/ChatApp2.png'),
        'url': 'https://arnab-k-s.github.io/Real-Time-Chat-App-2.0/login-local.html',
        'repo': 'https://github.com/Arnab-K-S/Real-Time-Chat-App-2.0',
        'description': `Learning from mistakes is the key to improvement. After the first Chat App trial i made improvements in the UI Design and a group chat app with Basic Login System where one  can chit-chat and gossip with their friends.The site uses Firebase Resouces for its Backend. (Pure Vanila JS and CSS)`
    },
    
    {
        "slno": '4',
        "name": "Real-Time-Chat-App",
        'img': require('./projects/ChatApp.png'),
        'url': 'https://arnab-k-s.github.io/Real-Time-Chat-App/chat.html',
        'repo': 'https://github.com/Arnab-K-S/Real-Time-Chat-App',
        'description': `Communication is a great way to improve connectivity between people. Our life is goverened by social media apps and drawing an inspiration i built a Real Time Chat App with Basic Login System(Pure Vanila JS and CSS + Firebase).The App has an option to choose over variety of wallpapers and the base colour is black.`
    },
    
    {
        "slno": '5',
        "name": "Coding Website",
        'img': require('./projects/CodingWebsite.png'),
        'url': 'https://arnab-k-s.github.io/ARNAB-CODING-WEBSITE',
        'repo': 'https://github.com/Arnab-K-S/ARNAB-CODING-WEBSITE',
        'description': `A Prototype Website of my own coding website , with an inbuilt sand box HTML CSS playground to tussle around with.Don't miss out the detailed icon animation at the bottom of the page.The project itself helped me to gain new experiences about sandbox and making flip cards using only css.`
    },
    
    {
        "slno": '6',
        "name": "Personal Portfolio (Reactjs)",
        'img': require('./projects/Personal Portfolio.png'),
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
        'img': require('./projects/DeeporBill.png'),
        'teamname': 'Coding Noobs',
        'members': ['Aryadeep Gogoi', 'Mritunjoy Chinte', 'Vishnu Padmakumar'],
        'url': 'https://coding-noobs-nits.github.io/DeeporBill/Home.html',
        'repo': 'https://github.com/CODING-NOOBS-NITS/DeeporBill',
        "description": ``
    },

    {
        "slno": '2',
        "name": "E-Libary Project",
        'teamname': 'Coding Noobs',
        'img': require('./projects/E-Library.png'),
        'members':['Mritunjoy Chinte','Vishnu Padmakumar'],
        'url': 'https://coding-noobs-nits.github.io/E-Library/home.html',
        'repo': 'https://github.com/CODING-NOOBS-NITS/E-Library',
        'description': ` The First Project and a team work on web development in fulfilment of Fast Web 2022 Hackathon , held by the ECS Society, under the event spectrum.We are glad to say that even having a very minor knowledge of HTML and CSS ( no JavaScript was used), we bagged the 2nd Runner Up. The Judges were Impressed with our work too.

        After that several commits were made to this project until completion.
        The website is a sample to a Library Website along with multiple features.`
    },
]
const Projects = () => {
    return (
        <>
            <h1 className='header'>Solo Projects</h1>
        <div className="grid-3">
            {projects.map((solo) => (
                <InfoCards cardHeading={solo.name} cardText={solo.description} href={[solo.url,solo.repo]} cardImg={solo.img}/>
            ))}
        </div>        

            <h1 className='header'>Team Projects</h1>
    <div className="grid-3">
    {TeamProjects.map((team) => (
        <InfoCards cardHeading={team.name} cardText={team.description} href={[team.url, team.repo]} team={team.members} cardImg={team.img} />
    ))}
        </div> 
    </>
     )
}

export default Projects