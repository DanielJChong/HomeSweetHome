import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

import RVList from '../components/RVList';

const RenterDashboard = () => {
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
            <h1 id="rdH1">Great RV's for Rental!</h1>
            <Link to={"/"}>Back to Home!</Link>
            <h3 id="rdH3">Super Awesome RV's to choose from!</h3>
            {loaded && <RVList rv={rv} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default RenterDashboard;