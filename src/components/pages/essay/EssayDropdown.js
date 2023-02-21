import '../../../App.css';
import { EssayMenuItems } from './EssayMenuItems';
import { Link } from 'react-router-dom';

function EssayDropdown() {

    return (
<div class="fixed">
<ul>
    {EssayMenuItems.map((item,index) => {
        return (
            <li class="bg-bg-gray text-dark hover:text-midTeal text-lg text-center p-1" key={index}>
                <Link className={item.cName} to={item.path}> {item.title} </Link>
            </li>
        );
    })}
</ul>
</div>
    );
}

export default EssayDropdown;