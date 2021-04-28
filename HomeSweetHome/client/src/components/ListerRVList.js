import React from 'react'
import { Link } from '@reach/router';

const ListerRVList = props => {

    return (
        <div>
            {props.rv.map((rv, idx)=>
                <div>
                    <img src={rv.mainImageUrl} width="650"/><br/>
                    <h2>{rv.rvName}</h2>
                    <Link to={"/rv/" + rv._id + "/edit"}>
                        Update Info on this RV?
                    </Link> 
                    <h4>My listing price: ${rv.price}</h4>
                </div>    
            )}    
        </div>
    )
}

export default ListerRVList;