import ItemCard from "./ItemCard";
import items from "./stock.json"
const ItemListContainer = () => {
    return ( 
        <div className="mainPart">
            {items.map((item)=>{
                
                return <div className="card">
                    <ItemCard key={item.id} img={item.img} name={item.name} price={item.price} info={item.info} stock={item.stock}/>
                    </div>
            })}
        </div>
     );
}
 
export default ItemListContainer;