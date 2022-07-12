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
      <Sidebar />
      <div id="Content" class="transition-all duration-300 ease-out">
        <CollapseBtn/>
        <TitlePanel/>
        <IntroPanel/>
        <InterestsPanel/>
        <CareerPanel/>
      </div>
    </div>
  );
};

export default App;