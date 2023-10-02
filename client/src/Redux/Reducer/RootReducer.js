import { VISTAS_NO_VISIBLE } from "../Actions/VistasNoVisible";
import { VISTAS_VISIBLE } from "../Actions/VistasVisible";

const initialState = {
    isOpenMenu : false
};


const RootReducer = (state = initialState, action) => {

    switch (action.type) {
        case VISTAS_NO_VISIBLE:
            return {
                ...state,
                isOpenMenu: true
            };

        case VISTAS_VISIBLE:
            return {
                ...state,
                isOpenMenu: false
            };
        default:
            return {...state}
    }
};

export default RootReducer
