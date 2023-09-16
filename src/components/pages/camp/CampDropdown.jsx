import '../../../App.css';
import { CampMenuItems } from './CampMenuItems';
import { Link } from 'react-router-dom';

function CampDropdown() {

    return (
<div className='fixed'>
    <ul>
        {CampMenuItems.map((item,index) => {
            return (
                <li className='bg-bg-gray text-dark hover:text-midTeal text-lg p-1' key={index}>
                    <Link className={item.cName} to={item.path}>{item.title}</Link>
                </li>
            );
        })}
    </ul>
</div>
    );
}

export default CampDropdown;