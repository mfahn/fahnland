import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillCaretDownFill, BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { GiHamburgerMenu } from 'react-icons/gi';
import CampDropdown from './pages/camp/CampDropdown';
import ChecklistDropdown from './pages/infosec/InfoSecDropdown';
import EssayDropdown from './pages/essay/EssayDropdown';
import ProjectDropdown from './pages/project/ProjectDropdown';
import Religion from './pages/religion/Religion';
import Home from './Home';

function NavBar() {
  const [theme, setTheme] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isBurgerActive, toggleBurger] = useState(false);

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

  const burgerActive = () => {
    toggleBurger(!isBurgerActive);
  }
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleDropdown = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  return (
    <div className={`navbar ${theme === "dark" ? "dark" : ""}`} class='dark:text-lowTeal text-lowTeal text-center mt-2 text-2xl ml-auto mr-auto w-4/5'>
      {isMobileMenuOpen == true && (<div className='navbar-content' class="inline-block ml-1 p-2 dark:hover:ring-offset-midTeal bg-bg-gray dark:bg-navy rounded-lg">
        <div class="inline-block ml-1 p-2 dark:hover:ring-offset-midTeal">
          <Link to='/' className='navbar-home'>Home</Link>
        </div>
        {[
          { name: 'Traveling', component: <CampDropdown /> },
          { name: 'InfoSec', component: <ChecklistDropdown /> },
          { name: 'Essays', component: <EssayDropdown /> },
          { name: 'Projects', component: <ProjectDropdown /> },
        ].map((dropdown, index) => (
          <button
            key={index}
            className='nav-item'
            onMouseEnter={() => handleDropdown(dropdown.name)}
            onMouseLeave={() => handleDropdown(null)}
          >
            <div className='nav-links' class="inline-block ml-1 p-2 dark:hover:ring-offset-midTeal">{dropdown.name}<BsFillCaretDownFill className='inline-block' /></div>
            {isMobileMenuOpen && activeDropdown === dropdown.name ? dropdown.component : null}
          </button>
        ))}
        
        <div class="inline-block ml-1 p-2 dark:hover:ring-offset-midTeal">
          <Link to='/religion' className='navbar-religion'>Religion</Link>
        </div>

        <div className='theme-toggle'>
          <button onClick={handleThemeSwitch}>
            {theme === "dark" ? <BsFillSunFill class="inline-block" size={25} /> : <BsMoonStarsFill class="inline-block" size={25} />}
          </button>
        </div>
      </div>)}

      {isMobileMenuOpen && (
        <div className='mobile-dropdowns' class="text-lowTeal bg-bg-gray dark:bg-navy text-center mt-2 text-md ml-auto mr-auto w-1/5 grid grid-cols-1">
        <div className='hamburger-menu'>
          <button onClick={toggleMobileMenu}>
          {window.innerWidth < 860 && isMobileMenuOpen ? null : <GiHamburgerMenu class="inline-block bg-lowTeal dark:bg-lowTeal" size={25} />}
          </button>
        </div>
          <div class="dark:text-lowTeal text-lowTeal text-center mt-2 ml-auto mr-auto">
            <Home />
          </div>
          <div class="dark:text-lowTeal text-lowTeal text-center mt-2 ml-auto mr-auto">
            <CampDropdown />
          </div>
          <div class="dark:text-lowTeal text-lowTeal text-center mt-2 ml-auto mr-auto">
            <ChecklistDropdown />
          </div>
          <div class="dark:text-lowTeal text-lowTeal text-center mt-2 ml-auto mr-auto">
            <EssayDropdown />
          </div>
          <div class="dark:text-lowTeal text-lowTeal text-center mt-2 ml-auto mr-auto">
            <ProjectDropdown />
          </div>
          <div class="dark:text-lowTeal text-lowTeal text-center mt-2 ml-auto mr-auto">
            <Religion />
          </div>   
        </div>
      )}
    </div>
  );
}

export default NavBar;
