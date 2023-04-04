
import { Op } from "sequelize";

import Makeup from "../model/makeup.model.js";

export const save = async (request, response, next) => {
  try{ 
    let MakeupList = request.body.makeups;
    console.log(MakeupList)
   await Makeup.create(request.body)
   return response.status(200).json({message: 'makeup saved', status: true});
  }
  catch(err){
    console.log(err);
    return response.status(500).json({error: 'Internal Server Error', status: false});
}
}

export const list =async(request,response,next)=>{
  try{
      let makeup = await Makeup.findAll()
      return response.status(200).json({makeup:makeup,message:" makeupList",status:true});
  }catch(err){
     return response.status(500).json({message:"Internal Server Error",status:false});
  }
 }
 
 export const search = (request,response,next)=>{
  Makeup.findAll({
     where:{
        [Op.or]:{
           title:{
              [Op.like]:"%"+request.params.keyword+"%"
           },
           description:{
              [Op.like]:"%"+request.params.keyword+"%"
           }
        }
     }
  }).then(result=>{
     return response.status(200).json({makeup:result,message:"Search products",status:true});
  }).catch((err)=>{
     return response.status(500).json({error:"Internal Server Error",status:false});
  })
}

export const searchByAdd=(request,response,next)=>{
  console.log(request.params.address)
  Makeup.findAll({
     where:{
              Address:request.params.address
     }
  }).then(result=>{
     return response.status(200).json({address:result,message:"makeup-artist  By address",status:true});
  }).catch(err=>{
     return response.status(500).json({error:"Internal Server Error",status:false});
  })
}

   
export const remove = async (request, response, next) => {
  console.log(request.body);
  try {
      Makeup.destroy({
          where: {
              id: request.body.id
          }
      })
      return response.status(200).json({ message: "makeup is Removed", status: true });

  } catch (err) {
      return response.status(500).json({ error: "Internal Server Error", status: false });
  }

}
