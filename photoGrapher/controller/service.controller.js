import Service from "../model/service.model.js";

export const addService = async (request, response, next) => {
  try {
    let ServiceList = request.body.service;
    console.log(ServiceList);
    // for (let service of ServiceList) {
    //   let { serviceName, price } = service;

    //   await Service.create({
    //     title: price, serviceName: serviceName
    //   });
    // }
    await Service.create(request.body);
    return response.status(200).json({ message: 'Service saved', status: true });
  }
  catch (err) {
    console.log(err);
    return response.status(500).json({ error: 'Internal Server Error', status: false });
  }
}


export const viewService = async (request, response, next) => {
  try {
    let service = await Service.findAll()
    return response.status(200).json({ service: service, message: "Service List", status: true });
  } catch (err) {
    return response.status(500).json({ message: "Internal Server Error", status: false });
  }
}
export const remove = (request, response, next) => {
  Service.destroy({
    where: { id: request.body.serviceId }
  }).then(result => {
    return response.status(200).json({ message: "Service removed", status: true });
  }).catch(err => {
    return response.status(500).json({ error: "Internal Server Error", status: false });
  })
}
