import React, { useReducer } from "react";
import { type } from "../utilitys/action.types";

// Initial state
export const initialState = {
    basket: []
};

// Reducer function
export const reducer = (state, action) => {
    switch (action.type) {
        case type.ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        default:
            return state; // Always return state for unhandled actions
    }
};

// Component using the reducer
const MyComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Example of dispatching an action
    const addItemToBasket = (item) => {
        dispatch({ type: type.ADD_TO_BASKET, item });
    };

    return (
        <div>
            <h1>Basket</h1>
            <div>{JSON.stringify(state.basket)}</div>
            {/* Example button to add an item */}
            <button onClick={() => addItemToBasket({ id: 1, name: "Sample Item" })}>
                Add Item
            </button>
        </div>
    );
};

export default MyComponent;