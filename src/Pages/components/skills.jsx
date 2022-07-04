import '../css/aboutme.css'
import '../css/project.css'
const skills = [
    { 'language': 'HTML', 'percentage': '80%' },
    { 'language': 'OOPs', 'percentage': '80%' },
    { 'language': 'CSS', 'percentage': '75%' },
    { 'language': 'Python', 'percentage': '70%' },
    { 'language': 'C', 'percentage': '70%' },
    { 'language': 'C++', 'percentage': '65%' },
    { 'language': 'JS', 'percentage': '50%' },
    { 'language': 'Reactjs', 'percentage': '50%' },
    { 'language': 'DSA', 'percentage': '40%' },
]

const Skills = () => {
    return (
        <div>
            <div className="skillgrid">
                <h1 className="header">Top Skills</h1>
            {skills.map(
                (s) => (
                    <>
                    <div className="skillbox">
                        <h1 className='languages'>{s.language}</h1>
                        <div className="outbar">
                            <div className="innerbar" style={{ "width": s.percentage }}>
                            </div>
                        </div>
                            <span className='percentage'>{s.percentage}</span>
                        </div>
                    </>
                )
                )
            }
            </div>
           
        </div>
    )
}

const basic=[
    "Android Development","Cloud Computing","NodeJs","PhP","MySQL","Django","Flask","Bash Scripting","Dart"]
const BasicKnowledge=()=>{
    return(
        <>
                <h1 className="header">Basic Knowledge</h1>
                <div className="grid-3">
                {basic.map(
                    (s) => (
                        <>
                                <span className='basiclanguages'>{s}</span>
                        </>
                    )
                    )
                }
                </div>
        </>
    )
}
export default Skills
export {BasicKnowledge}