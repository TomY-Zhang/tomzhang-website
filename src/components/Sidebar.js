import "../index.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export const Sidebar = () => {
    const labels = ["Home", "About Me", "Music", "Academics & Career", "Contact"];

    return (  
        <div id="Sidebar" class="flex flex-col gap-3 h-screen w-44 transition-all duration-300 ease-in-out fixed overflow-hidden -ml-44 mt-20">
            {labels.map(name => { return ( <Card label={name} /> ); })}
        </div>
    );
};

const Card = props => {
    return (
        <div class="h-20 w-32 m-auto mt-0 mb-0 bg-indigo-50 hover:bg-indigo-300 font-mono rounded-xl shadow-md shadow-indigo-300 grid place-content-center transition-color duration-200 ease-in-out z-50 hover:cursor-pointer hover:text-white text-indigo-700 text-center">
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
        <a onClick={handleCollapse} class="p-2 text-2xl fixed ml-4 mt-4 text-indigo-700 hover:text-indigo-500 hover:cursor-pointer transition-color duration-150 ease-in-out rounded-lg"><AiOutlineMenu/></a>
    );
};