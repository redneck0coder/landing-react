import {useState} from "react";
import Container from "../../components/Container /Container.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import ProjectsCard from "../../components/UI/ProjectsCard/ProjectsCard.jsx";
import cl from './Projects.module.css'
const Projects = () => {

    const [projects, setProjects] = useState([
        {id: 0, name: 'FRM', desc: 'frontend roadmap - настольная книга с основами веб технологий', image: 'template.jpeg', link: '#'},
        {id: 1, name: '300$', desc: 'Игра на vanilla JS.', image: 'template.jpeg', link: '#'},
        {id: 3, name: 'site', desc: 'test description 321', image: 'template.jpeg', link: '#'},
    ]);


    return (
        <>
            <Navbar/>
            <Container>
                <div className={cl.projectsList}>
                    {projects.map(project =>
                        <ProjectsCard key={project.id} project={project}></ProjectsCard>)
                    }
                </div>
            </Container>
        </>
    );
};

export default Projects;