import React from 'react';
import sunset from '../../images/camp/lakeSunset.jpg';
import stream from '../../images/camp/stream.jpg';
import storm from '../../images/camp/storm.jpg';
import sunrise from '../../images/camp/sunrise.jpg';

function Medora(){
    return(
<div class="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg  dark:text-bg-gray dark:bg-navy">
    <h1 class="text-lg text-center font-bold">Medora</h1>

    <div class="w-4/5 m-auto">
        <h4>My family and I camped and hiked in Medora, South Dakota. All photos on are taken on my phone camera. It's not a trick of your imagination, Medora, North Dakota is just that beautiful.</h4>
    </div>
    <div id="slider" class="lg:w-2/5 md:w-3/5 xl:2/5 sm:w-4/5 ml-auto mr-auto">
        <img src={sunset} alt="" title="Sunset"></img>
        <img src={stream} alt="" title="Stream"></img>
        <img src={storm} alt="" title="Storm"></img>
        <img src={sunrise} alt="" title="Sunrise"></img>
    </div>

</div>
    );
}
export default Medora;