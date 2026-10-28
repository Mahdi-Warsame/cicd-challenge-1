const express = require("express");

const app=express();
const PORT=process.env.PORT||3000;

//Main application endpoint
app.get("/", (req, res)=>{
    res.json({
        message:"Hello! My Node.js application is running.",
        status:"success",
        version:"1.0.0"
    });
});

//Health check endpoint
app.get("/health", (req, res)=>{
    res.status(200).json({
        status:"healthy"
    });
});

// Start the server only when this file is run directly
if (require.main == module){
    app.listen(PORT,"0.0.0.0", () => {
        console.log(`Server running on port ${PORT}`);

    });
}

module.exports = app;