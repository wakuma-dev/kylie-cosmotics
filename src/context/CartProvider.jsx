import React, { createContext, useReducer, useCallback } from "react";

export const CartContext = createContext(null);

const initialState = {
  cartItems: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const itemExists = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
}

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = useCallback((product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  }, []);

  const removeFromCart = useCallback((id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
