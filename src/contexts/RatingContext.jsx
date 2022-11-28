//React and Core Components
import { createContext, useReducer } from 'react';

export const RatingContext = createContext();

const initialState = {
  rating: localStorage.getItem('rating')
    ? JSON.parse(localStorage.getItem('rating'))
    : null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_RATING':
        state.rating?
        state.rating = {...state.rating, ...action.payload}:
        state.rating = action.payload;
        localStorage.setItem('rating', JSON.stringify(state.rating));
      return { ...state, rating: state.rating };
    default:
      return state;
  }
}

export default function RatingContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RatingContext.Provider value={{ state, dispatch }}>
      {children}
    </RatingContext.Provider>
  );
}
