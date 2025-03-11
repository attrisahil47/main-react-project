const mongoose = require("mongoose");
const express = require("express");
const colors = require("colors");
const backend = express();
const http = require("http").Server(backend);
const cors = require("cors")
const routes = require("./Routes")

backend.use(express.json());

backend.use(cors({
    origin: "*",
    methods: ["GET", "PUT", "PATCH", "POST", "DELETE"]

})
);

backend.use(routes)


mongoose.connect("mongodb+srv://attrisahil47:sOSZTVrmU6HRRL8o@backend.gney5.mongodb.net/")
.then(() => {
    console.log(colors.green("✓ DB is connected with Backend"));
    const PORT = 5000;
    http.listen(PORT, () => {
        console.log(colors.cyan(`Server is listen on port : ${PORT}`));
        
    });
})
.catch((error) => {
    console.error(colors.red("Error connecting to DB:", error));
});

backend.get("/", (req, res) => {
    res.send("Welcome to the Backend Server!");
});

backend.get("/login",(req,res)=>{
    res.send("welcome to login page");
});