import ItemCount from "./ItemCount.jsx";
const ItemListContainer = () => {
    return ( 
        <div className="mainPart">
            <div className="card">
                <div>
                    <h2>
                        <p>Here will be the products</p>
                    </h2>
                </div>
                <div className="itemCountCss">
                    <h3>Here is the Item counter</h3>
                    <ItemCount stock={5} initial={1} />
                </div>
            </div>
        </div>
     );
}
 
export default ItemListContainer;