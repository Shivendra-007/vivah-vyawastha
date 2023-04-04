
import Request from "../model/request.model.js";

export const save = async (request, response, next) => {
  try{ 
    let RequestList = request.body.Request;
    console.log(RequestList)
   await Request.create(request.body)
   return response.status(200).json({message: 'Request saved', status: true});
  }
  catch(err){
    console.log(err);
    return response.status(500).json({error: 'Internal Server Error', status: false});
}
}

export const list =async(request,response,next)=>{
  try{
      let Request = await Request.findAll()
      return response.status(200).json({Request:Request,message:" RequestList",status:true});
  }catch(err){
     return response.status(500).json({message:"Internal Server Error",status:false});
  }
 }
 
export const searchBydate=(request,response,next)=>{
  console.log(request.params.address)
  Request.findAll({
     where:{
        Request:request.params.Request
     }
  }).then(result=>{
     return response.status(200).json({Request:result,message:"makeup-artist  By address",status:true});
  }).catch(err=>{
     return response.status(500).json({error:"Internal Server Error",status:false});
  })
}

   
export const remove = async (request, response, next) => {
  console.log(request.body);
  try {
    Request.destroy({
          where: {
              id: request.body.id
          }
      })
      return response.status(200).json({ message: "makeup is Removed", status: true });

  } catch (err) {
      return response.status(500).json({ error: "Internal Server Error", status: false });
  }

}
