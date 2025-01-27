//

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMenu, FiSearch, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="bg-gray-900 p-4 border-b border-gray-700">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold italic">
          <Link to="/">
            Ab<span className="text-gray-500">Komik</span>
          </Link>
        </div>

        <form
          onSubmit={handleSearchSubmit}
          className="hidden md:flex items-center space-x-4"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="absolute right-3 top-3">
              <FiSearch className="text-gray-400" />
            </button>
          </div>
        </form>

        <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
