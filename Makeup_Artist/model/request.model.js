import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";

let Request = sequelize.define("request", {
    customerName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    contactNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalGeust: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    customerID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Makeup_ArtistID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    RequestDate: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

sequelize.sync().then(result => {
    console.log("request Table Created");
}).catch(err => {
    console.log(err);
})

export default Request;
