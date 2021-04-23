import axios from 'axios'
import { failure, success,loading } from '../../actions/actions';

const fetchData = () => {
    return async(dispatch)=>{
            dispatch(loading())
            try{
                const result = await axios.get('https://restcountries.eu/rest/v2/all')
                dispatch(success(result.data))
            }
            catch(err){
                dispatch(failure(err.message))
            }
            }
            };

export default fetchData;