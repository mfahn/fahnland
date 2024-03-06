import { EssayMenuItems } from './EssayMenuItems';
import { Link } from 'react-router-dom';

function EssayDropdown() {

    return (
<div className='fixed'>
<ul>
    {EssayMenuItems.map((item,index) => {
        return (
            <li className='bg-bg-gray text-lowTeal dark:bg-navy dark:text-lowTeal dark:hover:text-bg-gray hover:text-midTeal text-lg p-1' key={index}>
                <Link className={item.cName} to={item.path}> {item.title} </Link>
            </li>
        );
    })}
</ul>
</div>
    );
}

export default EssayDropdown;