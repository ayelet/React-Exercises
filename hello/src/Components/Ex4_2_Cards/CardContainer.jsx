import React from "react";
import Card from "./Card";
import "./Card.css";


const cardsData = [
  {
    imageUrl:
      "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_360/public/Birman_body_6.jpg?itok=UsUD7-di",
    title: "Burmese",
    description: "Male: 9 to 15 pounds, Female: 6 to 10 pounds",
    links: ["#", "https://www.purina.com/breeds/birman-cat-breed"],
  },
  {
    imageUrl:
      "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_360/public/RussianBlue_body_7.jpg?itok=8GCUGZEQ",
    title: "Russian Blue",
    description: "8 to 15 pounds",
    links: ["#", "https://www.purina.com/cats/cat-breeds/russian-blue"],
  },
  {
    imageUrl:
      "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_360/public/Abyssinian_body_7.jpg?itok=5g6wdh0S",
    title: "Abyssinian",
    description:
      "Small to medium, with males weighing 7 to 10 pounds and females weighing 6 to 8 pounds",
    links: ["#", "https://www.purina.com/breeds/abyssinian-cat"],
  },
];

class Container extends React.Component {
  render() {
    return (
      <div>
        <h1>Cats Around the World</h1>
        <div className="card-container">
          {cardsData.map((cardInfo) => (
            <Card data={cardInfo} />
          ))}
        </div>
      </div>
    );
  }
}
export default Container;
