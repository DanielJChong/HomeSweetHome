import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

import ListerRVList from '../components/ListerRVList';

const ListerDashboard = () => {
    const [rv, setRv] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/rv')
            .then(res =>{ 
                setRv(res.data)
                setLoaded(true);
            });
    }, [])
    
    const removeFromDom = rvId => {
        setRv(rv.filter(rv => rv._id != rvId));
    }
    
    return (
        <div>
            <Link to={"/"}>Back to Home!</Link><br/>
            
            <Link to={"/rv/new"} >List a new RV!</Link>
            <h1>My RVs that are Listed!</h1>
            {loaded && <ListerRVList rv={rv} removeFromDom={removeFromDom}/>}
            
        </div>
    )
}

export default ListerDashboard;