import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillCaretDownFill, BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImHome } from 'react-icons/im';
import CampDropdown from './pages/camp/CampDropdown';
import EssayDropdown from './pages/essay/EssayDropdown';
import ProjectDropdown from './pages/project/ProjectDropdown';
import InfoSecDropdown from './pages/infosec/InfoSecDropdown';

function NavBar({handleThemeSwitch}) {
  const [theme, setTheme] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

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

  const handleNavbarTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    handleThemeSwitch();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdown = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleMobileDropdown = (dropdownName) => {
    setActiveMobileDropdown(dropdownName);
  };

  return (
    <div className="text-lowTeal dark:bg-navy bg-bg-gray ml-auto mr-auto text-center font-bold w-4/5 rounded-lg">
      <div className={window.outerWidth < 900 ? 'hidden' : 'inline-block text-center ml-1 text-2xl'}>
        
        <Link to='/' className='inline-block'><ImHome size={25}/></Link>
        
        {[
          { name: 'Traveling', component: <CampDropdown /> },
          { name: 'InfoSec', component: <InfoSecDropdown /> },
          { name: 'Essays', component: <EssayDropdown /> },
          { name: 'Projects', component: <ProjectDropdown /> },
        ].map((dropdown, index) => (
          <div key={index} className="inline-block mx-1 p-1">
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

        <Link to='/religion' className='inline-block ml-1 p-1 dark:hover:ring-midTeal'>Religion</Link>

        <div className='inline-block pt-1 p-1'>
          <button onClick={handleNavbarTheme}>
            {theme === "dark" ? <BsFillSunFill size={25} /> : <BsMoonStarsFill size={25} />}
          </button>
        </div>
      </div>

      <div className={window.outerWidth < 900 ? 'text-lowTeal bg-grey dark:bg-navy text-center mt-2 text-lg ml-auto w-full rounded-lg' : 'hidden'}>
        <Link to='/' className='inline-block'><ImHome size={25}/></Link>
        <button className='inline-block pt-1 p-1' onClick={handleNavbarTheme}>
            {theme === "dark" ? <BsFillSunFill size={25} /> : <BsMoonStarsFill size={25} />}
        </button>
        <div className='inline-block'>
          <button onClick={toggleMobileMenu}>
            <GiHamburgerMenu className="inline-block text-lowTeal align-right" size={25} />
          </button>
        </div>
        <div className={isMobileMenuOpen ? 'grid grid-cols-1' : 'hidden'}>
          {[
          { name: 'Traveling', component: <CampDropdown /> },
          { name: 'InfoSec', component: <InfoSecDropdown /> },
          { name: 'Essays', component: <EssayDropdown /> },
          { name: 'Projects', component: <ProjectDropdown /> },
          ].map((dropdown, index) => (
          <div key={index} className="inline-block mx-1 p-1">
            <button
              key={index}
              className='nav-item'
              onClick={() => handleMobileDropdown(dropdown.name)}
            >
            <div className='nav-links inline-block ml-1'>    
              {dropdown.name}<BsFillCaretDownFill className='inline-block' />
            </div>
            {activeMobileDropdown === dropdown.name ? dropdown.component : null}
            </button>
          </div>

          ))}            
          <Link to='/religion' className='inline-block ml-1 p-1 dark:hover:ring-midTeal'>Religion</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
