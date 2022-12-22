import React from 'react';
//import { a } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function Top() {
    return (
        <Link class="justify-center flex items-center text-center bg-white text-navy font-semibold dark:{'justify-center', 'flex items-center', 'text-center', 'bg-navy', 'text-midTeal', 'font-semibold'}" id="hmenu">
            <Link class="text-xl ring ring-dark hover:ring-lowTeal hover:text-lowTeal p-2 ml-1 mr-1 dark:{'text-xl', 'ring', 'ring-lowTeal', 'hover:ring-midTeal',  'hover:text-teal', 'p-2', 'ml-1', 'mr-1'}" to="/">Home</Link>
        </Link>
    );
}

export default Top