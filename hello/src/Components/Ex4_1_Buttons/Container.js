import React from "react";
import MyButton from "./MyButton";

// <MyButton text="Important" weight="Bold" />
// <MyButton text="Not Important" weight="Regular" />
const data = [
  { text: "Important", weight: "bold" },
  { text: "Not important", weight: "regular" },
];

class Container extends React.Component {
  render() {
    return (
      <div>
        <MyButton text={data[0].text} fontWeight={data[0].weight} />
        <MyButton text={data[1].text} fontWeight={data[1].weight} />
      </div>
    );
  }
}
export default Container;
