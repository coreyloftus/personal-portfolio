import React from "react"
import NavbarTheater from "./Theater/NavbarTheater"
import Home from "./Theater/Home"

const Theater = () => {
    return (
        <>
            <div className=" bg-theater-bg-teal">
                <NavbarTheater />
                <Home />
            </div>
        </>
    )
}

export default Theater
