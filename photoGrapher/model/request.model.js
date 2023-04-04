import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";

let Request = sequelize.define("request", {
    customerName: {
        type: DataTypes.STRING,
        allowNull:false
    },

    contactNumber: {
        type: DataTypes.STRING,
        allowNull:false
    },
    totalGuest: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    photographerId: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    requestDate: {
        type: DataTypes.STRING,
        allowNull: false

    }
});

sequelize.sync().then(result => {
    console.log("Request Table Created");
}).catch(err => {
    console.log(err);
})

export default Request;