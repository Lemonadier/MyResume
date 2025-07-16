import React, { forwardRef } from 'react';
import { ResumeData } from '../types';
import Section from './Section';

type AboutProps = {
    content: ResumeData['about'];
};

const About = forwardRef<HTMLElement, AboutProps>(({ content }, ref) => (
    <Section id="about" ref={ref} className="mb-16 md:mb-24">
        <div className="space-y-4">
            {content.map((p, i) => <p key={i} className="leading-relaxed">{p}</p>)}
        </div>
    </Section>
));

export default About;