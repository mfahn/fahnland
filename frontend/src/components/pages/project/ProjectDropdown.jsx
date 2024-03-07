import { ProjectMenuItems } from './ProjectMenuItems';
import { Link } from 'react-router-dom';

function ProjectDropdown() {
    return (
<ul className='fixed'>
    {ProjectMenuItems.map((item,index) => {
        return (
            <li className='bg-bg-gray dark:bg-navy dark:hover:text-bg-gray hover:text-midTeal text-xl p-1 px-2' key={index}>
                <Link to={item.path}>{item.title}</Link>
            </li>
        );
    })}
</ul>
    );
}

export default ProjectDropdown;