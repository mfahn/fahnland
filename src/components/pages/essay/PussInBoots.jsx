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
      <iframe className="lg:w-3/5 h-auto sm:w-7/8 m-auto" 
      src={`https://www.youtube.com/embed/RqrXhwS33yc`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>

  <div className="text-sm text-dark dark:text-bg-gray p-5">
    This was a movie that I never would have sat down and watched were it not for the requests of my younger siblings, but I was pleasantly surprised and impressed by how a well-known character was adapted into a legitimately compelling movie. It also has one of the coolest villain introductions that I can remember. In short, this is a short, spoiler-free movie review of Puss in Boots: The Last Wish that no one asked for, but I am doing anyway. To begin with, this movie avoids one major pitfall that commonly annoys viewers, and that is politics. There are no preachy political perspectives, and I as a viewer am greatful for that. Too many directors want to put their own spin on a story, or use a movie to push their own beliefs, and it inevitably damages the story and alienates viewers. In general, it is best not to take sides and focus on compelling characters, understandable motivations, and conflict for them to overcome. Anyway, I digress. If you want legitimately insightful movie critiques in a sick Scotish accent, check out <Link className='text-lowTeal underline hover:text-midTeal' to='https://www.youtube.com/c/TheCriticalDrinker'>The Drinker</Link> on YouTube. 
    </div>

    <p className="text-sm text-dark dark:text-bg-gray p-5">
      The story is replete with recognizable characters from various childrens books and stories and are integrated into the movie in a creative way. The main characters are dope and balanced well with each other. Side characters do not take the spotlight too much but still get solid backstory and improve the story even more. Every character is purposeful, and there are no "extras", or pointless characters that take up space without adding to the story.
    </p>

    <p className="text-sm text-dark dark:text-bg-gray p-5">
      As the movie progresses, the audience comes to understand how the villain presents more than just an obstacle for the hero to conquer. It haunts and hunts Puss so that the viewer always wonders what will happen. The journey that the main characters undergo certainly applies to real life, and there are solid lessons that moviegoers can walk away with.
    </p>
  </div>
</div>
    );
}

export default PussInBoots;