import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import './ShopCatecory.css'
import Item from "../../components/item/Item";

export default function ShopCategory(props) {
const {product}=useSelector(state=>state.products)
  return (
    <div className="shop-category">
      <img src={props.banner} alt='banner' />
      <div className="shopCategory-indxSort">
        <p>
          <span>Shoping 1-12 </span> out of 36 Products
        </p>
      </div>
      <div className="shopCategory-sort">
        Sort By <FontAwesomeIcon icon={faCircleChevronDown} size="2x"  />
      </div>
      <div className="shopCatogery-products">
        {product?.map((item,i)=>{
          if(item.category===props.category){
            return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
          }
        })}
      </div>
      <div className="shopCatogery-moreLoad">More Load</div>
    </div>
  )
}
