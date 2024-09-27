import "./NewCollections.css";
import Item from "../item/Item";
import { useSelector } from "react-redux";
import { getRandomElements } from "../../helper/Helper";
import { useEffect } from "react";
const NewCollections = () => {
  const { product } = useSelector((state) => state.products);
  const myArray = Array.from({ length: 36 }, (_, i) => i + 1); // مصفوفة أرقام من 1 إلى 36

  // استدعاء الدالة للحصول على 4 عناصر عشوائية
  const randomElements = getRandomElements(myArray, 4);

  let dataNewCollections = [1, 2, 3, 4];

  if (product.length > 0) {
    dataNewCollections = randomElements.map((e, i) => {
      return (dataNewCollections[i] = product[e]);
    });
  }

  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {dataNewCollections?.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
export default NewCollections;
