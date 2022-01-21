import {Link} from "react-router-dom";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
    console.log(styles);
    const imageUrl = "https://drive.google.com/uc?export=view&id=" + project.poster_path
    return (
        <li className={styles.projectCard}>
            <Link to={"/projects/" + project.id}>
                <img 
                    className={styles.projectImage} 
                    width={230} 
                    height={345}
                    src={imageUrl} 
                    alt={project.title} 
                />
                <div>{project.title}</div>
            </Link>
        </li>
    );
}
