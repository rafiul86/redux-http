

const initialState ={
    value : 0
    }
    export const countReducer = (state = initialState , action) => {
        switch(action.type){
            case 'INCREMENT' :
                return {
                    ...state,
                    value : state.value + action.payload
                }
                case 'DECREMENT' :
                return {
                    ...state,
                    value : state.value - action.payload
                }
                case 'RESET' :
                return initialState
                default : 
                return state
        }
    }