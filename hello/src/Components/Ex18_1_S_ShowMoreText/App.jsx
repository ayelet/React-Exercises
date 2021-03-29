import React from "react";
import MyText from "./MyText";

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam excepturi obcaecati, ea dicta perferendis, provident tenetur natus est aliquam sequi unde, numquam sed laboriosam impedit dolores exercitationem facilis voluptatem nam.";
const App = () => {
  return <MyText text={lorem} maxLen={10} />;
};

export default App;
