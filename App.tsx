import React, { useState, useEffect, useRef } from 'react';
import { ResumeData } from './types';
import SkeletonLoader from './components/SkeletonLoader';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const NAV_SECTIONS = ['about', 'education', 'skills', 'projects'];

const App = () => {
    const [resumeData, setResumeData] = useState<ResumeData | null>(null);
    const [activeSection, setActiveSection] = useState('about');
    const [isLoading, setIsLoading] = useState(true);
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) return savedTheme;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'dark';
    });

    const sectionRefs = {
        about: useRef<HTMLElement>(null),
        education: useRef<HTMLElement>(null),
        skills: useRef<HTMLElement>(null),
        projects: useRef<HTMLElement>(null),
    };

    // Theme management
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    // Load data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./data.json');
                if (!response.ok) throw new Error('Network response was not ok');
                const data: ResumeData = await response.json();
                
                setTimeout(() => {
                    setResumeData(data);
                    document.title = `${data.name} - Resume`;
                    setIsLoading(false);
                }, 800);

            } catch (error) {
                console.error("Failed to fetch resume data:", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    // // Cursor spotlight effect
    // useEffect(() => {
    //     const updateCursor = (e: MouseEvent) => {
    //         document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
    //         document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    //     };
    //     window.addEventListener('mousemove', updateCursor);
    //     return () => window.removeEventListener('mousemove', updateCursor);
    // }, []);

    // Scrollspy for navigation
    useEffect(() => {
        const handleScroll = () => {
            let current = 'about';
            for (const sectionId of NAV_SECTIONS) {
                const section = sectionRefs[sectionId as keyof typeof sectionRefs].current;
                if (section && window.scrollY >= section.offsetTop - 128) {
                    current = sectionId;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionRefs]);


    if (isLoading) {
        return <SkeletonLoader />;
    }

    if (!resumeData) {
        return <div className="flex items-center justify-center h-screen text-red-500">Failed to load data. Please try again later.</div>;
    }

    return (
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:justify-between lg:gap-16">
                <Header 
                    data={{
                        name: resumeData.name,
                        nickname: resumeData.nickname,
                        profileImage: resumeData.profileImage,
                        tagline: resumeData.tagline,
                        socialLinks: resumeData.socialLinks
                    }}
                    activeSection={activeSection} 
                    theme={theme}
                    toggleTheme={toggleTheme}
                />
                
                <main className="pt-24 lg:w-1/2 lg:py-24">
                    <About content={resumeData.about} ref={sectionRefs.about} />
                    <Education items={resumeData.education} ref={sectionRefs.education} />
                    <Skills skills={resumeData.skills} ref={sectionRefs.skills} />
                    <Projects items={resumeData.projects} ref={sectionRefs.projects} />
                    <Footer data={resumeData.footer} />
                </main>
            </div>
        </div>
    );
};

export default App;