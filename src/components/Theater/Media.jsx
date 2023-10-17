import React from "react"
import ImageGrid from "./MediaComponents/ImageGrid"

const Media = () => {
    return (
        <div
            name="home"
            className="h-screen bg-theater-bg-dark flex items-center"
        >
            {/* container */}
            <div className="max-w-[1000px] px-8 flex flex-col justify-center"></div>
            <div>
                <ImageGrid />
            </div>
        </div>
    )
}

export default Media
