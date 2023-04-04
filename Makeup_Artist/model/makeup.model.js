import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";

let Makeup = sequelize.define("makeup", {
    companyName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    experience: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull:false
    },
    thumbnail: {
        type: DataTypes.STRING,
        allowNull:false
    },
    description: {
        type: DataTypes.STRING,
        allowNull:false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    license: {
        type: DataTypes.STRING,
        allowNull:false

    },
    category: {
        type: DataTypes.STRING,
        allowNull:false
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull:false
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull:false
    },
    vendorId: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
});

sequelize.sync().then(result => {
    console.log("makeup Table Created");
}).catch(err => {
    console.log(err);
})

export default Makeup;
