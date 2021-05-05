import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Cart = (props) => {
    const { cart, removeFromCart} = props;
    return (
        <div className="text-center mt-2">
            <h4>This is Cart</h4>
            <ul className="mt-3">
            {
                cart.map(pd => <li className="mt-2" key={pd.cartId}>{pd.name} <button className="btn btn-danger" onClick={()=>removeFromCart(pd.cartId)}> X</button> </li>)
            }
            </ul>
        </div>

    );
};

const mapStateToProps = state =>{
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps) (Cart);