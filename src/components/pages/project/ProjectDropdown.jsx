import '../../../App.css';
import { ProjectMenuItems } from './ProjectMenuItems';
import { Link } from 'react-router-dom';

function ProjectDropdown() {
    return (
<ul className='fixed'>
    {ProjectMenuItems.map((item,index) => {
        return (
            <li className='bg-bg-gray text-lowTeal dark:bg-navy dark:text-lowTeal dark:hover:text-bg-gray hover:text-midTeal text-lg p-1' key={index}>
                <Link to={item.path}>{item.title}</Link>
            </li>
        );
    })}
</ul>
    );
}

export default ProjectDropdown;