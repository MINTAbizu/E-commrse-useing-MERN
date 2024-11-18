export const initialState={
    basket:[],
    user:nul,
}


const reducer=(state,action)=>{
    switch(action.type){
        case"ADD_TO_BASKET":
        return{
            ...state,

            basket:[...state.basket,action.item],
        };
        
        case "EMPTY_BASKET":
			return {
				...state,
				basket: [],
			};

    }
}