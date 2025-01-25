import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const menus = ['anime', 'people'];
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 bg-opacity-95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 sm:px-8">
        <div className="flex items-center gap-4">
          <h1 className="text-white">TEST</h1>
        </div>
        <div className="hidden sm:block"></div>
        <div
          className="text-white cursor-pointer sm:hidden"
          onClick={() => setToggleNavbar(!toggleNavbar)}
        >
          {toggleNavbar ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
      <MobileDropdown
        menus={menus}
        toggleNavbar={toggleNavbar}
        setToggleNavbar={setToggleNavbar}
        navigate={navigate}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </nav>
  );
};

const MobileDropdown = ({ toggleNavbar }) => {
  const dropdownVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: '0%', opacity: 1, transition: { duration: 0.3 } },
    exit: { x: '-100%', opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <div>
      {toggleNavbar && (
        <div
          className="fixed top-0 left-0 z-40 flex flex-col w-3/4 h-full text-white bg-gray-900 bg-opacity-90 sm:hidden"
          variants={dropdownVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex items-center justify-center pt-4"></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
