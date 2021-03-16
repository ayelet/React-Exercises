import React from "react";
import RainboxBox from "./Components/Ex8.2_RainboxBox/RainbowBox";
import FavColor from "./Components/Ex8_1/Ex8_1";
import AnimationContainer from "./Components/Ex8_1_animations/AnimationContainer";
// import Hello from "./Components/Ex2_2/Ex2_2";
// import Boxes from "./Components/Ex3_1/Boxes";
// import Quiz from "./Components/Quiz/Quiz";
// import Container from "./Components/Ex4_1_Buttons/Container";
// import CardContainer from "./Components/Ex4_2_Cards/CardContainer";
// import IncContainer from "./Components/Ex7_1/IncContainerClass";
// import ShowHideDiv from "./Components/Ex7_2_ShowHideDiv/ShowHideDiv";

function App() {
  // return <Boxes />;
  return (
    <div>
      <FavColor />
      <h2>Animated Box</h2>
      <AnimationContainer />
      <h2>Rainbox Box</h2>
      <RainboxBox />
    </div>
  );
}

export default App;
