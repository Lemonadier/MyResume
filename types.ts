export type SocialLink = {
    name: string;
    url: string;
    icon: string;
};

export type Education = {
    period: string;
    degree: string;
    institution: string;
    institution_url: string;
    description: string;
};

export type Project = {
    name: string;
    description: string;
    url: string;
    image: string;
    technologies: string[];
};

export type Skills = {
    [key: string]: string[];
};

export type FooterData = {
    coded_in: string;
    coded_in_url: string;
    built_with: string;
    built_with_url: string;
    deployed_with: string;
    deployed_with_url: string;
};

export type ResumeData = {
    name: string;
    nickname: string;
    profileImage: string;
    tagline: string;
    about: string[];
    education: Education[];
    skills: Skills;
    projects: Project[];
    socialLinks: SocialLink[];
    footer: FooterData;
};
