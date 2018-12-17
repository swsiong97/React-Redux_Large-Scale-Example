export const simpleAction = () => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'result_of_simple_action'
    })
}

export const complexAction = () => dispatch => {
    dispatch({
        type: 'COMPLEX_ACTION',
        payload: 'result_of_complex_action'
    })
}