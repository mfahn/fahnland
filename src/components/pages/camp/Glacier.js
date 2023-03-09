import React from 'react';
import '../../../App.css';
import lake from '../../images/glacier/lake.jpg';
import spot from '../../images/glacier/spot.jpg';
import mountainPeakLake from '../../images/glacier/mountainPeakLake.jpg';
import waterfall from '../../images/glacier/waterfall.jpg';
import windingRiver from '../../images/glacier/windingRiver.jpg';

function Glacier(){
    return(
<div class="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg text-center dark:text-bg-gray dark:bg-navy">
    <h1 class="text-lg font-bold">Glacier National Park</h1>
    <div class="w-4/5 mr-auto ml-auto">
        My friends and I planned a backpacking trip to Glacier National Park. This was an outstanding trip full of once in a lifetime views. The best water in the world comes from melting snow in the mountains. Swimming in that water will also give you the shock of your life, especially if you stand under a waterfall of it.
    </div>
    <div class='w-4/5 ml-auto mr-auto'>
        <img src={lake} alt="" title="Lake"></img>
        <img src={spot} alt="" title="Cool Spot"></img>
        <img src={mountainPeakLake} alt="" title="Mountain Peak"></img>
        <img src={waterfall} alt="" title="Waterfall"></img>
        <img src={windingRiver} alt="" title="River"></img>
    </div>
</div>
    );
}
export default Glacier
