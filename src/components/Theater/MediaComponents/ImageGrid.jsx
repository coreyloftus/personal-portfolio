import React, { useEffect, useState } from "react"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"

// const cloudinary = require("cloudinary-core")
// cloudinary.config({
//     cloud_name: "dvedjgns8",
//     api_key: "932338252929798",
//     api_secret: "1TRfbyThx3Y6cWurH89K0Kjj_U0"
// })

const ImageGrid = () => {
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     setLoading(false)
    // }, [loading])
    // let imageUrls = async () => {
    //     try {
    //         cloudinary.v2.api.resources(
    //             { type: "upload", prefix: "theater/", max_results: 50 },
    //             function (error, result) {
    //                 if (error) {
    //                     console.error("Error fetching images:", error)
    //                 } else {
    //                     return result.resources.map((item) =>
    //                         cloudinary.url(item.public_id)
    //                     )
    //                 }
    //             }
    //         )
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // console.log(imageUrls)
    return (
        <Grid container spacing={3}>
            {/* {imageUrls.map((url, index) => (
                <Grid item xs={4} key={index}>
                    <Paper>
                        <img
                            src={url}
                            alt={`img-${index}`}
                            style={{ width: "100%" }}
                        />
                    </Paper>
                </Grid>
            ))} */}
        </Grid>
    )
}

export default ImageGrid
