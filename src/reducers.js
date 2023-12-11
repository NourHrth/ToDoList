
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload.text }];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.payload.id);
    case 'UPDATE_TODO':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.newText } : todo
      );
    default:
      return state;
  }
};

export default todoReducer;
