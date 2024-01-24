const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, color, amount, product } = action.payload;
      const existingProduct = state.cart.find(
        (curItem) => curItem.id === id + color
      );

      if (existingProduct) {
        const updatedProduct = state.cart.map((curELem) => {
          if (curELem.id === id + color) {
            let newAmount = curELem.amount + amount;

            if (newAmount >= curELem.max) {
              newAmount = curELem.max;
            }

            return {
              ...curELem,
              amount: newAmount,
            };
          } else {
            return curELem;
          }
        });

        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        const cartProduct = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };

        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }

    case "SET_DECREMENT":
      const updatedProductDec = state.cart.map((curELem) => {
        if (curELem.id === action.payload) {
          let decAmount = curELem.amount - 1;

          if (decAmount <= 1) {
            decAmount = 1;
          }

          return {
            ...curELem,
            amount: decAmount,
          };
        } else {
          return curELem;
        }
      });

      return {
        ...state,
        cart: updatedProductDec,
      };

    case "SET_INCREMENT":
      const updatedProductInc = state.cart.map((curELem) => {
        if (curELem.id === action.payload) {
          let incAmount = curELem.amount + 1;

          if (incAmount >= curELem.max) {
            incAmount = curELem.max;
          }

          return {
            ...curELem,
            amount: incAmount,
          };
        } else {
          return curELem;
        }
      });

      return {
        ...state,
        cart: updatedProductInc,
      };

    case "REMOVE_ITEM":
      const updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );

      return {
        ...state,
        cart: updatedCart,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "CART_ITEM_PRICE_TOTAL":
      const { total_item, total_price } = state.cart.reduce(
        (accum, curElem) => {
          let { price, amount } = curElem;

          accum.total_item += amount;
          accum.total_price += price * amount;

          return accum;
        },
        {
          total_item: 0,
          total_price: 0,
        }
      );

      return {
        ...state,
        total_item,
        total_price,
      };

    default:
      return state;
  }
};

export default cartReducer;
