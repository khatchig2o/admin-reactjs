const initialValue = []

const STUDENTS = (state = initialValue, action) => {
    switch (action.type) {
        case 'AddStudent':
            state = [...state, action.payload]
            return state
        case 'DeletStudent':
            state = state.filter((person, i) => i !== action.payload)
            return state
        case 'EditStudent':
            state[action.payload.number] = action.payload.paylnewstate
            return state
        default:
            return state
    }
}

export default STUDENTS;