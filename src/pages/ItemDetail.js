import { useParams } from "react-router-dom";
import { ITEMS } from "../data/itemData";
const ItemDetail = () => {
    const {id}= useParams();
    const item = ITEMS.find((item)=> item.id === id);
    console.log(item);
  return (
    <>
    <main>
        <h1>ItemDetail</h1>
    </main>
    <h2>{item.title}</h2>
    <h3>{item.description}</h3>
    </>
  )
}

export default ItemDetail