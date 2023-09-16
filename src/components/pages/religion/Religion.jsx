import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';

function Religion() {
    return (
<div className="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg dark:text-bg-gray dark:bg-navy">
    <div className="lg:w-4/5 sm:w-7/8 mr-auto ml-auto">

    <h1 className="text-lg text-darkdark:text-bg-gray font-bold text-center">Preface</h1>
    <div className="text-base pt-5">
        In my opinion, science and religion are seen as contrary, or mutually exclusive beliefs, and they cannot both exist together. However, in the natural world, there are a significant number of phenomena that cannot be explained by the scientific enterprise and can only be understood through the lense of religion. It is this intersection that I want to explore in this article. Below are several websites that various people have created over the years that discuss miracles, in the scientific and religious sense of the word. Many of them have to do with the Eucharist, or Body of Christ, changing its appearance from bread to actual heart tissue. The Eucharist always begins as unleavened bread, or bread that does not contain yeast. This is in reference to the command from God to the Isrealites during their exodus from the slavery of the Egyptians in the Book of Exodus. Through the blessing of a priest, the same one that Jesus used at the Last Supper, and the merits of the blessing of priesthood conferred upon him from a bishop, it changes into the actual Body of Christ. It retains its appearance of bread and wine, although as one sees from the below websites, that is not the only form it may take.
    </div>

    <div className="ring-dark p-2">
        <div className="text-center">
            <Link className="ring ring-lowTeal hover:ring-lowTeal hover:text-lowTeal text-lg font-bold dark:ring dark:ring-lowTeal dark:hover:ring-midTeal dark:hover:text-teal" to="https://jesusisreal-stl.org/">Evidence of the Existence of Jesus Christ</Link></div>
        <div className="text-base pt-5">
            This website details some of the miracles directly related to the existence of Jesus Christ such as the Shroud of Turin, the Veil of Manoppello, and the Veil of Veronica. It also details a miracle regarding the Holy Eucharist turning into heart tissue with a distinct AB blood type. This heart tissue can still be observed in a church in Luciano, Italy where it has remained incorrupt without the assistance of preservers.
        </div>
    </div>

    <div className="ring-dark p-2">
        <div className="text-center">
            <Link className="ring ring-lowTeal hover:ring-lowTeal hover:text-lowTeal text-lg font-bold dark:ring dark:ring-lowTeal dark:hover:ring-midTeal dark:hover:text-teal" to="http://www.miracolieucaristici.org/en/Liste/list.html">Index of Eucharistic Miracles</Link></div>
        <div className="text-base pt-5">
            This is the most comprehensive list of Eucharistic Miracles ever, compiled by Blessed Carlos Acutis. It details miracles from all over the world, many of which have been thoroughly investigated by doctors and medical experts. In every instance, the bread blessed by a Catholic priest has turned into heart tissue that doctors say underwent intense stress consistent with the horrific death Jesus died. The circumstances surrounding these events make the possibility that the miracle was faked completely impossible. Many of the samples of heart tissue and blood are incorrupt and can still be viewed to this day.
        </div>
    </div>
    <div className="ring-dark p-2 ">
        <div className="text-center">
            <Link className="ring ring-lowTeal hover:ring-lowTeal hover:text-lowTeal text-lg font-bold dark:ring dark:ring-lowTeal dark:hover:ring-midTeal dark:hover:text-teal" to="http://www.carloacutis.com/en/association/presentazione">Blessed Carlos Acutis</Link>
        </div>
        <div className="text-base pt-5">
            This link tells the story of the life of Blessed Carlos Acutis, a 21st century web developer who battled cancer as a teenager but used his talents to serve God by bringing centuries of miracles into a globally accessible medium. He has been declared Blessed by the Catholic Church, which is the last step before being declared a saint.
        </div>
    </div>
    <div className="ring-dark p-2">
        <div className="text-center">
            <Link className="ring ring-lowTeal hover:ring-lowTeal hover:text-lowTeal text-lg font-bold dark:ring dark:ring-lowTeal dark:hover:ring-midTeal dark:hover:text-teal" to="http://www.therealpresence.org/">Catholic Resource</Link>
        </div>
        <div className="text-base pt-5">
            This website contains many resources such as the Biblical backing for the Holy Eucharist, angelic apparitions, and fundemental truths of the Catholic Church. Some of these apparitions even occurred in the 20th Century with tens of thousands of eye witnesses like in the case of the Miracle of Fatima.
        </div>
    </div>
    <div className="ring-dark p-2">
        <div className="text-center">
        <h2 className="font-bold text-center">The Shroud of Turin</h2>

        </div>
        <div className="text-base pt-5">
            This website contains many resources such as the Biblical backing for the Holy Eucharist, angelic apparitions, and fundemental truths of the Catholic Church. Some of these apparitions even occurred in the 20th Century with tens of thousands of eye witnesses like in the case of the Miracle of Fatima.
        </div>
    </div>
    </div>
</div>
    );
}

export default Religion;