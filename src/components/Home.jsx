import React, {useState} from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll'

const Home = () => {
  const [home, setHome] = useState(false)
  const handleClick = () => setHome(!home)

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, it's me</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Bhawana Dhamala
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Frontend Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I absolutely adore coming up with new and improved ways to write program code.
         I frequently aim for perfection, and my daily motivation comes from learning 
         more effective algorithms or developing more understandable user interfaces 
         for  customers. I'm a really focused individual. I push myself to meet my 
         deadlines and consistently set ambitious but achievable goals. My ability to 
         always give 100 percent to any task is my best strength. I put everything I have 
         into every task. In connection with that, I have excellent communication skills, which will enable me to get along with clients, co-workers, and managers.

        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            View Skills
            </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;