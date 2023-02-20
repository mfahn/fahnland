import React, { useState } from 'react';
import '../../../App.css';
import { EssayMenuItems } from './EssayMenuItems';
import { Link } from 'react-router-dom';

function EssayDropdown() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
<ul onClick={handleClick} className={click ? 'essay-dropdown-menu clicked' : 'essay-dropdown-menu'}  class="hover:bg-bg-gray ml-2 mr-2 p-2 fixed">
    {EssayMenuItems.map((item,index) => {
        return (
            <li class="bg-bg-gray text-dark hover:text-midTeal text-lg text-center" key={index}>
                <Link className={item.cName} to={item.path} onClick={() => setClick(false)}> {item.title} </Link>
            </li>
        );
    })}
</ul>
    );
}

export default EssayDropdown;