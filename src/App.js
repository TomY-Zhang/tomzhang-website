import "./index.css";
// import { Sidebar, CollapseBtn } from "./components/Sidebar";
import { TitlePanel, IntroPanel, InterestsPanel, CareerPanel } from "./components/Panel"

const App = () => {
  const height = window.screen.height;
  const bp = height < 600 ? "sm" : height < 750 ? "md" : height < 900 ? "lg" : "xl";

  return (
    <div>
      {/* <Sidebar /> */}
      <div id="Content" class="bg-gradient-to-br from-indigo-50 to-indigo-300 transition-all duration-300 ease-out">
        {/* <CollapseBtn/> */}
        <TitlePanel bp={bp}/>
        <IntroPanel/>
        <InterestsPanel/>
        <CareerPanel/>
        <div class="text-sm text-center font-mono w-full p-4 text-indigo-700"><a class="hover:underline hover:underline-offset-4 hover:text-indigo-500" href="https://github.com/TomY-Zhang/tomzhang-website">Built w/ ReactJS & Tailwind CSS</a></div>
      </div>
    </div>
  );
};

export default App;