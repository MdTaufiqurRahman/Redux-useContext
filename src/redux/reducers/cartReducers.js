import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState ={
    cart: [],
    products: [
        { name: 'Laptop Asus',
        id: 1,
        price:'$'+350,
        img:'https://www.brightonline.co.ke/wp-content/uploads/2021/01/AsusVivobookF571GD.jpg'
  },
      { name: 'Laptop HP',
        id: 2,
        price:'$'+280,
        img:'https://www.hpexclusive.com.bd/image/cache/catalog/laptop/du2062tu/du2062tu-01-500x500.jpg'
  },
      { name: 'Laptop Dell',
        id: 3,
        price:'$'+199,
        img:'https://www.startech.com.bd/image/cache/catalog/laptop/dell/inspiron/15-3580-celeron/3580_1_1-500x500.jpg'
  },
      { name: 'Laptop Lenovo',
        id: 4,
        price:'$'+200,
        img:'https://cdn.vox-cdn.com/thumbor/-_eBCstYzuBsAi9JC5bfmzxznR4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15805856/20151117-lenovo-idea-pad-100s.0.1484343469.jpg'
  },
      { name: 'MacBook Air',
        id: 5,
        price:'$'+599,
        img:'https://www.notebookcheck.net/uploads/tx_nbc2/air13teaser.jpg'
  },
      { name: 'Laptop Tosiba',
        id: 6,
        price:'$'+399,
        img:'https://samtobeng.com/wp-content/uploads/2020/03/toshiba.jpg'
  },
      { name: 'Laptop Walton',
        id: 7,
        price:'$'+199,
        img:'https://www.nexus.com.bd/images/detailed/5/Walton_Tamarind_EX710g_Silver_Laptop.jpg'
  },
      { name: 'Laptop Acer',
        id: 8,
        price:'$'+269,
        img:'https://static.acer.com/up/Resource/Acer/Laptops/Aspire_7/images/20201005/Aspire-7-A715-75G-41G-FP-Black-modelmain.png'
  }
    ]
}

const cartReducers =(state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                 productId: action.id,
                 name: action.name,
                 cartId: state.cart.length +1
                }
            const newCart = [...state.cart, newItem];
            return {...state, cart: newCart};

        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item.cartId !== id);
            return {...state, cart: remainingCart};

        default:
            return state;
    }
}
export default cartReducers;