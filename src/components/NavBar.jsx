import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillCaretDownFill, BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImHome } from 'react-icons/im';
import CampDropdown from './pages/camp/CampDropdown';
import ChecklistDropdown from './pages/infosec/InfoSecDropdown';
import EssayDropdown from './pages/essay/EssayDropdown';
import ProjectDropdown from './pages/project/ProjectDropdown';
import Religion from './pages/religion/Religion';
import Home from './Home';
import InfoSecDropdown from './pages/infosec/InfoSecDropdown';

function NavBar() {
  const [theme, setTheme] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdown = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  return (
    <div className={`navbar ${theme === "dark" ? "dark dark:text-lowTeal text-center mt-2 text-2xl ml-auto mr-auto w-4/5" : "text-lowTeal text-center mt-2 text-2xl ml-auto mr-auto w-4/5"}`}>
      <div className='inline-block text-center ml-1 p-1 dark:hover:ring-offset-midTeal bg-bg-gray dark:bg-navy rounded-lg'>
        
        <Link to='/' className='navbar-home inline-block'><ImHome size={25}/></Link>
        
        {[
          { name: 'Traveling', component: <CampDropdown /> },
          { name: 'InfoSec', component: <InfoSecDropdown /> },
          { name: 'Essays', component: <EssayDropdown /> },
          { name: 'Projects', component: <ProjectDropdown /> },
        ].map((dropdown, index) => (
          <div className="inline-block ml-1 p-1 dark:hover:ring-offset-midTeal bg-bg-gray dark:bg-navy rounded-lg">
            <button
              key={index}
              className='nav-item'
              onMouseEnter={() => handleDropdown(dropdown.name)}
              onMouseLeave={() => handleDropdown(null)}
              onTouchStart={() => handleDropdown(dropdown.name)}
            >
            <div className='nav-links inline-block ml-1 p-1 dark:hover:ring-offset-midTeal'>{dropdown.name}<BsFillCaretDownFill className='inline-block' />
            </div>
            {activeDropdown === dropdown.name ? dropdown.component : null}
            </button>
          </div>
        ))}

        <Link to='/religion' className='navbar-religion inline-block ml-1 p-1 dark:hover:ring-offset-midTeal'>Religion</Link>

        <div className='theme-toggle inline-block pt-1 p-1'>
          <button onClick={handleThemeSwitch}>
            {theme === "dark" ? <BsFillSunFill size={25} /> : <BsMoonStarsFill size={25} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className='text-lowTeal bg-navy dark:bg-navy text-center mt-2 text-md ml-auto mr-auto w-1/5 grid grid-cols-1'>
        <div className='hamburger-menu'>
          <button onClick={toggleMobileMenu}>
          <GiHamburgerMenu className="inline-block text-lowTeal" size={25} />
          </button>
        </div>
          <div className="dark:text-lowTeal text-lowTeal text-center mt-2 ml-auto mr-auto">
            <Home />
          </div>
          <div className="dark:text-lowTeal text-lowTeal text-center mt-2 ml-auto mr-auto">
            <CampDropdown />
          </div>
          <div className="dark:text-lowTeal text-lowTeal text-center mt-2 ml-auto mr-auto">
            <ChecklistDropdown />
          </div>
          <div className="dark:text-lowTeal text-lowTeal text-center mt-2 ml-auto mr-auto">
            <EssayDropdown />
          </div>
          <div className="dark:text-lowTeal text-lowTeal text-center mt-2 ml-auto mr-auto">
            <ProjectDropdown />
          </div>
          <div className="dark:text-lowTeal text-lowTeal text-center mt-2 ml-auto mr-auto">
            <Religion />
          </div>   
        </div>
      )}

      <div className={`hamburger-menu ${window.innerWidth > 400 ? 'hidden' : 'inline-block bg-lowTeal dark:bg-lowTeal'}`}>
        <button onClick={toggleMobileMenu}>
          <GiHamburgerMenu size={25} />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
