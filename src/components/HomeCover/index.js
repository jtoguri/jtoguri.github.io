import Socials from '../Socials';

import headshot from '../../assets/images/josh.png';

import './HomeCover.scss';

export default function HomeCover () {
  return (
    <div className='home-cover'>
      <img className='headshot-img' src={headshot} />
      <div className='cover-content'>
        <h1 className='cover-greeting'>Hi 👋 I'm Josh.</h1>
        {/*<p>
          I'm a software engineer with experience in
          engineering sales and a degree in Biological 
          Engineering. After deciding to transition into software
          development, I completed a full-stack web development bootcamp.
          Currently, I am working as the sole developer at a small
          manufacturing start-up.
        </p>*/}
        <span className='cover-bio'>Software Engineer, Athlete, Lifelong Learner</span>
        <Socials />
      </div>
    </div>

  );
}