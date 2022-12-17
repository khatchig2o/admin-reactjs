const initialValue = {
    boxShow: false,
    BoxInfo: {},
    number : null
}

const ViewBox = (state = initialValue, action) => {
    switch (action.type) {
        case 'SHOWTHEBOX':
            state = {
                boxShow: action.payload.boxShow,
                BoxInfo: action.payload.BoxInfo,
                number : action.payload.Boxnumber
            }
            return state
        default:
            return state
    }
}

export default ViewBox;