
import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
// this is module type
// const  expxress = require("express")
// this is common js
import path from "path";
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import { connectDB } from "./lib/db.js";
import {app,server} from "./lib/socket.js"

dotenv.config()
// once this function is called you can call th enviorement varibles fuction
// const app = express()

const PORT = process.env.PORT
const __dirname = path.resolve();
// to read enviorment variavles file
app.use(express.json());

app.use(cookieParser());
// if i want to extract the json data from the body you should be using this


app.use(
    cors({
        origin:"http://localhost:5173",
        credentials: true,
    })
)
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
 
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
  }
  

server.listen(PORT, ()=>{ 
    console.log("server is running on port: " + PORT) 
    connectDB()
} )
// 20:58
// 20:58
// dot env package is  used toload enviormant variabnles from .env filw in node js application . this allows you to store sensitve information like databse and url and web apnkeys isntead of hardcoding thme into your code

// jwt is used for authentication and authiriasation to verify the identity of the user it is commonly used in web appplia=caqtion fr auhtthencitatio 

// bcrypt js sed for passwrd hasing and security is js library used for password hasing before storingtem isto the database

// cloudinarybis a cloud based sercice that is used to upload sotre manahe and  optoimze images and vis=deos in web applicaion 
// socket .io is sused for real time web application is js library that enables real ime and biderctionnal and event driven communication betwen cients and servers it is commonly used for chat application live ntification and collobaorie tools and real time updates ain web pages


