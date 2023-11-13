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
              src="/calabmaboya.jpg"
              alt="Hero Image"
              className="rounded-full"
              priority
              width={500}
              height={300}
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-4xl font-bold">
              FINANCE,ADMINISTRATION,LEGAL PRACTICE,PERSONNEL MANAGEMENT,AND WEB DEVELOPER
            </h1>
            <p className="mt-4 text-lg md:text-xl text-red -600">
              OFFICE MANAGEMENT AND TECHNOLOGY
              </p>
            <div className="mt-8 space-y-4">
          
              <ul><p><li>Oversee and support all administrative duties in the office and ensure the office operates smoothly.</li> 
              <li>Maintain office supplies inventory and place orders when required.</li>
              <li>Perform receptionist duties greet visitors and answer and direct calls.</li>
              <li>Be involved in office layout planning and maintain IT infrastructure Manage office budget.</li>
              <li>Identify opportunities for process and office management improvement.</li>
              <li>Provide the necessary administrative support.</li>
    </p></ul>
            </div>
            <div>
              <Experties />
            </div>
            <div className="mt-8  flex gap-2">
              <a
                href="https://github.com/calabweb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-300 text-white px-4 py-2 rounded-full font-semibold transition duration-300 hover:bg-teal-700"
              >
                My GitHub
              </a>
              <a
                href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 text-white px-4 py-2 rounded-full font-semibold transition duration-300 hover:bg-teal-700"
              >
                My LinkedIn
              </a>
              <a
                href="https://www.facebook.com/calebvanmaboya.dukz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-900 text-white px-4 py-2 rounded-full font-semibold transition duration-300 hover:bg-teal-700"
              >
                My Facebook
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
