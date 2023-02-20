import React, { useState } from 'react';
import '../../../App.css';
import { EssayMenuItems } from './EssayMenuItems';
import { Link } from 'react-router-dom';

function EssayDropdown() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
<div class="fixed">
<ul onClick={handleClick} className={click ? 'essay-dropdown-menu clicked' : 'essay-dropdown-menu'}>
    {EssayMenuItems.map((item,index) => {
        return (
            <li class="bg-bg-gray text-dark hover:text-midTeal text-lg text-center p-1" key={index}>
                <Link className={item.cName} to={item.path} onClick={() => setClick(false)}> {item.title} </Link>
            </li>
        );
    })}
</ul>
</div>
    );
}

export default EssayDropdown;