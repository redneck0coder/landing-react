import cl from './ProjectsCard.module.css'

const ProjectsCard = ({project, ...props}) => {
    return (
        <a className={cl.link} href={project.link}>
            <article className={cl.projectCard}>
                <div className={cl.info}>
                    <div className={cl.infoTitle}>
                        {project.name}
                    </div>
                    <div className={cl.infoDesc}>
                        {project.desc}
                    </div>
                </div>
                <div className={cl.image} style={{backgroundImage: 'url(src/assets/' + project.image + ')'}}></div>
            </article>
        </a>
    );
};

export default ProjectsCard;