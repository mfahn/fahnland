import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';

function PussInBoots() {
    return (
<div className="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg dark:text-bg-gray dark:bg-navy">
  <div className="lg:w-4/5 sm:w-7/8 m-auto">
    <h1 className="text-2xl font-bold text-center">Puss In Boots: A Movie Review</h1>
    <p className="text-sm text-center text-dark dark:text-bg-gray p-5">
      Michael Fahnlander 9/3/23
    </p>
    <div classNameName="video-responsive">
      <iframe className="lg:w-4/5 sm:w-7/8 m-auto" 
      src={`https://www.youtube.com/embed/RqrXhwS33yc`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>

  <p className="text-sm text-center text-dark dark:text-bg-gray p-5">
    This movie has one of the coolest villain introductions in cinema. As the movie progresses, the audience comes to understand how the villain presents more than just an obstacle for the hero to conquer. The journey that the main characters undergo certainly applies to real life, and there are solid lessons that viewers can walk away with.

    No character is annoying

    There are no explicit and preachy political messages, and I am greatful for that. Too many directors want to put their own spin on a story, and it inevitably damages the integrity of the story and enjoyment of the viewers. Best not to take sides and focus on compelling characters with understandable motivations, and conflict for them to overcome. Anyway, I digress. If you want legitimately insightful movie critiques in a sick Scotish accent, check out <Link to='https://www.youtube.com/c/TheCriticalDrinker'>The Drinker</Link> on YouTube.

    Discussion of what the movie is
  </p>
  </div>
</div>
    );
}

export default PussInBoots;