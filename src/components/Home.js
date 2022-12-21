import React from 'react';
import '../App.css'

function Home() {
    return (
        <div class="mt-5 flex">
            <p class="p-5 w-3/4 text-center justify-center flex text-dark bg-bg-gray rounded-lg">
                This website was originally regular HTML, CSS, and JQuery, but I don't like CSS, so I remade it with Tailwind, and in researching, found that Tailwind works well with Javascript libraries and frameworks. This got me down a rabbit hole of how I could reuse elements and make the site more modular. So, I remade the site with Node JS.
            </p>
        </div>
    );
}

export default Home;