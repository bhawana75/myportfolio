import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Bhawana Dhamala, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Frontend developers are professionals who are responsible for effectively implementing visual components on a website. 
                They perform front-end development tasks like website designing, appearance, navigation, buttons.The main objective of 
                designing any website is to ensure that users can see the relevant information in a format that is easy to read. But this
                simple goal is complicated to implement as visitors use various types of devices with different screen sizes and resolutions. 
                They also need to ensure that the website opens correctly in various browsers and different operating systems (cross-platform).
                This forces the Front-end developer to test their design on multiple permutations of OS, Browser, and Devices, making their job difficult. </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;