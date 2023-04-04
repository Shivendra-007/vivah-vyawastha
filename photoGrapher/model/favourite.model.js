import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";

let Favourite = sequelize.define("favroutie", {
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    photographerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

sequelize.sync().then(result => {
    console.log("Favourite Table Created");
}).catch(err => {
    console.log(err);
})

export default Favourite;
