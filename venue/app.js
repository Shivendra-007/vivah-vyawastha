import express, { urlencoded } from "express";
import bodyParser from "body-parse";


const app=express();

app.use(bodyParser.json());
app.use(urlencoded({extended:true}));

app.use("/venueDetails",)

