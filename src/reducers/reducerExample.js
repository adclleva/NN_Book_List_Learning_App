import React, { createContext, useState, useReducer } from 'react';

const AgeContext = createContext();

const ageReducer = (state, action) => {
  switch(action.type) { // this will evaluate the tag
    case 'ADD_ONE':
      return state + 1;
    case 'ADD_FIVE':
      return state + 1;
    case 'ADD_NUM':
      return state + action.num;
    default:
      return state;
  }
} 

/**
 * these dispatch functions can be called into a component which will 
 * make a dispatch onto the reducer and thus updates the state
 */
dispatch({ type: 'ADD_ONE' }) 
dispatch({ type: 'ADD_FIVE' }) 
dispatch({ type: 'ADD_NUM', num: 7 }) 

const AgeContextProvider = (props) => {
  const [age, dispatchAge] = useReducer(ageReducer, 20) // 20 is the default value for the age
  //const [age, setAge] = useState(20) // this will be the default
  
  // const addOneToAge = () => setAge(age + 1);
  // const addFiveToAge = () => setAge(age + 5);
  // const addNumToAge = (num) => setAge(age + num);
  // instead of calling these functions we use dispatch

  return (
    <AgeContext.Provider value={age, dispatch}> 
    {/* the dispatch is an action that we call onto the reducer
      * the benefit is that you pass in one function instead of multiple ones
      **/}
      {props.children}
    </AgeContext.Provider>
  )
}

export { AgeContext, AgeContextProvider } 