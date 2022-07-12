import "./index.css";
import { Sidebar, CollapseBtn } from "./components/Sidebar";
import { TitlePanel, IntroPanel, InterestsPanel, CareerPanel } from "./components/Panel"

const App = () => {
  let html = document.querySelector("html");
  html.classList.add("bg-gradient-to-br");
  html.classList.add("from-indigo-50");
  html.classList.add("to-indigo-300");

  return (
    <div>
      {/* <Sidebar /> */}
      <div id="Content" class="transition-all duration-300 ease-out">
        {/* <CollapseBtn/> */}
        <TitlePanel/>
        <IntroPanel/>
        <InterestsPanel/>
        <CareerPanel/>
        <div class="text-sm text-center font-mono w-full p-4 text-indigo-700"><a class="hover:underline hover:underline-offset-4 hover:text-indigo-500" href="https://github.com/TomY-Zhang/tomzhang-website">Built w/ ReactJS & Tailwind CSS</a></div>
      </div>
    </div>
  );
};

export default App;