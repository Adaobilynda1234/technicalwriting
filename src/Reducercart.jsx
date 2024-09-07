import { useReducer } from "react";

const initialState = {
  cartItems: [],
  totalCost: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalCost: state.totalCost + action.payload.price,
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        totalCost: state.totalCost + action.payload.price,
      };
    case "REMOVE_ITEM":
      const itemToRemove = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!itemToRemove) return state;

      const updatedCart = state.cartItems
        .filter((item) => item.id !== action.payload.id)
        .map((item) =>
          item.quantity === 1 ? null : { ...item, quantity: item.quantity - 1 }
        )
        .filter(Boolean);
      return {
        ...state,
        cartItems: updatedCart,
        totalCost: state.totalCost - action.payload.price,
      };
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
}

export default function Reducercart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemToCart = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItemFromCart = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div>
      <button
        onClick={() => addItemToCart({ id: 1, name: "Product A", price: 50 })}
      >
        Add Product A
      </button>
      <button
        onClick={() => addItemToCart({ id: 2, name: "Product B", price: 100 })}
      >
        Add Product B
      </button>
      <button onClick={clearCart}>Clear Cart</button>

      <ul>
        {state.cartItems.map((item) => (
          <li key={item.id}>
            {item.name} (x{item.quantity} price:{item.price})
            <button onClick={() => removeItemFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>

      <p>Total Cost: ${state.totalCost}</p>
    </div>
  );
}
