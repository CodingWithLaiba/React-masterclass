export default function Furits() {
  //   const furits = ["Apple", "Mango", "Banana", "Orange", "Peach"];
  const furits = [
    { name: "Apple", price: "10", emoji: "🍎" },
    { name: "Mango", price: "3", emoji: "🥭" },
    { name: "Banana", price: "11", emoji: "🍌" },
    { name: "Orange", price: "9", emoji: "🍊" },
    { name: "Peach", price: "4", emoji: "🍑" },
  ];
  return (
    <>
      <div>
        {/* for rendring simple array */}

        {/* {furits.map((fruit) => (
          <h4 key={fruit}>{fruit}</h4>
        ))} */}

        {/* for rendring array of objs */}

        {furits.map((furit) => (
          <h5 key={furit.name}>
            {furit.emoji} {furit.name} ${furit.price}
          </h5>
        ))}
      </div>
    </>
  );
}
