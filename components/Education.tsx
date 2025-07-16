import React, { forwardRef } from 'react';
import { ResumeData } from '../types';
import Section from './Section';

type EducationProps = {
    items: ResumeData['education'];
};

const Education = forwardRef<HTMLElement, EducationProps>(({ items, }, ref) => (
    <Section id="education" ref={ref} className="mb-16 md:mb-24">
        <div className="space-y-12">
            {items.map((edu) => (
                <div key={edu.institution} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/70 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500 sm:col-span-2" aria-label={edu.period}>{edu.period}</header>
                    <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-800 dark:text-slate-200">
                            <a className="inline-flex items-baseline font-medium leading-tight hover:text-sky-500 dark:hover:text-sky-300 focus-visible:text-sky-400 group/link text-base" href={edu.institution_url} target="_blank" rel="noreferrer noopener">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>{edu.degree} · <span className="inline-block font-normal text-slate-600 dark:text-slate-400">{edu.institution}</span></span>
                                {edu.degree.includes('Studying') && <span className="relative flex size-2.5 ml-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span><span className="relative inline-flex size-2.5 rounded-full bg-sky-500"></span></span>}
                            </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">{edu.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </Section>
));

export default Education;