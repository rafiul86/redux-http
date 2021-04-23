

export const increment = (n) =>{
    return{
        type : 'INCREMENT',
        payload : n
    }
}
export const decrement = (n) =>{
    return{
        type : 'DECREMENT',
        payload : n
    }
}
export const reset = (n) =>{
    return{
        type : 'RESET',
    }
}
export const success = (n) =>{
    return{
        type : 'SUCCESS',
        payload : n
    }
}
export const failure = (n) =>{
    return{
        type : 'FAILURE',
        payload : n
    }
}
export const loading = (n) =>{
    return{
        type : 'LOADING',
    }
}