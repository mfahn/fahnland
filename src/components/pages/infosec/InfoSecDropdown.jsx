import '../../../App.css';
import { InfoSecMenuItems } from './InfoSecMenuItems';
import { Link } from 'react-router-dom';

function InfoSecDropdown() {

    return (
<div class="fixed">
<ul>
    {InfoSecMenuItems.map((item,index) => {
        return (
            <li class="bg-bg-gray text-dark hover:text-midTeal text-lg p-1" key={index}>
                <Link 
                className={item.cName} 
                to={item.path}
                >{item.title}</Link>
            </li>
        );
    })}
</ul>
</div>
    );
}

export default InfoSecDropdown;