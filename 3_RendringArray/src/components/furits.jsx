import Fruit from "./Fruit";

export default function Furits() {
  //   const furits = ["Apple", "Mango", "Banana", "Orange", "Peach"];
  const furits = [
    { name: "Apple", price: "10", emoji: "🍎", soldout: false },
    { name: "Mango", price: "3", emoji: "🥭", soldout: true },
    { name: "Banana", price: "11", emoji: "🍌", soldout: false },
    { name: "Orange", price: "9", emoji: "🍊", soldout: false },
    { name: "Peach", price: "4", emoji: "🍑", soldout: true },
  ];
  return (
    <>
      <div>
        {/* for rendring simple array */}

        {/* {furits.map((fruit) => (
          <h4 key={fruit}>{fruit}</h4>
        ))} */}

        {/* for rendring array of objs */}

        {/* {furits.map((furit) => (
          <h5 key={furit.name}>
            {furit.emoji} {furit.name} ${furit.price}
          </h5>
        ))} */}

        {/* for rendring array of objs through child component */}
        {furits.map((furit) => (
          <Fruit
            key={furit.name}
            emoji={furit.emoji}
            name={furit.name}
            price={furit.price}
            soldout={furit.soldout}
          />
        ))}
      </div>
    </>
  );
}
