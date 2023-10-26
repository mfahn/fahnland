import '../../../App.css';
import { InfoSecMenuItems } from './InfoSecMenuItems';
import { Link } from 'react-router-dom';

function InfoSecDropdown() {

    return (
<div className='fixed'>
<ul>
    {InfoSecMenuItems.map((item,index) => {
        return (
            <li className='bg-bg-gray text-lowTeal dark:bg-navy dark:text-lowTeal dark:hover:text-bg-gray hover:text-midTeal text-lg p-1' key={index}>
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