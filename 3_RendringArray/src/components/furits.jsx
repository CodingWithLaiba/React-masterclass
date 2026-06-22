export default function Furits() {
  const furits = ["Apple", "Mango", "Banana", "Orange", "Peach"];

  return (
    <>
      <div>
       
        {furits.map((fruit) => (
          <h4 key={fruit}>{fruit}</h4>
        ))}
      </div>
    </>
  );
}
