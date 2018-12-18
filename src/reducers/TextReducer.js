export default function renderText (state = null, action = null) {
    const {type, payload} = action;
    switch (type) {
        case 'RENDER_TEXT':
            return payload;
        default:
            return state
    }
}
   