const initialValue = []

const SCHOOLS = (state = initialValue, action) => {
    switch (action.type) {
        case 'addSchool':
            state = [...state, action.payload]
            return state
        case 'deleteSchool':
            state = state.filter((person, i) => i !== action.payload)
            return state
        case 'editSchool':
            state[action.payload.number] = action.payload.paylnewstate
            return state
        default:
            return state
    }
}

export default SCHOOLS;