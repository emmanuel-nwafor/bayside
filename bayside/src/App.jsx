import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "/src/components/Hero";
import Comp1 from "/src/components/Comp1";
import Comp2 from "/src/components/Comp2";
import Comp3 from "/src/components/Comp3";
import Comp4 from "/src/components/Comp4";
import Comp5 from "/src/components/Comp5";
import Comp6 from "/src/components/Comp6";
import Comp7 from "./components/Comp7";
import Comp8 from "./components/Comp8";

function App() {
  return (
    <>
      <Hero />
      <Comp1 />
      <Comp4 />
      <Comp2 />
      <Comp4 />
      <Comp3 />
      <Comp4 />
      <Comp5 />
      {/* <Comp6 /> */}
    </>
  );
}

export default App;
