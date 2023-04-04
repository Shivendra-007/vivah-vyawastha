import express, { urlencoded } from "express";
import bodyParser from "body-parser";
import MakeupRoute from "./route/makeup.route.js"
import ServiceRoute from "./route/service.route.js"
import FavouriteRouter from "./route/favourite.route.js"
import FeedbackRouter from  "./route/feedback.route.js"
import RequestRouter from "./route/request.route.js"
const app=express();

app.use(bodyParser.json());
app.use(urlencoded({extended:true}));

app.use("/makeup",MakeupRoute);
app.use("/service",ServiceRoute);
app.use("/feedBack",FeedbackRouter);
app.use("/favourite",FavouriteRouter);
app.use("/request",RequestRouter);




app.listen(8009,()=>{
    console.log("Server Started");
})