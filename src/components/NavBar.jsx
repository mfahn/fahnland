import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import CampDropdown from './pages/camp/CampDropdown';
import ChecklistDropdown from './pages/infosec/InfoSecDropdown';
import EssayDropdown from './pages/essay/EssayDropdown';
import ProjectDropdown from './pages/project/ProjectDropdown';
import { BsFillCaretDownFill, BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { GiHamburgerMenu } from 'react-icons/gi';

function NavBar() {
    const [theme, setTheme] = useState(null);
    const [navbar, setNavbar] = useState(false);
    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, [])

    useEffect(()=>{
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light": "dark");
    };

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [campDropdown, setCampDropdown] = useState(false);
    const [checklistDropdown, setChecklistDropdown] = useState(false);
    const [essayDropdown, setEssayDropdown] = useState(false);
    const [projectDropdown, setProjectDropdown] = useState(false);

    const onCampMouseEnter = () => {
        if(window.innerWidth < 860){
            setCampDropdown(false);
        } else{
            setCampDropdown(true);
        }
    }
    const onCampMouseLeave = () => {
        if(window.innerWidth < 860){
            setCampDropdown(false);
        } else{
            setCampDropdown(false);
        }
    }

    const onChecklistMouseEnter = () => {
        if(window.innerWidth < 860){
            setChecklistDropdown(false);
        } else{
            setChecklistDropdown(true);
        }
    }
    const onChecklistMouseLeave = () => {
        if(window.innerWidth < 860){
            setChecklistDropdown(false);
        } else{
            setChecklistDropdown(false);
        }
    }

    const onEssayMouseEnter = () => {
        if(window.innerWidth < 860){
            setEssayDropdown(false);
        } else{
            setEssayDropdown(true);
        }
    }
    const onEssayMouseLeave = () => {
        if(window.innerWidth < 860){
            setEssayDropdown(false);
        } else{
            setEssayDropdown(false);
        }
    }

    const onProjectMouseEnter = () => {
        if(window.innerWidth < 860){
            setProjectDropdown(false);
        } else{
            setProjectDropdown(true);
        }
    }
    const onProjectMouseLeave = () => {
        if(window.innerWidth < 860){
            setProjectDropdown(false);
        } else{
            setProjectDropdown(false);
        }
    }

    const closeMobileMenu = () => setClick(false);
    const windowMode = () => {
        if(window.innerWidth < 860){
            document.getElementById("navbar").document.documentElement.classList.add("hidden")
        }
    }

    return (
<>
<div className='navbar' class='text-lowTeal text-center mt-2 text-2xl ml-auto mr-auto w-4/5 bg-bg-gray dark:bg-navy rounded-lg'>
    <div id="navbar" class="sm:hidden" className={click ? 'nav-menu active' : 'nav-menu'}>

        <div class="inline-block ml-1 p-2 dark:hover:ring-offset-midTeal">
            <div><Link to='/' className='navbar-home'>Home</Link></div>
        </div>

        <div class="inline-block ml-1 p-2 dark:hover:ring-offset-midTeal">
            <button className='nav-item' onMouseEnter={onCampMouseEnter} onMouseLeave={onCampMouseLeave} onTouchStart={setCampDropdown}>
                <div className='nav-links'>Traveling<BsFillCaretDownFill class='inline-block'/></div>
                {campDropdown && <CampDropdown />}
            </button>
        </div>

        <div class="inline-block ml-1 p-2 dark:hover:ring-offset-midTeal">
            <button className='nav-item' onMouseEnter={onChecklistMouseEnter} onMouseLeave={onChecklistMouseLeave} onTouchStart={setChecklistDropdown}>
                <div className='nav-links'>InfoSec<BsFillCaretDownFill class='inline-block'/></div>
                {checklistDropdown && <ChecklistDropdown />}
            </button>
        </div>

        <div class="inline-block ml-1 p-2 dark:hover:ring-offset-midTeal">
            <button className='nav-item' onMouseEnter={onEssayMouseEnter} onMouseLeave={onEssayMouseLeave} onTouchStart={setEssayDropdown}>
                <div className='nav-links'>Essays<BsFillCaretDownFill class='inline-block'/></div>
                {essayDropdown && <EssayDropdown />}
            </button>
        </div>

        <div class="inline-block ml-1 p-2 dark:hover:ring-offset-midTeal">
            <button className='nav-item' onMouseEnter={onProjectMouseEnter} onMouseLeave={onProjectMouseLeave} onTouchStart={setProjectDropdown}>
                <div className='nav-links'>Projects<BsFillCaretDownFill class='inline-block'/></div>
                {projectDropdown && <ProjectDropdown />}
            </button>
        </div>

        <div class="inline-block ml-1 p-2 dark:hover:ring-offset-midTeal">
            <div><Link to='/religion' className='navbar-religion'>Religion</Link></div>
        </div>

        <div class="ml-1 p-2 dark:hover:ring-offset-midTeal inline-block dark:hidden">
            <button onClick={handleThemeSwitch}><BsMoonStarsFill size={25}/></button>
        </div>

        <div class="ml-1 p-2 dark:hover:ring-offset-midTeal hidden dark:inline-block">
            <button onClick={handleThemeSwitch}><BsFillSunFill size={25}/></button>
        </div>
    </div>


   </div>
</>
    );
}

export default NavBar;