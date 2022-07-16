import "./index.css";
import { Sidebar, CollapseBtn } from "./components/Sidebar";
import { TitlePanel, IntroPanel, InterestsPanel, CareerPanel, Footer } from "./components/Panel"

const App = () => {
  const height = window.screen.height + 'px';
  // const bp = height < 600 ? "sm" : height < 750 ? "md" : height < 900 ? "lg" : "xl";

  return (
    <div>
      <Sidebar />
      <div id="Content" class="bg-gradient-to-r from-indigo-50 to-indigo-300 transition-all duration-300 ease-out">
        <CollapseBtn />
        <TitlePanel style={{height: height}} />
        <IntroPanel />
        <InterestsPanel />
        <CareerPanel />
        <Footer />
      </div>
    </div>
  );
};

export default App;