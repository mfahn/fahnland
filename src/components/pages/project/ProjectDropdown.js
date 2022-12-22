import React, { useState } from 'react'
import '../../../App.css'
import { ProjectMenuItems } from './ProjectMenuItems'
import { Link } from 'react-router-dom';

function ProjectDropdown() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
<ul onClick={handleClick} className={click ? 'project-dropdown-menu clicked' : 'project-dropdown-menu'}>
    {ProjectMenuItems.map((item,index) => {
        return (
            <li class="bg-bg-gray text-dark hover:text-midTeal text-lg -z-20" key={index}>
                <Link 
                className={item.cName} 
                to={item.path} 
                onClick={() => setClick(false)}
                >{item.title}</Link>
            </li>
        );
    })}
</ul>
    );
}

export default ProjectDropdown;