import React from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';

function Religion() {
    return (
        <div>
            <Link class="block text-xl ring ring-dark hover:ring-lowTeal hover:text-lowTeal p-2 ml-1 mr-1 dark:{'text-xl', 'ring', 'ring-lowTeal', 'hover:ring-midTeal', 'hover:text-teal', 'p-2', 'ml-1', 'mr-1'}" to="https://jesusisreal-stl.org/">Proof of Jesus</Link>
            <Link class="block text-xl ring ring-dark hover:ring-lowTeal hover:text-lowTeal p-2 ml-1 mr-1 dark:{'text-xl', 'ring', 'ring-lowTeal', 'hover:ring-midTeal', 'hover:text-teal', 'p-2', 'ml-1', 'mr-1'}" to="http://www.therealpresence.org/">Jesus</Link>
            <Link class="block text-xl ring ring-dark hover:ring-lowTeal hover:text-lowTeal p-2 ml-1 mr-1 dark:{'text-xl', 'ring', 'ring-lowTeal', 'hover:ring-midTeal', 'hover:text-teal', 'p-2', 'ml-1', 'mr-1'}" to="http://www.miracolieucaristici.org/en/Liste/list.html">Eucharistic Miracles</Link>
            <Link class="block text-xl ring ring-dark hover:ring-lowTeal hover:text-lowTeal p-2 ml-1 mr-1 dark:{'text-xl', 'ring', 'ring-lowTeal', 'hover:ring-midTeal', 'hover:text-teal', 'p-2', 'ml-1', 'mr-1'}" to="http://www.carloacutis.com/en/association/presentazione">Blessed Carlos Acutis</Link>
        </div>
    );
}

export default Religion;