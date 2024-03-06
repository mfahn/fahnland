import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg dark:text-bg-gray dark:bg-navy">
            <div className="lg:w-4/5 sm:w-7/8 mr-auto ml-auto">
                <h1 className="text-lg font-bold text-center">Welcome</h1>
                <p className="m-auto pt-5">
                    The name for this website comes from the word my friends use to describe when I space out and completely lose all awareness of the world around me, a state of being in "Fahnland". This website started as a research idea from high school, but I have not completed the research or website to share it. You can read more about the main purpose behind this website <Link className="text-lowTeal hover:text-midTeal underline" to="/essays/porn">here</Link>. I originally wrote this website with HTML and raw CSS, but I was curious to learn a new language and try something new. A friend told me about Tailwind CSS which is a Javascript framework replacement for CSS. I also heard that React is one of the most popular Javascript libraries/frameworks nowadays and works well with Tailwind. So away I went, making the HTML code into React components. Overall, it was a lot of work to make this website, and I'm not sure if rewriting it in modern languages was worth it in the long run. Tailwind is nice shorthand, but I'm really not doing anything that spectacular, and the classNames tend to clutter the divs. It was certainly good experience to learn a new language though.
                </p>
            </div>
        </div>
    );
}

export default Home;