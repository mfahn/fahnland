import React, { useState } from 'react';
import '../../../App.css';
import { ReligionMenuItems } from './ReligionMenuItems';
import { Link } from 'react-router-dom';

function ReligionDropdown() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
<ul onClick={handleClick} className={click ? 'religion-dropdown-menu clicked' : 'religion-dropdown-menu'}>
    {ReligionMenuItems.map((item,index) => {
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
    );
}
    
export default ReligionDropdown;