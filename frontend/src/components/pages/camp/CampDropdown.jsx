import { CampMenuItems } from './CampMenuItems';
import { Link } from 'react-router-dom';

function CampDropdown() {

    return (
<div className='fixed'>
    <ul>
        {CampMenuItems.map((item,index) => {
            return (
                <li className='bg-bg-gray dark:bg-navy dark:hover:text-bg-gray hover:text-midTeal text-xl p-1 px-2' key={index}>
                <Link className={item.cName} to={item.path}>{item.title}</Link>
                </li>
            );
        })}
    </ul>
</div>
    );
}

export default CampDropdown;