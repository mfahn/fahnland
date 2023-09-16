import React from 'react';
import '../App.css';
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
    return (
<div className="mt-5 mb-5 ml-auto mr-auto p-5 w-2/5 text-dark bg-bg-gray rounded-lg text-center dark:bg-navy">
    <div className="text-dark dark:text-bg-gray">
        Glory to God in all Things
    </div>
    <div className="text-lowTeal inline-block mt-3 dark:text-bg-gray">
        <a className="inline-block p-2 hover:text-dark dark:hover:text-lowTeal" href='https://github.com/mfahn' title='Github'>
            <BsGithub size={30}/>
        </a>
        <a className="ml-3 inline-block p-2 hover:text-dark dark:hover:text-lowTeal" href='https://www.linkedin.com/in/michael-f-8173b1142/' title='LinkedIn'>
            <BsLinkedin size={30}/>
        </a>
    </div>
</div>
    );
}

export default Footer;