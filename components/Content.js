import React from "react"

export default function Content(props) {
    // console.log(props)
    return (
        <div className="main">
            <img 
                src={props.imageUrl}
                className="travel-img"
            />
            <div className="main-content">
                <div className="location-div">
                    <i className="fa-solid fa-location-dot fa-xs"></i>
                    <p className="location">{props.location}</p>
                    <a 
                        href="{props.googleMapsUrl}"
                        className="google-maps" 
                        target="_blank">View on Google Maps</a>
                </div>
                
                <h1 className="travel-title">{props.title}</h1>
                
                <div className="dates">
                    <p className="start-date">{props.startDate} - </p>
                    <p className="end-date">{props.endDate}</p>
                </div>
                
                <p className="travel-description">{props.description}</p>
                
            </div>
        </div>
    )
}