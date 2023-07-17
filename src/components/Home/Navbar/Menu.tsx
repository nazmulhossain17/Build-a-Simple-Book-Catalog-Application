import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Menu = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(err => console.error(err))
}
  
  return (
    <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-red-700">
      <Link
        to="/"
        className="block md:inline-block px-3 py-2 rounded-md text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        Home
      </Link>
      <Link
        to="/books"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        Books
      </Link>
      <a
        href="#"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        About
      </a>
      <a
        href="#"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
      >
        Contact
      </a>
      {user?.uid ? (
        <Link
          className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-red-700 focus:outline-none focus:text-white focus:bg-gray-700"
        onClick={handleLogOut}
        >
          Sign Out
        </Link>
      ) : (
        <Link
          to="/login" // Replace with the appropriate signup route
          className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
        >
          Sign Up
        </Link>
      )}
    </div>
  );
};

export default Menu;
