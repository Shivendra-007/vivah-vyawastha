import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";

let Favourite = sequelize.define("favroutie", {
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    makeUp_ArtistId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

sequelize.sync().then(result => {
    console.log("favourite Table Created");
}).catch(err => {
    console.log(err);
})

export default Favourite;
