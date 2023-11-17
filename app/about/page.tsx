// pages/about.js

import React from 'react';
import Container from '@/components/ui/container';
const skills = [
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'JavaScript' },
  { skill: 'TypeScript' },
  { skill: 'Nodejs' },
  { skill: 'React' },
  { skill: 'Redux' },
  { skill: 'Next.js' },
  { skill: 'Tailwind CSS' },
  { skill: 'Radix UI' },
  { skill: 'Shadcn' },
  { skill: 'Git' },
  { skill: 'GitHub' },
  { skill: 'Mongodb' },
  { skill: 'Mysql' },
  { skill: 'Prisma client' },
];
const About = () => {
  return (
    <>
      <Container>
        <div className="px-4 flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0  md:flex-row md:text-left">
          <section className="py-6 md:w-1/2 ">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <h3 className="text-xl font-semibold my-2">
            My Personal Over View
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
              2018 with a National Diploma in Office Management and Technology

              <h1 className="text-xl font-semibold my-2">Specialize In Administration,Communication,Finance,Legal Practice,And Human Resource</h1>
             

The development of managerial thinking and the management functions. Planning and organisation, which 
include the management of information, planning office work and work simplification, systems analysis and 
design, office machines and equipment, centralised and decentralised office organisation, formal and informal 
organisation. The management functions. Actuating and control: motivation of office workers, supervision in the 
office, general office control measures, cost and budget control. Planning business travel and accommodation, 
organising conferences or seminars and preparing office procedure manuals.

<p>Developing basic communication skills through the four basic skills in language learning and usage. 
Communication theory, verbal and non-verbal communication, presentation skills, report writing, meetings 
and interviews.
</p>

<p>Introducting to computers, application software, the components of the system unit, input, output, 
storage. PRACTICAL: Basic Information Processing: MS Word 2010; Basic Data Processing: MS Excel 2010; 
Operating System: Windows XP; Presentations: MS PowerPoint 2010.
</p>

<p>Hierarchy of court jurisdictions, Law firms. The law firm. Full explanation of the magistrate as well as the High 
Court Litigation process with all relevant documentation involved. Debt collection. Last will and testaments 
and a thorough discussion of the whole process of the deceased estates. Conveyancing with practical illustration of the procedure for the transfer of immovable property. Discussion of the various types of marriages and 
in particular the ante nuptial contract.
</p>

<p> Operating within a Human 
Resources Management environment. students will acquire specific skills and knowledge in the following areas: 
Job design and job analysis, Recruitment and selection, Employee on-boarding, motivation and retention, 
Career management, Performance management and appraisal and Managing compensation and benefits
</p>

<p>The accounting approach to transactions, financial statements and disclosure in respect of Companies, 
Incomplete records, revenue, property plant and equipment. Events after statement of financial position and 
inventories.
</p>


            </p>

<h3 className='text-lg font-semibold'>Standard Bank, Barclays and Volkskas SBV Company </h3>
            <p>
              I completed My two SBV learning Academy course from SBV Company.

            <ul>- Obtained Certificate in SARB Regulatory Training </ul>
            <ul>- Obtained Certificate in Retail Teller Training</ul>
            </p>

            <br />

            <h3 className='text-lg font-semibold'>Velisa African Academy - MERN Stack BootCamp - 2023 </h3>
            <p>Completed my FullStack  web development course from Velisa Africa Academy   </p>
          
          <Container><h3 className='text-lg font-semibold'>Department of Health, Pietersburg Hospital </h3>
            <h1 className='text-lg font-semibold'> Logistics,Office Administration Section</h1>
            
            <p>Handling supply chains or distribution in a company and make sure that goods are delivered on time.</p>
            <p>Maintain updated records of orders, suppliers and customers.</p>
            <p>Provide information to customers about the status of their orders.</p></Container> 

           





          </section>
          <section className="md:w-1/2 ">
            <div className="text-center md:w-1/2 md:text-left">
              <h1 className="text-2xl font-bold mb-6">Skills</h1>
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
