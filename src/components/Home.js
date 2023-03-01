import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
    return (
<div class="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg text-center">
    <p>
        The name for this website comes from the word my friends used to describe when I space out and completely lose all awareness of the world around me. This website started as a research idea from high school, but I have not completed the research or website to share it through until now. You can read more about the main purpose behind this website <Link class="text-midTeal underline" to="/essays/porn">here</Link>. I originally wrote this website with HTML, CSS, and JQuery, but I do not like CSS with its confusing naming conventions. A friend told me about Tailwind CSS which is a Javascript framework replacement for CSS. Further researching showed that React is one of the most popular Javascript libraries/frameworks nowadays and works well with Tailwind. I made the HTML code into React components. Overall, it was a lot of work to make this website, and I'm not sure if rewriting it in modern languages was worth it in the long run. It was certainly good experience to learn a new language though.
    </p>
</div>
    );
}

export default Home;