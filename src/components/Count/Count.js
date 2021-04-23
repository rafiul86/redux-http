import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement,  increment, reset } from '../../actions/actions';

const Count = () => {
        const count = useSelector(state => state.count.value)
        const dispatch = useDispatch()
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(increment(5))}>Increment</button>
            <button onClick={()=>dispatch(decrement(3))}>Decrement</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    );
};

export default Count;