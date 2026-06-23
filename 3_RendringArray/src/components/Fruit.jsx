export default function Fruit({ name, emoji, price, soldout }) {
  return (
    <div>
      {/* {emoji} {name} {price} */}
      {/* {price > 5 ? (
        <>
          {emoji} {name} {price}
        </>
      ) : (
        ""
      )} */}
      {emoji} {name} {price} {soldout ? "soldout" : ""}
    </div>
  );
}
