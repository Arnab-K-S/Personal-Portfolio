import "./css/project.css";
import InfoCards from "./components/infoCards";
import projects from "./projects.json";

const Projects = () => {
  return (
    <>
      <h1 className="header">Solo Projects</h1>

      <div className="grid-3">
        {projects["solo"].map((proj) => (
          <InfoCards
            cardHeading={proj.name}
            cardText={proj.description}
            links={[proj.url, proj.repo]}
            cardImg={proj.img}
          />
        ))}
      </div>

      <h1 className="header">Team Projects</h1>

      <div className="grid-3">
        {projects["team"].map((team) => (
          <InfoCards
            cardHeading={team.name}
            cardText={team.description}
            links={[team.url, team.repo]}
            team={team.members}
            cardImg={team.img}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
