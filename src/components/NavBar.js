import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import CampDropdown from './pages/camp/CampDropdown';
import ChecklistDropdown from './pages/checklist/ChecklistDropdown';
import EssayDropdown from './pages/essay/EssayDropdown';
import ProjectDropdown from './pages/project/ProjectDropdown';
import { BsFillCaretDownFill, BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

function NavBar() {
    const [theme, setTheme] = useState(null);

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
        if(window.innerWidth < 960){
            setCampDropdown(false);
        } else{
            setCampDropdown(true);
        }
    }
    const onCampMouseLeave = () => {
        if(window.innerWidth < 960){
            setCampDropdown(false);
        } else{
            setCampDropdown(false);
        }
    }

    const onChecklistMouseEnter = () => {
        if(window.innerWidth < 960){
            setChecklistDropdown(false);
        } else{
            setChecklistDropdown(true);
        }
    }
    const onChecklistMouseLeave = () => {
        if(window.innerWidth < 960){
            setChecklistDropdown(false);
        } else{
            setChecklistDropdown(false);
        }
    }

    const onEssayMouseEnter = () => {
        if(window.innerWidth < 960){
            setEssayDropdown(false);
        } else{
            setEssayDropdown(true);
        }
    }
    const onEssayMouseLeave = () => {
        if(window.innerWidth < 960){
            setEssayDropdown(false);
        } else{
            setEssayDropdown(false);
        }
    }

    const onProjectMouseEnter = () => {
        if(window.innerWidth < 960){
            setProjectDropdown(false);
        } else{
            setProjectDropdown(true);
        }
    }
    const onProjectMouseLeave = () => {
        if(window.innerWidth < 960){
            setProjectDropdown(false);
        } else{
            setProjectDropdown(false);
        }
    }

    const closeMobileMenu = () => setClick(false);

    return (
<>
<div className='navbar' class='text-lowTeal text-center mt-2 text-2xl ml-auto mr-auto w-4/5 dark:bg-navy rounded-lg'>
    <div className={click ? 'nav-menu active' : 'nav-menu'}>

        <div class="inline-block ml-1 p-2 dark:hover:ring-offset-midTeal">
            <div onClick={closeMobileMenu}><Link to='/' className='navbar-home'>Home</Link></div>
        </div>

        <div class="inline-block ml-1 p-2 dark:hover:ring-offset-midTeal">
            <div className='nav-item' onMouseEnter={onCampMouseEnter} onMouseLeave={onCampMouseLeave} onClick={closeMobileMenu} onTouchStartCapture={onCampMouseEnter}>
                <div className='nav-links'>Camping<BsFillCaretDownFill class='inline-block'/></div>
                {campDropdown && <CampDropdown />}
            </div>
        </div>

        <div class="inline-block ml-1 p-2 dark:hover:ring-offset-midTeal">
            <div className='nav-item' onMouseEnter={onChecklistMouseEnter} onMouseLeave={onChecklistMouseLeave} onClick={closeMobileMenu}>
                <div className='nav-links'>Checklists<BsFillCaretDownFill class='inline-block'/></div>
                {checklistDropdown && <ChecklistDropdown />}
            </div>
        </div>

        <div class="inline-block ml-1 p-2 dark:hover:ring-offset-midTeal">
            <div className='nav-item' onMouseEnter={onEssayMouseEnter} onMouseLeave={onEssayMouseLeave} onClick={closeMobileMenu}>
                <div className='nav-links'>Essays<BsFillCaretDownFill class='inline-block'/></div>
                {essayDropdown && <EssayDropdown />}
            </div>
        </div>

        <div class="inline-block ml-1 p-2 dark:hover:ring-offset-midTeal">
            <div className='nav-item' onMouseEnter={onProjectMouseEnter} onMouseLeave={onProjectMouseLeave} onClick={closeMobileMenu}>
                <div className='nav-links'>Projects<BsFillCaretDownFill class='inline-block'/></div>
                {projectDropdown && <ProjectDropdown />}
            </div>
        </div>

        <div class="inline-block ml-1 p-2 dark:hover:ring-offset-midTeal">
            <div onClick={closeMobileMenu}><Link to='/religion' className='navbar-religion'>Religion</Link></div>
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