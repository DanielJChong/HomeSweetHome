import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from '@reach/router';
import { navigate } from '@reach/router';


const Detail = props => {
    const [rv, setRv] = useState({})
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/rv/" + props.id)
            .then(res => setRv(res.data))
    }, [])

    const deleteRv = (rvId) => {
        axios.delete('http://localhost:8000/api/rv/' + rvId)
            .then(res => {
                navigate ("/rv")
            })
    }
    
    return (
        <div>
            <Link to={"/rv"}>Back to Dashboard</Link><br/>
            <img src={rv.mainImageUrl} width="750" id="detailsImg"/>
            <h1 id="detailsH1">{rv.rvName}</h1>
            <p>{rv.rvDescription}</p>
            <h3 id="detailsH3">Meet your Host: {rv.listerName}</h3>
            <p id="detailsP">Host contact info: {rv.contactInfo}</p>
            <p>RV Highlights: {rv.rvInfo}</p>
            <p>RV Amenities: {rv.amenities}</p>
            <h3>${rv.price}</h3>
            <button onClick={(e)=>{deleteRv(rv._id)}}>
                Reserve 
            </button>
        </div>
    )
}

export default Detail;