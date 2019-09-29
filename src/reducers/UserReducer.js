const initalState = {
    name: 'komkrit',
    surname: 'jankhong',
    age: 24
}

const UsersReducer = (state = initalState,action) => {
    switch(action.type) {
        case 'CHANGE_USER':
            state = action.payload
            break
        default:
            break
    }
    return state
}

export default UsersReducer