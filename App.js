import React from "react"
import data from "./data"
import Navbar from "./components/Navbar"
import Content from "./components/Content"

export default function App() {
    const dataElements = data.map( d => {
        return <Content 
                    key={d.id}
                    title={d.title} 
                    location={d.location}
                    googleMapsUrl={d.googleMapsUrl}
                    startDate={d.startDate}
                    endDate={d.endDate}
                    description={d.description}
                    imageUrl={d.imageUrl} 
                />
    })
    return (
        <div>
            <Navbar/>
            <div className="container">
                {dataElements}
            </div>
        </div>
    )
}