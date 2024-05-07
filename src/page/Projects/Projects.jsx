import {useState} from "react";
import Nav from "../../components/Nav/Nav.jsx";
import ProjectsCard from "../../components/UI/ProjectsCard/ProjectsCard.jsx";
import cl from './Projects.module.css'
const Projects = () => {

    const [projects, setProjects] = useState([
        {id: 0, name: 'name', desc: 'test description', image: 'template.jpeg', link: '#'},
        {id: 1, name: 'game', desc: 'test description 123', image: 'template.jpeg', link: '#'},
        {id: 3, name: 'site', desc: 'test description 321', image: 'template.jpeg', link: '#'},
    ]);


    return (
        <>
            <div className='navbar'>
                <Nav></Nav>
            </div>
            <section className={cl.container}>
                <h1 className={cl.title}>Projects</h1>
                <div className={cl.projectsList}>
                    {projects.map(project => <ProjectsCard key={project.id} project={project}></ProjectsCard>)}
                </div>
            </section>
        </>
    );
};

export default Projects;