import React from 'react';
import { useSelector } from 'react-redux';


const LoaderComponent = () => {
    const isLoading = useSelector(state => state.loaderData.isLoading);

    if(!isLoading) return null;


    return (

    )
}

export default LoaderComponent;