import Socials from '../Socials';

import headshot from '../../assets/images/josh.png';

import './HomeCover.scss';

export default function HomeCover () {
  const chevronDown = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> </svg>

  return (
    <>
    <div className='home-cover'>
      <img className='headshot-img' src={headshot} />
      <div className='cover-content'>
        <h1 className='cover-greeting'>Hi 👋 I'm Josh.</h1>
        <span className='cover-bio'>Software Engineer, Athlete, Lifelong Learner</span>
        <Socials />

      </div>
    </div>
    {/*<div className="down-container">
      {chevronDown}
    </div>*/}
    </>
  );
}
