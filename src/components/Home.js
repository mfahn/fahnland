import React from 'react';
import '../App.css';

function Home() {
    return (
        <div class="mt-5 m-auto">
            <p class="p-5 w-3/4 text-dark bg-bg-gray rounded-lg flex place-content-center items-center text-center justify-center">
                I originally started making this website with HTML, CSS, and JQuery, but I hate CSS. A friend told me about Tailwind CSS which is a Javascript framework replacement for CSS. Further researching showed that React is one of the most popular Javascript libraries/frameworks, so I used that to deliver the HTML components. Overall, it was a lot of work to make this website, and I'm not sure if it was worth it in the long run. It was certainly good experience though.
            </p>
        </div>
    );
}

export default Home;