import React, { forwardRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ResumeData } from '../types';
import Section from './Section';

type ProjectsProps = {
    items: ResumeData['projects'];
};

const Projects = forwardRef<HTMLElement, ProjectsProps>(({ items }, ref) => (
    <Section id="projects" ref={ref} className="mb-16 md:mb-24">
        <div className="space-y-12">
            {items.map((project) => (
                <div key={project.name} className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/70 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-800 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-300 focus-visible:text-sky-400 group/link text-base" href={project.url} target="_blank" rel="noreferrer noopener">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>{project.name} <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" /></span>
                            </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">{project.description}</p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                            {project.technologies.map(tech => (
                               <li key={tech} className="mr-1.5 mt-2">
                                   <div className="flex items-center rounded-full bg-sky-100/70 text-sky-800 dark:bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-sky-300">
                                       {tech}
                                   </div>
                               </li>
                            ))}
                        </ul>
                    </div>
                    <img alt={project.name} loading="lazy" width="200" height="48" decoding="async" className="rounded border-2 border-slate-200/30 dark:border-slate-200/10 transition group-hover:border-slate-300 dark:group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 object-cover w-full h-auto" src={project.image} />
                </div>
            ))}
        </div>
    </Section>
));

export default Projects;