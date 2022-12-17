const initialValue = []

const TEACHER = (state = initialValue, action) => {
    switch (action.type) {
        case 'addStudent':
            state = state.push(action.payload)
            return state
            break;
        case 'deleteStudent':
            state = state.filter((person, i) => i !== action.payload)
            return state
            break;
        case 'editStudent':
            return state
            break;
        default:
            return state
            break;
    }
}
export default TEACHER;