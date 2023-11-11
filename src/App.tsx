import SideBar from "./components/Sidebar/SideBar";
import { GiStairsGoal } from "react-icons/gi";
import { SiAboutdotme } from "react-icons/si";
import { RiSlideshow3Line } from "react-icons/ri";
import { VscDebugStart } from "react-icons/vsc";
const NavLinks = [
  { label: "Start here", route: "/here", icon: <VscDebugStart /> },
  { label: "How To's", route: "/archives", icon: <RiSlideshow3Line /> },
  { label: "Journey", route: "/journey", icon: <GiStairsGoal /> },
  { label: "About", route: "/about", icon: <SiAboutdotme /> },
];

function App() {
  return (
    <div className="App flex bg-slate-100">
      <SideBar items={NavLinks} />
      <div className="main"></div>
    </div>
  );
}

export default App;
