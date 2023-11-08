import React from 'react';
import Image from 'next/image';
import Container from './ui/container';
import Experties from './Expertise';

const HeroSection = () => {
  return (
    <section className=" py-16 px-4 md:px-16 relative">
      <Container>
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="md:w-1/2 mb-4">
            <Image
              src="/Calab.jpg"
              alt="Hero Image"
              className="rounded-full"
              priority
              width={500}
              height={300}
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-4xl font-bold">
              Office Administrator, Cash Proccessor and Web Developer
            </h1>
            <p className="mt-4 text-lg md:text-xl text-yellow -600">
              Office Management
            </p>
            <div className="mt-8 space-y-4">
              <p>
              <p>Oversee and support all administrative duties in the office and ensure the office operates smoothly.
Maintain office supplies inventory and place orders when required.</p>
<p>Perform receptionist duties greet visitors and answer and direct calls.</p>
<p>Develop office policies and procedures and ensure they are implemented properly.</p>
<p>Be involved in office layout planning and maintain IT infrastructure
Manage office budget</p>
<p>Identify opportunities for process and office management improvement.
Provide the necessary administrative support.</p>


              </p>
            </div>
            <div>
              <Experties />
            </div>
            <div className="mt-8  flex gap-2">
              <a
                href="https://github.com/dev1980"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 text-white px-4 py-2 rounded-full font-semibold transition duration-300 hover:bg-teal-700"
              >
                View My GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/dev1980/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 text-white px-4 py-2 rounded-full font-semibold transition duration-300 hover:bg-teal-700"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
