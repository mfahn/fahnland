import React from 'react';
import sunrise from '../../images/woodland-carribou/sunrise.jpg';
import canoe from '../../images/woodland-carribou/canoe.jpg';
import canoeing from '../../images/woodland-carribou/canoeing.jpg';
import canadaBeach from '../../images/woodland-carribou/canadaBeach.jpg';
import dinner from '../../images/woodland-carribou/dinner.jpg';
import sunset from '../../images/woodland-carribou/sunset.jpg';

function WoodlandCarribou(){
    return(
<div class="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg text-center dark:text-bg-gray dark:bg-navy">
    <h1 class="text-lg font-bold">Woodland Carribou</h1>
    <h4 class="w-4/5 ml-auto mr-auto">My friends and I planned and carried out a canoeing trip to Canada. Here are some highlights from the trip. It was a week of great food and exciting fishing. We caught several Northern Pike and a Walleye. Since they were large enough to eat, we battered and fried them for a dinner on the trail. All pictures were taken on my old Samsung Galaxy J3 6V from inside a plastic bag because I was afraid of getting it wet. Google Photos is entirely responsible for the quality of the pictures.</h4>
    <div class='w-3/5 ml-auto mr-auto'>
        <div id="images">
            <img src={canoe} alt="" title="Canoe"></img>
            <img src={canoeing} alt="" title="Canoeing"></img>
            <img src={canadaBeach} alt="" title="Beach in Canada"></img>
            <img src={dinner} alt="" title="Dinner"></img>
            <img src={sunset} alt="" title="Sunset"></img>
            <img src={sunrise} alt="" title="Sunrise"></img>
        </div>
        <div>

        </div>
    </div>
</div>
    );
}
export default WoodlandCarribou
