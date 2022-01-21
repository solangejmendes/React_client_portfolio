import ProjectCard from "./ProjectCard";
import projects from "./projects.json";
import styles from "./ProjectsGrid.module.css";

export default function ProjectsGrid() {
    return ( 
        <ul className={styles.projectsGrid}> 
            {projects.map((project) => ( 
                <ProjectCard key={project.id} project={project}/>
            ))} 
        </ul>
    );
}