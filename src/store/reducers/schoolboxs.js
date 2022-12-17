const initialValue = {
    boxShow: false,
    BoxInfo: {}
}

const ViewBox = (state = initialValue, action) => {
    switch (action.type) {
        case 'SHOWTHEBOX':
            state = {
                boxShow: action.payload.boxShow,
                BoxInfo: action.payload.BoxInfo
            }
            return state
        default:
            return state
    }
}

export default ViewBox;