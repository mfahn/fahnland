import React from 'react';
import '../App.css';
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
    return (
<div class="mt-5 mb-5 ml-auto mr-auto p-5 w-2/5 text-dark bg-bg-gray rounded-lg text-center dark:bg-navy">
    <div class="text-dark dark:text-bg-gray">
        Glory to God in all things
    </div>
    <div class="text-lowTeal inline-block mt-3 dark:text-bg-gray">
        <a class="inline-block p-2 hover:text-dark dark:hover:text-lowTeal" href='https://github.com/mfahn' title='Github'>
            <BsGithub size={30}/>
        </a>
        <a class="ml-3 inline-block p-2 hover:text-dark dark:hover:text-lowTeal" href='https://www.linkedin.com/in/michael-f-8173b1142/' title='LinkedIn'>
            <BsLinkedin size={30}/>
        </a>
    </div>
</div>
    );
}

export default Footer;