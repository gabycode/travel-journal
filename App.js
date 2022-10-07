import React from "react"
import data from "./data"
import Navbar from "./components/Navbar"
import Content from "./components/Content"

export default function App() {
    // const content = data.map(item => {
    //     return (
    //         <Content
    //             title={item.title}
    //             img={item.imageUrl}
    //         />
    //     )
    // })

    return (
        <div className="container">
            <Navbar/>
            <Content
                imgUrl="https://source.unsplash.com/WLxQvbMyfas"
                title="Mount Fuji"
            />
        </div>
    )
}