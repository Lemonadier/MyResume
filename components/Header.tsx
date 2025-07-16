import React from 'react';
import { Github, Linkedin, Sun, Moon, Facebook } from 'lucide-react';
import { ResumeData } from '../types';

const socialIcons: { [key: string]: React.ElementType } = {
    github: Github,
    linkedin: Linkedin,
    facebook: Facebook,
};

const NAV_SECTIONS = ['about', 'education', 'skills', 'projects'];

type HeaderProps = {
    data: Pick<ResumeData, 'name' | 'nickname' | 'profileImage' | 'tagline' | 'socialLinks'>;
    activeSection: string;
    theme: string;
    toggleTheme: () => void;
};

const Header = ({ data, activeSection, theme, toggleTheme }: HeaderProps) => {
    const { name, nickname, profileImage, tagline, socialLinks } = data;
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <div className="flex flex-col items-center lg:items-start space-y-4">
                     <img className="h-40 w-40 rounded-full border-2 border-sky-500/50 dark:border-sky-400/50 object-cover" src={profileImage} alt={name} />
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">{name}</h1>
                        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-700 dark:text-slate-200 sm:text-xl">{nickname}</h2>
                        <p className="mt-4 max-w-xs leading-normal">{tagline}</p>
                    </div>
                </div>
                <nav className="hidden lg:block mt-12">
                    <ul className="flex flex-col space-y-3 text-sm font-medium">
                        {NAV_SECTIONS.map((id) => (
                            <li key={id}>
                                <a href={`#${id}`} className="group flex items-center py-2">
                                    <span className={`nav-indicator mr-4 h-px transition-all ${activeSection === id ? 'w-16 bg-slate-800 dark:bg-slate-200' : 'w-8 bg-slate-400 dark:bg-slate-600 group-hover:w-16 group-hover:bg-slate-800 dark:group-hover:bg-slate-200'}`}></span>
                                    <span className={`nav-text capitalize transition-colors ${activeSection === id ? 'text-slate-800 dark:text-slate-200' : 'text-slate-500 group-hover:text-slate-800 dark:group-hover:text-slate-200'}`}>{id}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
             <div className="mt-8 flex items-center justify-center lg:justify-start space-x-5">
                {socialLinks.map((link) => {
                    const Icon = socialIcons[link.icon];
                    return (
                        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-300 transition-colors">
                            <span className="sr-only">{link.name}</span>
                            {Icon && <Icon className="h-6 w-6" />}
                        </a>
                    );
                })}
                 <button onClick={toggleTheme} aria-label="Toggle theme" className="ml-2 text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-300 transition-colors">
                    {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                 </button>
            </div>
        </header>
    );
};

export default Header;