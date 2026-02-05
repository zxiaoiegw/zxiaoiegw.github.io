import React from "react";
import { projects } from "../data";

const Works = () => {
  return (
    <div className='w-full flex flex-col py-20 px-8 md:px-10 gap-10 lg:gap-20 lg:py-20'>
      <h4 className='text-3xl font-bold text-black dark:text-white mt-10 '>
        Projects
      </h4>

      <div className='flex flex-wrap gap-10 lg:gap-20 justify-center'>
        {projects.map((p, index) => (
          <a
            href={p.url || '#'}
            target={p.url ? '_blank' : '_self'}
            rel={p.url ? 'noopener noreferrer' : ''}
            onClick={(e) => !p.url && e.preventDefault()}
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            key={index}
            className={`w-[350px] cursor-pointer shadow-xl hover:scale-105 ease-in-out duration-300 rounded-md overflow-hidden flex flex-col ${
              p.description || (p.techStack && p.techStack.length) ? '' : 'h-[350px]'
            }`}
          >
            <img
              src={p.img}
              alt={p.title}
              className='w-full h-[250px] object-cover rounded-t-md shrink-0'
            />

            <div className='w-full bg-white dark:bg-[#04133e] p-3 flex flex-col gap-2 flex-1 min-h-0'>
              <h4 className='text-2xl text-black dark:text-white font-semibold'>
                {p.title}
              </h4>
              <p className='text-sm text-orange-600 uppercase'>{p.cat}</p>

              {p.description && (
                <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
                  {p.description}
                </p>
              )}

              {p.techStack && p.techStack.length > 0 && (
                <div className='flex flex-wrap gap-1.5 mt-1'>
                  {p.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className='inline-block px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Works;