import "../index.css"
// import { useState } from "react";

export const TitlePanel = props => {
    return (
        <div id="TitlePanel" class="flex justify-center items-center pl-10 pr-10 w-full h-228 text-center">
            <h1 class="text-indigo-600 font-rockwell md:fade-in text-5xl md:text-6xl"> Hey, I'm Tom Zhang.</h1>
        </div>
    );
}

export const IntroPanel = () => {
    return (
        <div class="flex flex-col text-center justify-center h-auto w-full p-10 md:fade-in">
            {/* <h1 class="text-indigo-600 font-rockwell fade-in text-6xl mb-6 lg:mb-20">My Identity</h1> */}
            <div class="flex flex-row flex-wrap justify-center gap-10 h-full">
                <img src={require('../static/pic.png')} alt="" class="w-96 rounded-2xl shadow-2xl shadow-indigo-400 hover:shadow-indigo-500 transition-all duration-300 ease-in-out"></img>
                <div class="grid place-content-center p-6 pt-2">
                    <p class="w-108 font-mono lg:text-left text-indigo-700 sm:text-sm md:text-lg sm:h-full">
                        Hey there! My name is Tom Zhang. <br/><br/> I'm a first-gen Chinese immigrant living in Brooklyn, New York. <br/><br/> I'm currently studying computer science at New York University with goals of becoming a full-stack developer. <br/><br/> In my free time, I enjoy watching sports, playing the piano, hanging with friends, & learning new things.
                    </p>
                </div>
            </div>
        </div>
    );
};

export const InterestsPanel = () => {
    return (
        <div class="flex flex-col text-center justify-center h-auto w-full p-10 pt-40 md:fade-in">
            {/* <h1 class="text-indigo-600 font-rockwell fade-in text-6xl mb-6 lg:mb-20">What I Enjoy</h1> */}
            <div class="flex sm:flex-col md:flex-row justify-center gap-8 place-items-center h-auto">
                <h1 class="w-96 sm:text-center lg:text-right text-indigo-600 font-rockwell text-5xl">Get to know me through music</h1>
                <iframe src="https://open.spotify.com/embed/playlist/5ACKB4vJ98WpztIWodxCZd?utm_source=generator" title="playlist" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" class="rounded-2xl shadow-xl shadow-indigo-400 h-120 w-96 hover:shadow-indigo-500 transition-all duration-300 ease-in-out"></iframe>
            </div>
            <div class="p-10 md:pt-12">
                <a href="https://obscurifymusic.com/profile?id=a4wsse47xkvp7q8sil7j62n2w&code=d7380924388ed308" class="w-auto font-mono text-center text-indigo-700 text-md md:text-lg hover:underline hover:underline-offset-8 hover:text-indigo-500">Visit my Obscurify profile</a>
            </div>
        </div>
    );
};

export const CareerPanel = () => {
    return (
        <div class="flex flex-col justify-center h-auto w-full p-10 pt-40 md:fade-in">
            <h1 class="font-rockwell text-5xl text-indigo-600 text-center mb-10">My Journey</h1>
            <div class="flex flex-row flex-wrap justify-center gap-3">
                <div class="grid grid-col place-content-center h-auto gap-3">
                    {/* <CareerCard org="ETH New York Hackathon" pos="Skynet - 1st Place" loc="New York, NY" dates="Jun 2022"/> */}
                    <CareerCard org="3forge LLC" pos="Technology Summer Intern" loc="New York, NY" dates="Jun 2022 — Present" />
                    <CareerCard org="NYU Polytechnic Tutoring Center" pos="Computer Science Tutor" loc="New York, NY" dates="Mar 2021 — Present" />
                    <CareerCard org="NYU Tandon School of Engineering" pos="BS in Computer Science, Minor in Mathematics & Music" loc="New York, NY" dates="Sep 2020 — Present" />
                    <CareerCard org="West High School" pos="Class Valedictorian, IB Diploma Recipient" loc="Salt Lake City, UT" dates="Aug 2016 — Jun 2020"/>
                </div>
                <div class="grid place-items-center gap-3 h-auto w-auto bg-indigo-50 hover:bg-white rounded-xl shadow-xl shadow-indigo-400 hover:shadow-indigo-500 transition-all duration-300 ease-in-out p-6 order-first">
                    <h1 class="font-rockwell text-indigo-600 text-3xl text-center -mb-4">ETH New York Hackathon</h1>
                    <p class="font-mono text-indigo-700 text-md text-center">1st Place - Skynet</p>
                    <img src={require('../static/ethnyc.png')} alt="" class="sm:h-auto md:h-96 rounded-2xl shadow-md shadow-indigo-400 hover:shadow-indigo-500 transition-all duration-300 ease-in-out"></img>
                    <p class="font-mono text-indigo-700 sm:text-sm md:text-md text-center w-auto">Team members (not guy in chair) -<br/> Tharoon Balaji, Leo Li, Tom Zhang, Kingston Yip, Kavin Mohan</p>
                </div>
            </div>
        </div>
    );
};

const CareerCard = (props) => {
    return (
        <div class="w-auto h-auto p-8 bg-indigo-50 hover:bg-white shadow-xl shadow-indigo-400 hover:shadow-indigo-500 rounded-xl transition-all duration-300 ease-in-out">
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