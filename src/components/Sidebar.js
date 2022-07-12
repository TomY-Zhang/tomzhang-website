import "../index.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export const Sidebar = () => {
    return (  
        <div id="Sidebar" class="flex flex-col gap-3 h-screen w-36 transition-all duration-300 ease-in-out fixed overflow-hidden -ml-44 mt-20">
            {/* {labels.map(name => { return ( <Card label={name} /> ); })} */}
            <Card label={"Home"}      target="TitlePanel" />
            <Card label={"Intro"}     target="IntroPanel" />
            <Card label={"Interests"} target="InterestsPanel" />
            <Card label={"Journey"}   target="CareerPanel" />
            {/* <Card label={"Contact"}/> */}
        </div>
    );
};

const Card = props => {
    return (
        <div onClick={() => document.getElementById(props.target).scrollIntoView( { behavior: 'smooth', block: 'start' } ) } class="h-16 w-28 m-auto mt-0 mb-0 bg-indigo-50 hover:bg-indigo-300 active:bg-indigo-400 font-mono rounded-xl shadow-md shadow-indigo-400 grid place-content-center transition-all duration-200 ease-in-out z-50 hover:cursor-pointer hover:text-white text-indigo-700 text-center">
            {props.label}
        </div>
    );
};

export const CollapseBtn = () => {
    const [collapsed, toggleCollapse] = useState(true);

    const handleCollapse = () => {
        let sidebar = document.getElementById("Sidebar");
        // let content = document.getElementById("Content");

        if (collapsed) {
            // console.log("true");
            sidebar.classList.remove("-ml-44");
            sidebar.classList.add("ml-0");
        } else {
            // console.log("false");
            sidebar.classList.remove("ml-0");
            sidebar.classList.add("-ml-44");
        }
        toggleCollapse(!collapsed);
    };
    
    return (
        // eslint-disable-next-line
        <a onClick={handleCollapse} class="bg-indigo-50 hover:bg-indigo-300 hover:text-white shadow-md shadow-indigo-400 p-2 text-2xl fixed ml-4 mt-4 text-indigo-700 hover:cursor-pointer transition-all duration-200 ease-in-out rounded-lg z-50"><AiOutlineMenu/></a>
    );
};
