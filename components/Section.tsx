import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';

type SectionProps = {
    children: React.ReactNode;
    className?: string;
    id: string;
};

const Section = forwardRef<HTMLElement, SectionProps>(({ children, className, id }, ref) => {
    return (
        <motion.section
            ref={ref}
            id={id}
            className={`scroll-mt-16 md:scroll-mt-24 ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 lg:hidden mb-6 capitalize">
                {id}
            </h2>
            {children}
        </motion.section>
    );
});

export default Section;