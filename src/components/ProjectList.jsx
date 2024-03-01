import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectForm from './ProjectForm'

const ProjectList = ({ projects, onSave, onDelete }) => {
    const [projectBeingEdited, setProjectBeingEdited] = useState({})

    const handleEdit = (project) => {
        setProjectBeingEdited(project)
    }
    
    const handleDelete = (project) => {
        onDelete(project)
    }

    const cancelEditing = () => {
        setProjectBeingEdited({})
    }

    return (
        <>
            <div className="row">
                {projects?.map((project) => (
                    <div key={project.id} className='cols-sm'>
                        {project === projectBeingEdited ? (
                            < ProjectForm onSave={onSave} onCancel={cancelEditing} project={project} />
                        ) : (
                            <ProjectCard project={project} onEdit={handleEdit} onDelete={handleDelete} />
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProjectList
