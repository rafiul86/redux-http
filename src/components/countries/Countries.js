import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchData from '../fetchData/fetchData';
import Country from './country/Country';

const Countries = ({fetchData ,countries, err,isLoading}) => {
    console.log(countries)
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div>
            <h1>{err}</h1>
           <div>
            {
                isLoading && <h1>Loading ...</h1>
            }
           </div>
           <div>
           <Grid container spacing ={4}>
           {
               countries.map(country =><Grid item xs={12} md={4} lg={3}><Country country={country}/></Grid> )
           }
           </Grid>
           </div>
        </div>
    );
};
const mapStateToProps = (state) =>({
    countries : state.fetch.user,
    err : state.fetch.err,
    isLoading : state.fetch.isLoading
})
export default connect(mapStateToProps , {fetchData}) (Countries);