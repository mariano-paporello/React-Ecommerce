import React,{useState} from "react";

const ItemCount = (props) => {
    const [ count, setCount] = useState(props.initial)
    function adding (){
        if(count < props.stock)
        setCount(count + 1);
    }
    function subtracting(){
        if(count > props.initial){
            setCount(count -1)
        }
    }
    function handleAddToCart() {
        if (props.stock > 0 && count <= props.stock) {
          props.onAdd(count);
        }
      }
    return ( 
        <div className="itemCounter">
            <div >
                <span className="itemCounterSpan">
                    <button onClick={subtracting} className="itemCounterButton" >-</button>
                    <span className="itemCounterNumber">{count}</span>
                    <button  onClick={adding}  className="itemCounterButton">+</button>
                </span>
            </div>
            <div onClick={handleAddToCart} className="agregarAlCarrito">
                <button> Agregar al carrito</button>
            </div>
        </div>
     );
}
 
export default ItemCount;