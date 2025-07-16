import React, { forwardRef } from 'react';
import { ResumeData } from '../types';
import Section from './Section';

type SkillsProps = {
    skills: ResumeData['skills'];
};

const Skills = forwardRef<HTMLElement, SkillsProps>(({ skills }, ref) => (
     <Section id="skills" ref={ref} className="mb-16 md:mb-24">
        <div className="space-y-8">
            {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                    <h3 className="font-medium text-slate-800 dark:text-slate-300 mb-3 capitalize">{category}</h3>
                    <ul className="flex flex-wrap -m-1">
                        {skillList.map(skill => (
                            <li key={skill} className="m-1">
                                <div className="flex items-center rounded-full bg-sky-100/70 text-sky-800 dark:bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-sky-300 cursor-default">
                                    {skill}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
             ))}
        </div>
    </Section>
));

export default Skills;