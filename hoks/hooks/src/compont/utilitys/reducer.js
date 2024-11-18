import { type } from "../utilitys/action.types";

export const initialstate = {
    basket: [],
    user:null
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case type.ADD_TO_BASCKET:
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            case type.REMOVE_FROM_BASKET:
                const index=state.basket.findIndex(
                    (basketitem)=>basketitem.id ===action.id
                );
                let newbasket=[...state.basket];
                if(index>=0){
                    newbasket.splice(index,1);
                }else{
                    console.warn(`can't remove`)
                }
                
                return {...state,
                    basket:newbasket,
                };
                case "SET_USER":
                    return {
                        ...state,
                        user: action.user,
                    };

        default:
            return state;
    }
}

export default reducer;