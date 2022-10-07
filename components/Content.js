import React from "react"

export default function Content(props) {
    return (
        <div>
            <img 
                src={props.imageUrl}
            />
            <div>
                <p>{props.title}</p>
            </div>
        </div>
    )
}