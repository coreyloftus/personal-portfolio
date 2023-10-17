import React from "react"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"

const imageUrls = [
    "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    "https://res.cloudinary.com/demo/image/upload/sample1.jpg",
    "https://res.cloudinary.com/demo/image/upload/sample2.jpg"
    // ... more URLs
]

const ImageGrid = () => {
    return (
        <Grid container spacing={3}>
            {imageUrls.map((url, index) => (
                <Grid item xs={4} key={index}>
                    <Paper>
                        <img
                            src={url}
                            alt={`img-${index}`}
                            style={{ width: "100%" }}
                        />
                    </Paper>
                </Grid>
            ))}
        </Grid>
    )
}

export default ImageGrid
