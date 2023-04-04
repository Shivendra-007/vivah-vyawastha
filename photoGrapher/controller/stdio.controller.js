import Stdio from "../model/stdio.model.js";

export const saveMultiple = async (request, response, next) => {
  try {
    let StdioList = request.body.stdios;
    console.log(StdioList);
    //   for(let stdio of StdioList){
    //    let {companyName,experience,address,thumbnail,description,price,rating,license,category,latitude,longitude,vendorId} = stdio;

    //    await Stdio.create({
    //     companyName:companyName,experience:experience,address:address,thumbnail:thumbnail,description:description,price:price,rating:rating,license:license,category:category,latitude:latitude,longitude:longitude,vendorId:vendorId
    //    });
    //  }
    await Stdio.create(request.body);
    return response.status(200).json({ message: 'stdio saved', status: true });
  }
  catch (err) {
    console.log(err);
    return response.status(500).json({ error: 'Internal Server Error', status: false });
  }
}

export const viewAll = (request, response, next) => {
  Stdio.findAll()
    .then(result => {
      return response.status(200).json({ stdio: result, status: true });
    }).catch(err => {
      return response.status(500).json({ error: "Intrnal Server Error", status: false });
    })
}