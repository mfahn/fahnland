function ChatGPT() {
    return (
<div className="mt-5 m-auto p-5 w-4/5 text-dark bg-bg-gray rounded-lg dark:text-bg-gray dark:bg-navy">
  <div className="lg:w-4/5 sm:w-7/8 m-auto">
    <h1 className="text-2xl font-bold text-center">Survey of Generative Language Models' Role in Education</h1>
    <p className="text-sm text-center text-dark dark:text-bg-gray p-5">
      Michael Fahnlander 5/6/23
    </p>
    <h1 className="text-lg font-bold text-center">I.	Introduction</h1>

    <p className="text-base text-dark dark:text-bg-gray">
      From 2014 to 2018, approximately 15.7% of students admitted to paying someone else to do homework for them [1]. With the incredible boom of generative AI in the last year, workers and students of all ages have realized the potential of ChatGPT to assist in their jobs or even complete tasks for them. Now, students do not even have to open their wallet to have their work done for them. The growing trend threatens the education system by allowing students to bypass its purpose and undermining the activity of learning. Using ChatGPT to cheat on assignments interferes with the learning process for students and reduces the reputation of the education institution since students are not actually earning the honors which they receive for completing courses. This project will identify literature related to the generation of text by AI, specifically ChatGPT. The project must include a cursory overview of the inner workings of generative AI models to establish a foundation for the discussion. It will discuss the problems posed by ChatGPT with regard to academic dishonesty, the effect that AI has had on cheating, and investigate the tools and methods to help educators identify cheating with ChatGPT and gauge their effectiveness.
    </p>

    <h1 className="text-lg font-bold text-center">II.	Overview of AI</h1>

    <p className="text-base text-dark dark:text-bg-gray">
      An overview of Automated Intelligence (AI) must be understood to underscore the recent developments from OpenAI's ChatGPT. The Encyclopedia Britannica defines Automated Intelligence as “the ability of a digital computer […] to perform tasks commonly associated with intelligent beings” [2]. Fundamentally, an AI is made up of a training dataset and an algorithm that extrapolates trends and patterns from the training data to then apply to an untrained dataset. For example, someone might train an algorithm with pictures of cars to and then give it surveillance video feed with code that alerts if a car drives past. The result of this training, whether supervised, unsupervised, or semi-supervised, is a mathematical model that uses complex calculations to reach conclusions about untrained data. In recent years, research in this field has evolved into neural networks, a subset of Automated Intelligence that seeks to make computers emulate the thinking process of human brains. The applications of this research are plentiful, as automated chatbots can become more personable in customer service, for instance, with this type of training.
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
      Transformers are a specific type of model that pairs up chunks of data with one another to identify similarities. Notably, it does not draw its conclusions from the data by purely analyzing the popularity of data or its likelihood of occurring; it analyzes data that could be physically separated from other data, like in the case of a complex sentence or in different contexts. These models are increasingly used in language processing applications because they can pick up context and meaning from data [3]. Transformers have exploded in popularity, even outpacing other popular types of neural networks like convolutional neural networks and recurrent neural networks [4]. ChatGPT is by far the most notable Transformer and will be the focus of this discussion, although many of the features of ChatGPT apply to other Large Language Models. 
    </p>

    <h1 className="text-lg font-bold text-center">III.	Overview of ChatGPT</h1>

    <p className="text-base text-dark dark:text-bg-gray">
      Chat Generative Pre-trained Transformer, or ChatGPT for short, must be understood in order to continue the discussion of why it has gained so much popularity and how it might be countered. The model is based on the GPT-3.5, a Large Language Model (LLM) that was trained on over 570 GB of data from a wide range of fields and topics, and then reinforced with human feedback [5]. ChatGPT breaks text down into small chunks of a few letters or words at a time if they are short. It then uses a statistical analysis to predict what text might come next as shown in Figure 1.
    </p>
    
    Figure 1
    <p className="text-base text-dark dark:text-bg-gray">
      ChatGPT uses metric like Temperature to determine how statistically safe the answer should be given the temperature value. For example, for each highlighted chunk of text, the AI model calculates the probability of every subsequent chunk of text to determine the most likely patterns [6]. The variability of this value poses a challenge to AI identification since many generative text products heavily use an AI's statistical tendencies against them.
    </p>

    <h1 className="text-lg font-bold text-center">IV.	Challenges of AI</h1>

    <p className="text-base text-dark dark:text-bg-gray">
      The meteoric rise in the prevalence of Large Language Models (LLM) like ChatGPT and others has raised questions about authorship and intellectual property more broadly. For now, ChatGPT is only as good as its training and can only create new data that is based on other previous works written by humans. Perhaps in the future, AI will gain the intelligence necessary to generate original thoughts by leveraging its rich background of scientific literature to speculate on the future. Nevertheless, the current capabilities raise the question of ownership of the generated output. It was certainly generated by the model in a novel manner. However, it is based upon work that other researchers certainly toiled over extensively and whose scientific contributions are relegated to a short answer sans any recognition. This is but one area that shows the ethical questions of ChatGPT. Recent studies show that students are already using Large Language Models to cheat on assignments, another significant fear of the inappropriate application of technology.
    </p>

    <h1 className="text-lg font-bold text-center">V.	Prevalence of Cheating</h1>

    <p className="text-base text-dark dark:text-bg-gray">
      For teachers in academia, the challenges are less abstract than fears over ownership. Students everywhere can now access a machine that can generate papers given just a few parameters and instructions. This practice appears remarkably similar to cheating firms that students pay to complete coursework, albeit in a much less predatory manner. Thus, the use of ChatGPT to generate content that is submitted without academic engagement is consistent with the definition of cheating. Those firms will often blackmail students by threatening to expose the cheating to the school if money is not paid, even long after the student finished the className [7]. One does not need a deep understanding on the subject of AI to realize the threat this poses to the education system if students no longer have to think critically and research topics for themselves. Many school systems have begun to ban the software on their networks to attempt to combat the threat of ChatGPT poses. The Los Angeles Unified School District, New York Department of Education, Oakland Unified school systems, and Seattle Public School systems have all banned ChatGPT from their networks. They want to avoid letting students use ChatGPT at least until teachers can receive training on how to integrate ChatGPT into school curriculum [8]. Because of the architecture of these programs, anyone with an unfiltered internet connection can access them, so a student could simply disconnect a school laptop or iPad from the school WiFi and use a mobile hotspot to access the forbidden resources. Additionally, the protections that schools implement are nullified when the student leaves the premises and writes a paper at home where they can access any resources.
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
      Recent studies confirm fears that ChatGPT could be used by students to take academic shortcuts. In no small part due to the social media attention ChatGPT has generated, ChatGPT is a household name as 9 out of 10 students are familiar with the software and used it to help with homework assignments. Furthermore, 48% of students surveyed reported that they used it for an at-home test or quiz. This cements the idea that blacklisting AI services from school networks is insufficient in solving the problem of cheating. Even more concerning is the metric that 53% of students surveyed used ChatGPT to write a paper for them [9]. A tool is necessary to bridge the gap of a free and open internet to identify if a student relied too heavily on AI for homework.
    </p>

    <h1 className="text-lg font-bold text-center">VI.	Cheating Detection Tools</h1>

    <p className="text-base text-dark dark:text-bg-gray">
      Fortunately, many companies have realized the potential for ChatGPT to be used for undesired purposes and have developed tools to assist teachers and capitalize on this need. 
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
      OpenAI, the company behind ChatGPT, has created an AI detection tool using the same technologies that support their text generation service. The classNameifier requires at least 1,000 words of text to predict whether a sample was generated by an Automated Intelligence algorithm or written by a human. The more text that is provided, the more accurately that classNameifiers can identify generated text. Identification products can use the same methods that LLMs use to generate text to identify it [6]. For instance, tools will analyze two key characteristics when judging a piece of text. First, it looks at the perplexity of the verbiage. Text that uses unconventional or sophisticated words is less likely to be written by a computer since those outcomes are statistically less likely. Second, the classNameifier will analyze the “burstiness” of the sentence structure and length. Computer-generated text typically has consistent sentence structure and length with little variance. Humans, on the other hand, use more inconsistent sentence structure to convey ideas [10]. However, OpenAI is not the only company to release such identification tools. Many companies have made their business models around this novel detection system. For instance, Originality is an AI detection tool aimed at academic journals to avoid publishing AI-generated text and submitting them for peer review. It allows a user to upload papers in bulk for testing and assigns a probability to the text of the likelihood it was generated by an AI algorithm. Content at Scale, Winston AI, GLTR, and GPTZero are all other companies that are tapping into this niche. In a non-peer reviewed study of seven of the top LLM detectors, GPTZero correctly identified the most samples of AI-generated text out of any of the classNameifiers tested [11].
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
      Recently in February of 2023, an article featured on the blog of GPTZero, one such LLM detector, highlighted a technique used by students to obfuscate text written by a chatbot. The program would simply ingest a body of text, presumably AI-generated, and change certain English characters to their visually identical Cyrillic counterparts. To a human, this technique would not change the meaning of the text as the words would still appear as normal English. However, to a program attempting to classNameify the data as original text from a human or generated text written by a chatbot, the presence of foreign characters would confuse it such that it would not be able to make a prediction. Developers for the company later fixed this loophole so that the models could process text intermixed with other characters [12]. This is just one example of an inevitable competition between students attempting to thwart Automated Intelligence detection efforts and teachers wanting to maintain academic honesty. Just like offensive and defensive security constantly compete with one-another with the goal of improving their respective services or products, this Automated Intelligence battle could likely expand and grow more intricate in future years. 
    </p>

    <h1 className="text-lg font-bold text-center">VII.	Future Work</h1>

    <p className="text-base text-dark dark:text-bg-gray">
      Looking forward on this topic of ChatGPT, teachers have other options for disincentivizing cheating by structuring assignments in a way that reduces the efficacy AI. Teachers have the opportunity to change the types of assignments that they give to students in lieu of a paper. For instance, they might use speeches in conjunction with writing assignments or even as a substitute to reinforce the learning [13]. This method, while not appropriate for every classNameroom scenario, could be a model for future schooling.
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
      On the technological side, OpenAI has announced plans to add a “fingerprint feature” to ChatGPT in an attempt to stave off cheating. The chatbot would add a special signature to the text of the answer that, when copied directly into a homework assignment, would show that the text originated from an algorithm. They plan to change the statistical probabilities of the aforementioned chunks of text to make it more obvious that the text came from a chatbot. The goal is to add this “watermark” in a way that does not tip off the user to the scheme so that they cannot simply remove a word or sentence that contains the watermark. In an interview, one of OpenAI's researchers claimed that they had a working prototype for this system and that just a “few hundred words” are necessary to determine if an AI generated the text [14]. This would make AI detection far easier, although other statistical features of ChatGPT's output would still be relevant.
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
      Much like offensive security and defensive security can build up and inform one-another, so too do generative Large Learning Models have the potential to enter into a competitive relationship in the future. In many areas of security, breakthroughs in technology have spurred breakthroughs in opposite areas, acting as a balance. If malware authors invent a novel way of obfuscating the functionality of a program, it is only a matter of time before the security community invents a tool or observes an indicator to alert to that malicious behavior. As ChatGPT grows more popular, it is highly likely that companies or individuals with less ethical accountability than OpenAI will create Large Language Models to assist cheating in schools. OpenAI has created ChatGPT with the expectation that their tool will be misused, and this cooperation with academia by releasing an AI classNameifier demonstrates their respect and foresight.
    </p>

    <h1 className="text-lg font-bold text-center">VIII.	Conclusion</h1>

    <p className="text-base text-dark dark:text-bg-gray">
      In conclusion, ChatGPT and other generative automated intelligence algorithms have already deeply effected the education system and pose a significant threat to learning if not properly kept in check. To this end, teachers have a variety of tools at their disposal ranging from restructuring assignments to implementing third-party tools to determine if a student generated part or all of a given assignment. These tools use the same technologies to identify AI-generated content that the generators themselves use. Even though AI like ChatGPT appear to generate outputs in a human-like manner, they all rely on statistics and probabilities of small sections of textual data to create their responses. Models trained to identify that data can perform a statistical analysis on samples of text to determine if the complexity and spontaneity are consistent with a computer or a human. Ultimately, AI is here to stay, but academia has many tools at its disposal to mitigate the threats AI pose to student integrity; time will tell if they are sufficiently successful to catch and deter students from engaging in dishonest practices in school.
    </p>

    <h1 className="text-lg font-bold text-center">References</h1>
      
    <p className="text-base text-dark dark:text-bg-gray">
      [1] 	P. Newton, "How Common Is Commercial Contract Cheating in Higher Education and Is It Increasing? A Systematic Review," Frontiers in Education, 2018. 
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
      [2] 	B. J. Copeland, "Artificial Intelligence," 25 April 2023. [Online]. Available: https://www.britannica.com/technology/artificial-intelligence.
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
      [3] 	A. Vaswani, N. Parmar, J. Uszkoreit, L. Jones, A. Gomez, L. Kaiser and I. Polosukhin, "Attention Is All You Need," CoRR, 2017. 
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
      [4] 	R. Merritt, "What is a transformer model?," 25 March 2022. [Online]. Available: https://blogs.nvidia.com/blog/2022/03/25/what-is-a-transformer-model/.
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
      [5] 	S. Yiqiu, L. Heacock, J. Elias, K. Hentel, B. Reig, G. Shih and L. Moy, "ChatGPT and Other Large Language Models Are Double-edged Swords," Radiology, p. e230163, 2023. 
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
      [6] 	OpenAI, "AI Text classNameifier," [Online]. Available: https://platform.openai.com/ai-text-classNameifier.
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
      [7] 	B. Gray, Ethics, EdTech, and the Rise of Contract Cheating, vol. 1, S. E. Eaton and J. C. Hughes, Eds., Academic Integrity in Canada, 2022. 
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
      [8] 	K. Jimenez, "'This shouldn't be a surprise' The education community shares mixed reactions to ChatGPT," 30 January 2023. [Online]. Available: https://www.usatoday.com/story/news/education/2023/01/30/chatgpt-going-banned-teachers-sound-alarm-new-ai-tech/11069593002/.
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
      [9] 	Study.com, "Productive Teaching Tool or Innovative Cheating?," [Online]. Available: https://study.com/resources/perceptions-of-chatgpt-in-schools.
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
      [10] 	E. Bowman, "A college student created an app that can tell whether AI wrote an essay," 9 January 2023. [Online]. Available: https://www.npr.org/2023/01/09/1147549845/gptzero-ai-chatgpt-edward-tian-plagiarism.
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
      [11] 	K. Wiggers, "Most sites claiming to catch AI-written text fail spectacularly," 16 February 2023. [Online]. Available: https://techcrunch.com/2023/02/16/most-sites-claiming-to-catch-ai-written-text-fail-spectacularly/.
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
      [12] 	E. Tian, "GPTZero Case Study: Models and Exploits," 7 February 2023. [Online]. Available: https://gptzero.me/blogs/gptzero-case-study.
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
      [13] 	L. Volante, C. DeLuca and D. Klinger, "ChatGPT and cheating: 5 ways to change how students are graded," 27 February 2023. [Online]. Available: https://theconversation.com/chatgpt-and-cheating-5-ways-to-change-how-students-are-graded-200248.
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
      [14] 	A. Hern, "AI-assisted plagiarism? ChatGPT bot says it has an answer for that," 31 December 2022. [Online]. Available: https://www.theguardian.com/technology/2022/dec/31/ai-assisted-plagiarism-chatgpt-bot-says-it-has-an-answer-for-that.
    </p>
    <p className="text-base text-dark dark:text-bg-gray">
      [15] 	GPTZero, "What is GPTZero?," [Online]. Available: https://gptzero.me/faq.
    </p>

  </div>
</div>
    );
}

export default ChatGPT;