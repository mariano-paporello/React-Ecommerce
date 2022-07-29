import cart from '../cart.png';
const CartWidget = () => {
    return ( 
        <span>
            <img className="cartImage" src={cart} alt="Cart"/>
        </span>
     );
}
 
export default CartWidget