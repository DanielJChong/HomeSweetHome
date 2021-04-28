import React from 'react'
import { Link } from '@reach/router';
import './components.css';

const RVList = props => {

    return (
        <div>
            {props.rv.map((rv, idx)=>
                <div>
                    <img src={rv.mainImageUrl} width="450"/><br/>
                    <Link to={"/rv/" + rv._id} id="listName">
                        {rv.rvName}
                    </Link>
                    <p>{rv.rvDescription}</p>
                    <p>{rv.rvInfo}</p>
                    <h4 id="listPrice">${rv.price}</h4>
                </div>    
            )}    
        </div>
    )
}

export default RVList;