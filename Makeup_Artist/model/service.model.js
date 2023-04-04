import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";

let Service = sequelize.define("service", {
    serviceName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

sequelize.sync().then(result => {
    console.log("service Table Created");
}).catch(err => {
    console.log(err);
})

export default Service;
