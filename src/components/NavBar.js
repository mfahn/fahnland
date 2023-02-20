import React, { useState } from 'react';
import '../App.css';
import { Link, Outlet } from 'react-router-dom';
import CampDropdown from './pages/camp/CampDropdown';
import ChecklistDropdown from './pages/checklist/ChecklistDropdown';
import EssayDropdown from './pages/essay/EssayDropdown';
import ProjectDropdown from './pages/project/ProjectDropdown';
import Religion from './pages/religion/Religion';
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillCaretDownFill, BsFillCaretUpFill, BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [navigation, setNavigation] = useState(false);
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

    const mobileMenu = () => {
        if(window.innerWidth < 960){
            setNavigation(false);
        } else{
            setNavigation(true);
        }
    }

    return (
<>
<div className='navbar' class='text-lowTeal text-center mt-2 text-2xl ml-auto mr-auto w-3/4'>
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

        <div class="inline-block hover:bg-bg-gray ml-1 mr-1 p-2">
            <li  onClick={closeMobileMenu}><Link to='/' className='navbar-home'>Home</Link></li>
        </div>

        <div class="inline-block hover:bg-bg-gray ml-1 mr-1 p-2">
            <li className='nav-item' onMouseEnter={onCampMouseEnter} onMouseLeave={onCampMouseLeave} onClick={closeMobileMenu}>
            <Link className='nav-links'>Camping<BsFillCaretDownFill class='inline-block'/></Link>
            {campDropdown && <CampDropdown />}
        </li>
        </div>

        <div class="inline-block hover:bg-bg-gray ml-1 mr-1 p-2">
            <li className='nav-item' onMouseEnter={onChecklistMouseEnter} onMouseLeave={onChecklistMouseLeave} onClick={closeMobileMenu}>
            <Link className='nav-links'>Checklists<BsFillCaretDownFill class='inline-block'/></Link>
            {checklistDropdown && <ChecklistDropdown />}
        </li>
        </div>

        <div class="inline-block hover:bg-bg-gray ml-1 mr-1 p-2">
            <li className='nav-item' onMouseEnter={onEssayMouseEnter} onMouseLeave={onEssayMouseLeave} onClick={closeMobileMenu}>
            <Link className='nav-links'>Essays<BsFillCaretDownFill class='inline-block'/></Link>
            {essayDropdown && <EssayDropdown />}
        </li>
        </div>

        <div class="inline-block hover:bg-bg-gray ml-1 mr-1 p-2">
            <li className='nav-item' onMouseEnter={onProjectMouseEnter} onMouseLeave={onProjectMouseLeave} onClick={closeMobileMenu}>
                <Link className='nav-links'>Projects<BsFillCaretDownFill class='inline-block'/></Link>
                {projectDropdown && <ProjectDropdown />}
            </li>
        </div>

        <div class="inline-block hover:bg-bg-gray ml-1 mr-1 p-2">
            <li onClick={closeMobileMenu}><Link to='/religion' className='nav-links'>Religion</Link></li>
        </div>

        <div class="inline-block hover:bg-bg-gray ml-1 mr-1 p-2 dark:inline-block">
            <li><BsMoonStarsFill /></li>
        </div>

        <div class="inline-block hover:bg-bg-gray ml-1 mr-1 p-2 dark:hidden">
            <li><BsFillSunFill/></li>
        </div>

        <div class="inline-block hover:bg-bg-gray ml-1 mr-1 p-2">
            <li onClick={handleClick}><GiHamburgerMenu /></li>
        </div>
    </ul>
</div>
</>
    );
}

export default NavBar;