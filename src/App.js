import "./App.css";
import { HeroPage, MiddlePage, BottomPage } from "./pages";
import NavBar from "./components/navBar/NavBar";
import logo from "./images/NavBar/logo_color.png";
import la_logo from "./images/NavBar/la_color.png";

function App() {
  return (
    <>
      <HeroPage />
      <NavBar logo={logo} la={la_logo} />
      <MiddlePage />
      <BottomPage />
    </>
  );
}

export default App;
