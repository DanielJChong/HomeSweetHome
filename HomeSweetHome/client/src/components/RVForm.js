import React, { useState } from 'react';
//import './rvForm.module.css';


const RVForm = props => {
    const { initialListerName, initialContactInfo, initialRvName, initialRvDescription, initialMainImageUrl,initialPrice,initialRvInfo, initialAmenities, onSubmitProp } = props;
    const [listerName, setListerName] = useState(initialListerName);
    const [contactInfo, setContactInfo] = useState(initialContactInfo);
    const [rvName, setRvName] = useState(initialRvName);
    const [rvDescription, setRvDescription] = useState(initialRvDescription);
    const [mainImageUrl, setMainImageUrl] = useState(initialMainImageUrl);
    const [price, setPrice] = useState(initialPrice);
    const [rvInfo, setRvInfo] = useState(initialRvInfo);
    const [amenities, setAmenities] = useState(initialAmenities);
    
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({listerName, contactInfo, rvName, rvDescription, mainImageUrl, price, rvInfo, amenities});
    }
        
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Your Name:</label><br />
                <input 
                    type="text" 
                    name="listerName" value={listerName} 
                    onChange={(e) => { setListerName(e.target.value) }} />
            </p>
            <p>
                <label>Contact Info:  (email, phone, or both)</label><br />
                <input 
                    type="text" 
                    name="contactInfo" 
                    value={contactInfo} 
                    onChange={(e) => { setContactInfo(e.target.value) }} />
            </p>
            <p>
                <label>Unique RV Name:</label><br />
                <input 
                    type="text" 
                    name="rvName" 
                    value={rvName} 
                    onChange={(e) => { setRvName(e.target.value) }} />
            </p><br/>
            <p>
                <label>Catchy RV Description:</label><br />
                <input 
                    type="text" 
                    name="rvDescription" 
                    value={rvDescription} 
                    onChange={(e) => { setRvDescription(e.target.value) }} />
            </p><br/>
            <p>
                <label>Main RV Photo:  (please add the URL here)</label><br />
                <input 
                    type="text" 
                    name="mainImageUrl" 
                    value={mainImageUrl} 
                    onChange={(e) => { setMainImageUrl(e.target.value) }} />
            </p>
            <p>
                <label>How much you want to charge:  (Please put "per night" or "per week" do Not put the "$")</label><br />
                <input 
                    type="text" 
                    name="price" 
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
            </p>
            <p>
                <label>RV Info:</label><br />
                <input 
                    type="text" 
                    name="rvInfo" 
                    value={rvInfo} 
                    onChange={(e) => { setRvInfo(e.target.value) }} />
            </p>
            <p>
                <label>Amenities:</label><br />
                <input 
                    type="text" 
                    name="amenities" 
                    value={amenities} 
                    onChange={(e) => { setAmenities(e.target.value) }} />
            </p>
            <input type="submit"/>
        </form>
    )
}

export default RVForm;