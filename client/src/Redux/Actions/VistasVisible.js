export const VISTAS_VISIBLE = 'VISTAS_VISIBLE'

export const VistasVisible = () => {
    return async function(dispatch) {
        dispatch({type: VISTAS_VISIBLE})
    }
}
