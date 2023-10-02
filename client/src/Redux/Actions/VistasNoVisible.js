export const VISTAS_NO_VISIBLE = 'VISTAS_NO_VISIBLE'

export const VistasNoVisible = () => {
    return async function(dispatch) {
        dispatch({type: VISTAS_NO_VISIBLE})
    }
}
