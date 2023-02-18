import React from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';

function Religion() {
    return (
<div class="block text-xl">
    <div class=" ring-dark hover:ring-lowTeal hover:text-lowTeal p-2 ml-1 mr-1 dark:{'ring', 'ring-lowTeal', 'hover:ring-midTeal', 'hover:text-teal'}"><Link to="https://jesusisreal-stl.org/">Proof of Jesus</Link></div>
    <div class=" ring-dark hover:ring-lowTeal hover:text-lowTeal p-2 ml-1 mr-1 dark:{'ring', 'ring-lowTeal', 'hover:ring-midTeal', 'hover:text-teal'}"><Link to="http://www.therealpresence.org/">Jesus</Link></div>
    <div class=" ring-dark hover:ring-lowTeal hover:text-lowTeal p-2 ml-1 mr-1 dark:{'ring', 'ring-lowTeal', 'hover:ring-midTeal', 'hover:text-teal'}"><Link to="http://www.miracolieucaristici.org/en/Liste/list.html">Eucharistic Miracles</Link></div>
    <div class=" ring-dark hover:ring-lowTeal hover:text-lowTeal p-2 ml-1 mr-1 dark:{'ring', 'ring-lowTeal', 'hover:ring-midTeal', 'hover:text-teal'}"><Link to="http://www.carloacutis.com/en/association/presentazione">Blessed Carlos Acutis</Link></div>
</div>
    );
}

export default Religion;