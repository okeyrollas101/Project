import React, { createContext, useContext, useReducer } from 'react';
// prepare dataLayer
export const StateContext = createContext();

// wrap our app and provide data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
   <StateContext.Provider value={useReducer(reducer, initialState)}>
     {children}
   </StateContext.Provider>
);

// pull info from datalayer
export const useStateValue = () => useContext(StateContext);



