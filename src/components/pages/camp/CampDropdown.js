import '../../../App.css';
import { CampMenuItems } from './CampMenuItems';
import { Link } from 'react-router-dom';

function CampDropdown() {

    return (
<div class="fixed">
    <ul>
        {CampMenuItems.map((item,index) => {
            return (
                <li class="bg-bg-gray text-dark hover:text-midTeal text-lg" key={index}>
                    <Link className={item.cName} to={item.path}>{item.title}</Link>
                </li>
            );
        })}
    </ul>
</div>
    );
}

export default CampDropdown;