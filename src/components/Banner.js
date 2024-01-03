import React from 'react';
import Image from '../assets/avatar.svg';
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section className='section' id='home'>
      <div className='container mx-auto'>
        {/* Text */}
        <div>
          <h1>
            KEERTHI <span>MAHADEV</span>
          </h1>
          <div className='mb-6 text-[36px] 1g:text-[60px) font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation
              sequence={[
                'Developer',
                2000,
                'Designer',
                2000,
                'Designer',
                2000,
                'Youtuber',
                2000,
              ]}
              speed={50}
              className='☐ text-accent'
              wrapper='span'
              repeat={Infinity}
            />
          </div>
          <p>

          </p>
          <div>
            <button className='btn btn-lg'>Contact me</button>
            <a href='#' className='text-gradient btn-link'>

               My Portfolio

            </a>
          </div>
        </div>

        {/* Image */}
        <div>
          <img src={Image} alt='Avatar' />
        </div>
      </div>
    </section>
  );
};

export default Banner;
