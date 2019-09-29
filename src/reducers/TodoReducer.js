const initalState = [
    {
        todo: 'do my home work',
        complete: 'false'
    }
]

const TodoReducer = (state = initalState,action) => {
    switch(action.type) {
        case 'ADD_TODO':
            state = [...state,action.payload]
            break
        default:
            break
    }
    return state
}

export default TodoReducer