import React from "react"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
require("dotenv").config()

const cloudinary = require("cloudinary").v2
// const cld = new Cloudinary({ cloud: { cloudName: "dvedjgns8" } })
// const imageUrls = [
//     "https://res.cloudinary.com/demo/image/upload/sample.jpg",
//     "https://res.cloudinary.com/demo/image/upload/sample1.jpg",
//     "https://res.cloudinary.com/demo/image/upload/sample2.jpg"
//     // ... more URLs
// ]
cloudinary.config({
    cloud_name: "dvedjgns8",
    api_key: "932338252929798",
    api_secret: "1TRfbyThx3Y6cWurH89K0Kjj_U0"
})
async function fetchImagesFromAlbum(folder) {
    try {
        const { resources } = await cloudinary.search
            .expression(`folder:${folder}`)
            .max_results(30)
            .execute()

        const imageUrls = resources.map((image) => image.secure_url)

        return imageUrls
    } catch (error) {
        console.error(error)
        return []
    }
}

// Usage
fetchImagesFromAlbum("theater")
    .then((urls) => {
        console.log(urls)
    })
    .catch((err) => {
        console.error(err)
    })

const ImageGrid = () => {
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
