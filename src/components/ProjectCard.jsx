import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";

const FormatDescription = (description) => {
    return description.substring(0, 50) + "..."
}

const ProjectCard = (props) => {
    const { project, onEdit, onDelete } = props

    const handleEditClick = (projectBeingEdited) => {
        onEdit(projectBeingEdited)
    }

    const handleDeleteClick = (project) => {
        onDelete(project.id)
    }

    return (
        <div className='card'>
            <img src={project.imageUrl} alt={project.name}className='projectImg'/>
            <section className="section-dark">
                <Link to={"/projects/" + project.id}>

                    <h5 className='strong'>
                        <strong>{project.name}</strong>
                    </h5>
                    <p>{FormatDescription(project.description)}</p>
                    <p> harga: {project.budget.toLocaleString()}</p>

                </Link>
                <button onClick={ () => handleEditClick(project)}>
                    <span className="icon-edit"></span>
                    Edit
                </button>   
                <button
            className="bordered secondary"
            onClick={() => handleDeleteClick(project)}
          >
            <span className="btn"></span>
            <MdDelete size={18} />
             Delete
          </button>
            </section>
        </div>
    )
}


export default ProjectCard

