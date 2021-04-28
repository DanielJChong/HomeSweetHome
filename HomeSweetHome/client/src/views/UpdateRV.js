import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';

import RVForm from '../components/RVForm';


const Update = props => {
    const { id, } = props;
    const [rv, setRv] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/rv/' + id)
            .then(res => {
                setRv(res.data);
                setLoaded(true);
            })
    }, [])
    
    const updateRv = rv => {
        axios.put('http://localhost:8000/api/rv/' + id, rv)
            .then(res => navigate("/rv/lister"))
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr)
            });
    }
    
    return (
        <div>
            <Link to={"/rv/lister"}>Back to Dashboard!</Link>
            <h1>Update this RV!</h1>
            <h2></h2>
            {errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}
            {loaded && (
                <div>
                    <RVForm
                        onSubmitProp={updateRv}
                        initialListerName={rv.listerName}
                        initialContactInfo={rv.contactInfo}
                        initialRvName={rv.rvName}
                        initialRvDescription={rv.rvDescription}
                        initialMainImageUrl={rv.mainImageUrl}
                        initialPrice={rv.price}
                        initialRvInfo={rv.rvInfo}
                        initialAmenities={rv.amenities}
                    />
                </div>
            )}
        </div>
    )
}

export default Update;