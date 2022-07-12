import "../index.css"

export const TitlePanel = () => {
    return (
        <div id="TitlePanel" class="flex justify-center items-center h-screen w-full">
            <h1 class="text-indigo-600 font-rockwell fade-in text-6xl">Hey, I'm Tom Zhang.</h1>
        </div>
    );
}

export const IntroPanel = () => {
    return (
        <div class="flex flex-col text-center justify-center h-auto w-full p-10 fade-in">
            {/* <h1 class="text-indigo-600 font-rockwell fade-in text-6xl mb-6 lg:mb-20">My Identity</h1> */}
            <div class="flex flex-row justify-center gap-10 place-items-center h-full">
                <img src={require('../static/pic.png')} alt="" class="rounded-2xl shadow-2xl shadow-indigo-400 hover:shadow-indigo-500 sm:hidden lg:block transition-all duration-300 ease-in-out"></img>
                <p class="w-108 font-mono text-left text-indigo-800 text-xl sm:text-lg sm:h-full">
                    Hey there! My name is Tom Zhang. <br/><br/> I'm a first-gen Chinese immigrant living in Brooklyn, New York. <br/><br/> I'm currently studying computer science at New York University with goals of becoming a full-stack developer. <br/><br/> In my free time, I enjoy watching sports, playing the piano, hanging with friends, & learning new things.
                </p>
            </div>
        </div>
    );
};

export const InterestsPanel = () => {
    return (
        <div class="flex flex-col text-center justify-center h-auto w-full p-10 pt-40 fade-in">
            {/* <h1 class="text-indigo-600 font-rockwell fade-in text-6xl mb-6 lg:mb-20">What I Enjoy</h1> */}
            <div class="flex sm:flex-col md:flex-row justify-center gap-10 place-items-center h-auto">
                <h1 class="w-96 sm:text-center lg:text-right text-indigo-600 font-rockwell text-6xl">What I Listen To</h1>
                <iframe src="https://open.spotify.com/embed/playlist/5ACKB4vJ98WpztIWodxCZd?utm_source=generator" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" class="rounded-2xl shadow-lg shadow-indigo-400 h-120 w-96 hover:shadow-indigo-500 transition-all duration-300 ease-in-out"></iframe>
            </div>
            <div class="p-12">
                <a href="https://obscurifymusic.com/profile?id=a4wsse47xkvp7q8sil7j62n2w&code=d7380924388ed308" class="w-auto font-mono text-center text-indigo-700 text-lg hover:underline hover:underline-offset-8 hover:text-indigo-500">Visit my Obscurify profile</a>
            </div>
        </div>
    );
};