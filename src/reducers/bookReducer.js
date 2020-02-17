import uuid from 'uuid'
/**
 * we have to check the action before manipulating the state
 * then we return the new state 
 */
export const bookReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_BOOK':
      return [...state, {
        title: action.book.title,
        author: action.book.author,
        id: uuid.v4()
      }]
    case 'REMOVE_BOOK': 
      return state.filter(book => book.id !== action.id)
    default:
      return state;
  }
}