import React from 'react';
import { FooterData } from '../types';

type FooterProps = {
    data: FooterData;
};

const Footer = ({ data }: FooterProps) => (
    <footer className="mt-16 pb-8 text-center text-sm text-slate-500 dark:text-slate-500">
        <p>
            Coded in <a href={data.coded_in_url} className="font-medium text-slate-700 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-300" target="_blank" rel="noreferrer noopener">{data.coded_in}</a>. 
            Built with <a href={data.built_with_url} className="font-medium text-slate-700 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-300" target="_blank" rel="noreferrer noopener">{data.built_with}</a> and 
            deployed with <a href={data.deployed_with_url} className="font-medium text-slate-700 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-300" target="_blank" rel="noreferrer noopener">{data.deployed_with}</a>.
        </p>
    </footer>
);

export default Footer;