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
    return ( 
        <div className="itemCounter">
            <div >
                <span className="itemCounterSpan">
                    <button onClick={subtracting} className="itemCounterButton" >-</button>
                    <span className="itemCounterNumber">{count}</span>
                    <button  onClick={adding}  className="itemCounterButton">+</button>
                </span>
            </div>
            <div className="agregarAlCarrito">
                <button> Agregar al carrito</button>
            </div>
        </div>
     );
}
 
export default ItemCount;