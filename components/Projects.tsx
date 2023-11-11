import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from './ui/container';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
const projects = [
  {
    name: 'Thankful Thoughts',
    description:
      'ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.',
    image: '/thankfulthoughts.png',
    github: 'https://github.com/calabweb/thankful-thoughts-main',
    link: 'https://thankfulthoughts.io/',
  },
  {
    name: 'My Tune',
    description: 'Html css template for my tune music web site',
    image: '/tune-screen.png',
    github: 'https://github.com/calabweb/myTunes',
    link: 'https://654f2bce77b78a7c8b8dbeb3--meek-zuccutto-6e6ed3.netlify.app/',
  },
  {
    name: 'Product Landing Page',
    description:
      'This project is a Product landing page using HTML CSS',
    image: 'Product-screen',
    github: 'https://github.com/calabweb/product_landing_page',
    link: 'https://654f4d7d4389ab15410f5864--visionary-raindrop-a318b8.netlify.app/',
  },
];


const ProjectsSection = () => {
  return (
    <Container>
      <section id="projects" className="my-5">
        <h1 className="my-10 text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-neutral-800-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-28">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={800}
                        height={800}
                        priority
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Container>
  );
};

export default ProjectsSection;
