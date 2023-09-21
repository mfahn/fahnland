import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';

function Nefarious() {
    return (
<div className="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg dark:text-bg-gray dark:bg-navy">
  <div className="lg:w-4/5 sm:w-7/8 m-auto">
    <div className="text-2xl font-bold text-center">Nefarious: A Movie Review</div>
    <p className="text-sm text-center text-dark dark:text-bg-gray p-5">
      Michael Fahnlander 9/3/23
    </p>
    <div className="text-lg font-bold text-center">My Review</div>
    <div classNameName="video-responsive m-auto">
      <iframe 
      src={`https://www.youtube.com/embed/_76ajCb5E4g`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className='w-1/2 h-1/6'
    />
  </div>
  <p className="text-sm text-center text-dark dark:text-bg-gray p-5">
      Nefarious is one of the most accurate, damndest, and unsettling interpretations of demonic possession since at least the Exorcism of Emil Rose. It accurately depicts . It depicts how the faltering of the priesthood away from the established traditions of the Catholic Church into wokeness . On . This is not a happy, feel-good Christian movie. It is a dark movie without being needlessly so. The modern, "enlightened" person does recognize the battle that rages around them. It interestingly portrays the growing struggle between the traditional Catholic church that retains its mission and values from Christ, even through the centuries, and the modern church that emphasizes inclusivity . That is a topic for another day, however I will say that the more the church and her priests deviate from the explicit mission of bringing people to God, the less of God's authority they can expect to wield. There is a great scene that exemplifies this.

      The movie does justice to Satan's point of view. Anyone who is not familiar with Theology (the study of God) can understand the points of view of the characters, and it is an excellent crashcourse to the background conflift on which this movie is predecated without being preachy or cringe.
  </p>
  <div className="text-lg font-bold text-center">Response to Criticism</div>
  <p className="text-sm text-center text-dark dark:text-bg-gray p-5">
    I have heard a number of criticism of the movie Nefarious including that it is not representative of the battle between God and Satan, and that the directors and creators of the movie are Mormans and thus do not and cannot understand . 
    
    Discussion of what the movie is
  </p>
  </div>
</div>
    );
}

export default Nefarious;