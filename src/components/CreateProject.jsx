import React, { useState } from 'react';
import { projectAPI } from './projectAPI';
import './CreateProject.css'

const CreateProjectPage = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [budget, setBudget] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Membuat objek proyek baru
            await projectAPI.create({
              name,
              imageUrl,
              description,
              budget
            });
            window.location.href = "http://localhost:3000/projects"
            // Redirect atau tindakan lain setelah membuat proyek berhasil
            // Misalnya, redirect ke halaman proyek atau tampilkan pesan sukses
        } catch (error) {
            // Tangani kesalahan jika ada
            console.error(error);
        }
    };

    return (
        <div>
        <div className='create'>
            <h1>Create New Project</h1>
            <form onSubmit={handleSubmit}>

                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </div>
                <div>
                    <label>Budget:</label>
                    <input type="text" value={budget} onChange={(e) => setBudget(e.target.value)} />
                </div>
                <button type="submit">Create Project</button>
            </form>
        </div>
        </div>
    );
};

export default CreateProjectPage;
