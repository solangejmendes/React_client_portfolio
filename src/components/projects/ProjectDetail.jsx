import { useEffect, useState } from "react";
import { useParams } from "react-router";
import get from "./projects.json";
import styles from "./ProjectDetail.module.css";


export default function ProjectDetail() {
    const {projectId} = useParams();
    const [project, setProject] = useState(null);


    useEffect(() => {
        console.log('el proyecto es ${projectId}')
        get("/project/" + projectId).then(data => {
                setProject(data);
            })
        }, [projectId]);
        
        if (!project) {
            return null;
        }

    const imageUrl = "https://drive.google.com/uc?export=view&id=" + project.poster_path

    return ( 
        <div className = {styles.detailsContainer}>
            <img 
                className={styles.col + " " + styles.projectImage} 
                src={imageUrl} 
                alt={project.title} 
            /> 
            <div className={`${styles.col} + ${styles.projectDetails}`}>
                <p className={styles.firstItem}>
                    <strong>Title:</strong>{project.title} 
                </p>
                <p>
                    <strong>Types: </strong> {" "}
                    {project.Type_desc.map(type => type.name).join(", ")} 
                </p>
                <p>
                    <strong>Description:</strong>{project.overview} 
                </p>
            </div> 
        </div>
    );
}
