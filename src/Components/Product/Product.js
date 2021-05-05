import React from 'react';

const Product = (props) => {
    const {name, id,img,price} = props.pd;
    const {addToCart} = props;
    return (
        <div style={{border: '1px solid gray',padding: '20px',margin: '42px'}} className="col-md-3 text-center mt-3">
            <img style={{height: '180px',width:'100%'}} src={img} alt=""/>
            <h5>{name}</h5>
            <h6>{price}</h6>
            <button className='btn btn-primary' onClick={() =>addToCart(id, name)} >Add To Cart</button>
        </div>
    );
};

export default Product;