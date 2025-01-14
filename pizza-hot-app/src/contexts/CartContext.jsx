import { createContext, useReducer } from "react";
import cartReducer from "../reducers/cardReducer";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
  });

  //add item to cart
  function addToCart(item) {
    dispatch({ type: "ADD_TO_CART", item });
  }

  //update item in cart
  function updateItem(id, updatedItem) {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return updatedItem;
      }
      return item;
    });
    setItems(newItems);
  }

  //remove item from cart
  function removeFromCart(id) {
    dispatch({ type: "REMOVE_FROM_CART", id });
  }

  //clear cart
  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  const cartContext = {
    items: cart.items,
    addToCart,
    updateItem,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}
