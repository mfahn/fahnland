import React, { useState } from 'react';
import '../../../App.css';
import { CampMenuItems } from './CampMenuItems';
import { Link } from 'react-router-dom';

function CampDropdown() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
<div class="fixed">
<ul onClick={handleClick} className={click ? 'camp-dropdown-menu clicked' : 'camp-dropdown-menu'}>
    {CampMenuItems.map((item,index) => {
        return (
            <li class="bg-bg-gray text-dark hover:text-midTeal text-lg" key={index}>
                <Link 
                className={item.cName} 
                to={item.path} 
                onClick={() => setClick(false)}
                >{item.title}</Link>
            </li>
        );
    })}
</ul>
</div>
    );
}

export default CampDropdown;