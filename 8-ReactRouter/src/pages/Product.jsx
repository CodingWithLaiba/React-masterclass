import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  return (
    <div>
      <h1>Product List:</h1>
      <p>Showing Products with id {id}</p>
    </div>
  );
}
