

const initialState ={
isLoading : false,
err : '',
user : []
}
export const fetchReducer = (state = initialState , action) => {
    switch(action.type){
        case 'SUCCESS' :
            return {
                ...state,
                err : '',
                user : action.payload,
                isLoading : false,
            }
            case 'FAILURE' :
            return {
                ...state,
                err : action.payload,
                isLoading : false,
            }
            case 'LOADING' :
            return {
                ...state,
                err : action.payload,
                isLoading : true
            }
            default : 
            return state
    }
}