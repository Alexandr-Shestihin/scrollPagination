const initialState = {
   todos: []
}

const ADD_TODOS = 'ADD_TODOS';

export const reducerTodos = (state = initialState, action) => {
   switch (action.type) {
      case ADD_TODOS:
         return { ...state, todos: action.todos }

      default:
         return state
   }
}

export const addTodos = (todos) => ({ type: ADD_TODOS, todos })