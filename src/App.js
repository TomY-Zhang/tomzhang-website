import "./index.css";
import { Sidebar, CollapseBtn } from "./components/Sidebar";
import { TitlePanel, IntroPanel, InterestsPanel } from "./components/Panel"

const App = () => {
  return (
    <div>
      <Sidebar />
      <div id="Content" class="bg-gradient-to-br from-indigo-50 to-indigo-300 transition-all duration-300 ease-out">
        <CollapseBtn/>
        <TitlePanel/>
        <IntroPanel/>
        <InterestsPanel/>
      </div>
    </div>
  );
};

export default App;