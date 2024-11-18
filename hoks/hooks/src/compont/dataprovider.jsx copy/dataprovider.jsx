import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const Dataprovider = ({ reducer, initialstate, children }) => {
    
        <StateContext.Provider value={useReducer(reducer, initialstate)}>
            {children}
        </StateContext.Provider>
    
}

export const useStateValue = () => useContext(StateContext);