import React from 'react';
import sunset from '../../images/camp/lakeSunset.jpg';
import stream from '../../images/camp/stream.jpg';
import storm from '../../images/camp/storm.jpg';
import sunrise from '../../images/camp/sunrise.jpg';


function Minnesota(){
    return(
<div>
    <div id="slider" class="w-1/5">
        <img src={sunset} title="Sunset"></img>
        <img src={stream} title="Stream"></img>
        <img src={storm} title="Storm"></img>
        <img src={sunrise} title="Sunrise"></img>
    </div>
    <div>
        <h4>My family and I camped and hiked in Medora, South Dakota. All photos on are taken on my phone camera. It's not a trick of your imagination, South Dakota and Minnesota are just that beautiful.</h4>
    </div>
</div>
    );
}
export default Minnesota;