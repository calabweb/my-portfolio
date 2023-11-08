// pages/about.js

import React from 'react';
import Container from '@/components/ui/container';
const skills = [
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'JavaScript' },
  { skill: 'Leaderhip' },
  { skill: 'Listening' },
  { skill: 'React' },
  { skill: 'Wellingness to Learn' },
  { skill: 'Next.js' },
  { skill: 'Tailwind CSS' },
  { skill: 'Internet & Outlook ' },
  { skill: 'Communication ' },
  { skill: 'Teamwork ' },
  { skill: 'Ms Office' },
  { skill: 'GitHub' },
  { skill: 'Mongodb' },
 
];
const About = () => {
  return (
    <>
      <Container>
        <div className="px-4 flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0  md:flex-row md:text-left">
          <section className="py-6 md:w-1/2 ">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <h3 className="text-xl font-semibold my-2">
            PERSONAL OVER VIEW
            </h3>
            <p>
            I am an energetic, ambitious person who has developed a mature and responsible approach to any task that I undertake, or situation that I am presented with. As a graduate with three years experience in office management and technology,I am excellent in working with others to achieve a certain objective on time and with excellence.
            </p>
            <p className="my-2">
              I believe that you should{' '}
              <span className="font-bold text-red-500">
                Never stop growing
              </span>{' '}
              and that&#39;s what I strive to do, I have a passion for
              technology, Ms Office and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
            <br />

            <h3 className="text-xl font-semibold my-2">Education</h3>
            <p className="my-2">
              I graduated from Univerity of Technology, South Africa in
              2018 with a National Diploma in Office MAnagement and Technology
              and have been working at Provincial Hosiptal as Administrator, 
              after that i worked at SBV company as cash processor for the period of 2 years, i have learnhow to work as Team to achieve common goals. 
            </p>

            <p>
              I completed My two SBV learning Academy course from SBV Company.

              - Obtained Certificate in SARB Regulatory Training 
              - Obtained Certificate in Retail Teller Training
            </p>

            <br />

            <h3 className='text-lg font-semibold'>Velisa Academy - MERN Stack BootCamp - 2023 </h3>
            <p>Completed my FullStack  web development course from Velisa Academy   </p>

          
          </section>
          <section className="md:w-1/2 ">
            <div className="text-center md:w-1/2 md:text-left">
              <h1 className="text-2xl font-bold mb-6">My Skills</h1>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start my-4">
                {skills.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-green-100-200 px-4 py-2 mr-2 my-2 text-blue-500 rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
};

export default About;
