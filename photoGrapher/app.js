import bodyParser from "body-parser";
import express from "express";

import stdioRouter from "./route/stdio.route.js";
import serviceRouter from "./route/service.route.js";
import feedbackRouter from "./route/feedback.route.js";
import favouriteRouter from "./route/favourite.route.js"
import requestRouter from "./route/request.route.js"
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/stdio", stdioRouter);
app.use("/service", serviceRouter);
app.use("/feedback",feedbackRouter);
app.use("/favourite",favouriteRouter);
app.use("/request",requestRouter);

app.listen(8080, () => {
    console.log("Server Started");
})