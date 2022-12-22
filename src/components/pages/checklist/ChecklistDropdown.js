import React, { useState } from 'react';
import '../../../App.css';
import { ChecklistMenuItems } from './ChecklistMenuItems';
import { Link } from 'react-router-dom';

function ChecklistDropdown() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
<ul onClick={handleClick} className={click ? 'checklist-dropdown-menu clicked' : 'checklist-dropdown-menu'}>
    {ChecklistMenuItems.map((item,index) => {
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

export default ChecklistDropdown;