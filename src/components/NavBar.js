import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import CampDropdown from './pages/camp/CampDropdown'
import ChecklistDropdown from './pages/checklist/ChecklistDropdown'
import EssayDropdown from './pages/essay/EssayDropdown'
import ProjectDropdown from './pages/project/ProjectDropdown'
import ReligionDropdown from './pages/religion/ReligionDropdown'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillCaretDownFill, BsFillCaretUpFill, BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr"

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [navigation, setNavigation] = useState(false);
    const [campDropdown, setCampDropdown] = useState(false);
    const [checklistDropdown, setChecklistDropdown] = useState(false);
    const [essayDropdown, setEssayDropdown] = useState(false);
    const [projectDropdown, setProjectDropdown] = useState(false);
    const [religionDropdown, setReligionDropdown] = useState(false);

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

    const onReligionMouseEnter = () => {
        if(window.innerWidth < 960){
            setReligionDropdown(false);
        } else{
            setReligionDropdown(true);
        }
    }
    const onReligionMouseLeave = () => {
        if(window.innerWidth < 960){
            setReligionDropdown(false);
        } else{
            setReligionDropdown(false);
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
<nav className='navbar' class='text-lowTeal text-center mt-2 text-2xl ml-auto mr-auto'>
    <ul class="items-center text-center" className={click ? 'nav-menu active' : 'nav-menu'}>

        <li class="inline-block clear hover:bg-bg-gray ml-2 mr-2 p-2" onClick={closeMobileMenu}>
            <Link to='/' className='navbar-home'>Home</Link>
        </li>

        <li class="inline-block clear hover:bg-bg-gray ml-2 mr-2 p-2" className='nav-item' onMouseEnter={onCampMouseEnter} onMouseLeave={onCampMouseLeave} onClick={closeMobileMenu}>
            <Link className='nav-links'>Camping<BsFillCaretDownFill class='inline-block'/></Link>
            {campDropdown && <CampDropdown />}
        </li>

        <li class="inline-block clear hover:bg-bg-gray ml-2 mr-2 p-2" className='nav-item' onMouseEnter={onChecklistMouseEnter} onMouseLeave={onChecklistMouseLeave} onClick={closeMobileMenu}>
            <Link className='nav-links'>Checklists<BsFillCaretDownFill class='inline-block'/></Link>
            {checklistDropdown && <ChecklistDropdown />}
        </li>

        <li class="inline-block clear hover:bg-bg-gray ml-2 mr-2 p-2" className='nav-item' onMouseEnter={onEssayMouseEnter} onMouseLeave={onEssayMouseLeave} onClick={closeMobileMenu}>
            <Link className='nav-links'>Essays<BsFillCaretDownFill class='inline-block'/></Link>
            {essayDropdown && <EssayDropdown />}
        </li>

        <li class="inline-block clear hover:bg-bg-gray ml-2 mr-2 p-2" className='nav-item' onMouseEnter={onProjectMouseEnter} onMouseLeave={onProjectMouseLeave} onClick={closeMobileMenu}>
            <Link className='nav-links'>Projects<BsFillCaretDownFill class='inline-block'/></Link>
            {projectDropdown && <ProjectDropdown />}
        </li>

        <li class="inline-block clear hover:bg-bg-gray ml-2 mr-2 p-2" className='nav-item' onMouseEnter={onReligionMouseEnter} onMouseLeave={onReligionMouseLeave} onClick={closeMobileMenu}>
            <Link className='nav-links'>Religion<BsFillCaretDownFill class='inline-block'/></Link>
            {religionDropdown && <ReligionDropdown />}
        </li>

        <li class="inline-block ml-2 mr-2 p-2">
            <BsMoonStarsFill />
        </li>
        <li class="inline-block ml-2 mr-2 p-2">
            <BsFillSunFill/>
        </li>

        <li class="inline-block ml-2 mr-2 p-2" onClick={handleClick}>
            <GiHamburgerMenu />
        </li>
    </ul>
</nav>
        </>
    );
}

export default NavBar;