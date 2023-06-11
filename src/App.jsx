import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Create from './pages/Create';

function App() {

  // async function getAllTodos() {
//   const res = await fetch("https://netflix1.pythonanywhere.com/aktyorlar/");
//   const todos = await res.json();
//   console.log(todos);
// }
// getAllTodos();

  return (
    <div className="App bg-slate-400  w-full min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/create" element={<Create/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
