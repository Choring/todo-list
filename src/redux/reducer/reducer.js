let initialState = {
    todo: []
}

function reducer(state = initialState, action){
    
    switch (action.type) {
        case "SAVE-TODO":
            return {...state, todo: [...state.todo, { text: action.payload, complete: false }]};
        
        case "DELETE-TODO":
            return {...state, todo: state.todo.filter((_, index) => index !== action.payload)}
        
        case "COMPLETE-TODO":
            return {...state, todo: state.todo.map((item, index) =>
                index === action.payload ? { ...item, complete: true } : item
            )}
        default:
            return {...state}
    }
}

export default reducer;