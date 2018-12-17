export default (state = {}, action) => {
    switch (action.type) {
        case 'COMPLEX_ACTION': {
            return {
                result: action.payload
            }
        }
        default:
            return state
    }
}
   