import "../index.css"

export const TitlePanel = () => {
    return (
        <div id="TitlePanel" class="flex justify-center items-center h-screen w-full text-center">
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
        <div class="flex flex-col text-center justify-center h-auto w-full p-10 md:pt-40 fade-in">
            {/* <h1 class="text-indigo-600 font-rockwell fade-in text-6xl mb-6 lg:mb-20">What I Enjoy</h1> */}
            <div class="flex sm:flex-col md:flex-row justify-center gap-10 place-items-center h-auto">
                <h1 class="w-96 sm:text-center lg:text-right text-indigo-600 font-rockwell text-6xl">What I Listen To</h1>
                <iframe src="https://open.spotify.com/embed/playlist/5ACKB4vJ98WpztIWodxCZd?utm_source=generator" title="playlist" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" class="rounded-2xl shadow-xl shadow-indigo-400 h-120 w-108 hover:shadow-indigo-500 transition-all duration-300 ease-in-out"></iframe>
            </div>
            <div class="p-6 md:pt-12">
                <a href="https://obscurifymusic.com/profile?id=a4wsse47xkvp7q8sil7j62n2w&code=d7380924388ed308" class="w-auto font-mono text-center text-indigo-700 text-lg hover:underline hover:underline-offset-8 hover:text-indigo-500">Visit my Obscurify profile</a>
            </div>
        </div>
    );
};

export const CareerPanel = () => {
    return (
        <div class="grid grid-col place-content-center h-auto w-full fade-in p-10 md:pt-28 gap-3">
            <div class="grid grid-col place-content-center h-auto w-full gap-3">
                <h1 class="font-rockwell text-5xl text-indigo-700 text-center mb-6">My Journey</h1>
                <CareerCard org="3forge LLC" pos="Technology Summer Intern" loc="New York, NY" dates="Jun 2022 — Present" />
                <CareerCard org="NYU Polytechnic Tutoring Center" pos="Computer Science Tutor" loc="New York, NY" dates="Mar 2021 — Present" />
            </div>
        </div>
    );
};

const CareerCard = (props) => {
    return (
        <div class="w-auto h-auto p-8 bg-indigo-50 shadow-xl shadow-indigo-300 hover:shadow-indigo-500 rounded-xl transition-shadow duration-300 ease-in-out">
            <h1 class="font-mono ">
                <p class="sm-text-lg md:text-xl text-indigo-700">{props.org}</p>
                <p class="sm:text-sm md:text-md text-indigo-500">
                    {props.pos}<br/>
                    {props.loc} | {props.dates}
                </p>
            </h1>
        </div>
    );
};