import { Sequelize } from "sequelize";

const sequelize=new Sequelize("venue","root","SHIV@2001",{
    host:"localhost",
    dialect:"mysql"
});

sequelize.sync()
.then(()=>{
    console.log("databse connected");
})
.catch(err=>{
    console.log(err);
})

export default sequelize;