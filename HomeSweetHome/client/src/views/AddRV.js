import React, {useState} from 'react';
import axios from 'axios';
import {Link, redirect} from '@reach/router';
import {navigate} from '@reach/router';

import RVForm from '../components/RVForm';

const Add = () => {
    const [errors, setErrors] = useState([]);

    const createRV = rv => {
        axios.post('http://localhost:8000/api/rv', rv)
            .then(res=>{
                navigate ("/rv/lister");
                
            }) 
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                    console.log(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <h1>List a new RV!</h1>
            <Link to={"/rv/lister"}>Take me back to My Dashboard!</Link>
            {errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}
            <RVForm
                onSubmitProp={createRV}
                initialListerName=""
                initialContactInfo=""
                initialRvName=""
                initialRvDescription=""
                initialMainImageUrl=""
                initialPrice=""
                initialRvInfo=""
                initialAmenities=""
            />
        </div>
    )
}

export default Add;