import React from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
    { name: 'Home', href: '/profile-rawatpradeep', current: true },
    { name: 'AboutMe', href: '/aboutMe', current: false },
    { name: 'Projects', href: '/experience', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ]

const Navigation = () =>{
  const nav = navigation.map((element , index)=> <ul><li key={index}><a  className='"p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"' href={element.href}>{element.name}</a></li></ul>)
  
    return ( <nav className="bg-white py-2 md:py-4">
    <div className="container px-4 mx-auto md:flex md:items-center">

      <div className="flex justify-between items-center">
        <a href="#" className="font-bold text-xl text-indigo-600">PR</a>
        <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>

      <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
       {nav}
         </div>
    </div>
  </nav>);
      
}

export default Navigation;