import React from 'react';
import './App.css';
import './NavBar.css'
import ProjectsPage from './components/ProjectsPage';
import ProjectPage from './components/ProjectPage';
import HomePage from './home/HomePage';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { IoHomeSharp } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import CreateProjectPage from './components/CreateProject';

function App() {
  return (
    <BrowserRouter>
      <header className="sticky">
        <span className="logo">
        <img src="pdg.png" alt="logo" width={'70'} height={"70"} className='NavImg'/>
        </span>
        <NavLink to="/" className='container2 button rounded' id='navbar'>
        <span><IoHomeSharp /></span>
        <span> </span>
          Home
        </NavLink>
        <NavLink to="/projects" className='container3 button rounded'>
        <span><MdMenuBook /></span>
        <span> </span>
          MENU
        </NavLink>
        <NavLink to="Create" className='container4 button rounded'>
        <span><IoIosCreate /></span>
        <span> </span>
          Create
        </NavLink>
      </header>

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path='/projects/:id' element={<ProjectPage />} />
          <Route path='/Create' element={<CreateProjectPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
