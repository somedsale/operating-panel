import React, { useEffect, useState } from 'react';
import { fetchDataFailure } from '../../features/api/apiSlice';
import { useDispatch } from 'react-redux';
import { getStatusLightingById } from '../../features/api/apiClient';

const RelayItem = ({id,name,type}) => {
    const [data,setData] = useState();
    const dispatch = useDispatch()
    const fetchRelay = async (id) =>{
        try{
            const response = await getStatusLightingById(id);
            setData(response.data.id);
        }catch(error){
            dispatch(fetchDataFailure(error.message))
        }
    }
    useEffect(()=>{
        fetchRelay(id)
    },[dispatch])
    return (
        <div>
            {name}
            <div>
            {data}
            </div>
        </div>
    );
}

export default RelayItem;
