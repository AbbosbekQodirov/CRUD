import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="container mx-auto flex justify-between py-4 items-center">
      <h1 className='text-2xl font-bold font-mono logo'>USERS-LIST WITH REST FULL API </h1>
      <div className="links flex gap-3 text-xl">
        <NavLink className='bg-[orange] px-3 py-1 text-white rounded flex items-center link' to="/" >users</NavLink>
        <NavLink className='bg-[orange] px-3 py-1 text-white rounded flex items-center link' to="/create">create</NavLink>
      </div>
    </div>
  );
}

export default Navbar