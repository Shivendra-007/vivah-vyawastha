import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";

let Feedback = sequelize.define("feedback", {
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    makeUp_ArtistId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    review:{
        type :DataTypes.STRING,
        allowNull: false
    }

});

sequelize.sync().then(result => {
    console.log("feedback Table Created");
}).catch(err => {
    console.log(err);
})

export default Feedback;
