import React, { useEffect, useState } from "react";
import ProjectList from "./ProjectList";
import { projectAPI } from "./projectAPI";
import Project from "./Project";

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const [currentPage, setCurrentPage] = useState(1);

    const handleMoreClick = () => {
        setCurrentPage(currentPage => currentPage + 1)
    }

    useEffect(() => {
        const loadProjects = async () => {
            setLoading(true);
            try {
                const data = await projectAPI.get(currentPage);
                if (currentPage === 1) {
                    setProjects(data);
                } else {
                    setProjects((projects) => [...projects, ...data])
                }
            } catch (e) {
                if (e instanceof Error) {
                    setError(e.message);
                }
            } finally {
                setLoading(false)
            }
        }
        loadProjects()
    }, [currentPage]);

    const saveProject = (project) => {
        projectAPI.put(project).then(updatedProject => {
            let updatedProjects = projects.map(p => {
                return p.id === project.id ? new Project(updatedProject) : p;
            })
            setProjects(updatedProjects)
        })
            .catch((e) => {
                if (e instanceof Error) {
                    setError(e.message)
                }
            });
    };
    const deleteProject = (id) => {
        projectAPI.delete(id)
          .then(() => {
            setProjects(projects.filter((project) => project.id !== id));
          })
          .catch((error) => {
            setError(error.message);
          });
      };
    return (
        <>
            <h1>NASI PADANG SEDERHANA
                <p>MENU MASAKAN PADANG SEDERHANA</p>
            </h1>

            {error && (
                <div className="row">
                    <div className="card large error">
                        <section>
                            <p>
                                <span className="icon-alert inverse"></span>
                                {error}
                            </p>
                        </section>
                    </div>
                </div>
            )}

            <ProjectList onDelete={deleteProject} onSave={saveProject} projects={projects} />

            {!loading && !error && (
                <div className="row">
                    <div className="col-sm-12">
                        <div className="button-group fluid">
                            <button className="button default" onClick={handleMoreClick}>
                                More...
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {loading && (
                <div className="center-page">
                    {/* Assuming you want a spinner here */}
                    <span className="spinner primary"></span>
                </div>
            )}
        </>
    )
}
export default ProjectsPage;