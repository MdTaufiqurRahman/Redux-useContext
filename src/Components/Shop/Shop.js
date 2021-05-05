import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { UserContext } from '../../App';
import { addToCart } from '../../redux/actions/cartActions';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';


const Shop = (props) => {
    
    const [loggedIn, setLoggedIn] = useContext(UserContext);

    const {products, addToCart} = props;
    return (
        <section className="shop-container mt-3">
            <h5 className="text-center text-primary" >User Name: {loggedIn.name}</h5>
            <Cart></Cart>
             <div className="text-center">
            <h3>This is Shop</h3>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row pt-2">
            {
                products.map(pd => <Product
                    pd={pd}
                    key={pd.id} 
                    addToCart = {addToCart}
                    ></Product> )
            }
             </div>
        </div>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
  }
  const mapDispatchToProps = {
      addToCart: addToCart
  }
export default connect(mapStateToProps, mapDispatchToProps)(Shop);