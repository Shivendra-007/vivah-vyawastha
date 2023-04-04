import Request from "../model/request.model.js";

export const saveRequest = async (request, response, next) => {
    try {
        let RequestList = request.body.request;
        console.log(RequestList);
        // for (let request of RequestList) {
        //     let { customerName, contactNumber, totalGuest, requestDate } = request;

        //     await Request.create({
        //         customerName: customerName, contactNumber: contactNumber, totalGuest: totalGuest, requestDate: requestDate
        //     });
        // }
        await Request.create(request.body);
        return response.status(200).json({ message: 'request saved', status: true });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: 'Internal Server Error', status: false });
    }
}


export const viewRequest = async (request, response, next) => {
    try {
        let request = await Request.findAll()
        return response.status(200).json({ request: request, message: "request List", status: true });
    } catch (err) {
        return response.status(500).json({ message: "Internal Server Error", status: false });
    }
}
export const remove = (request, response, next) => {
    Request.destroy({
        where: { id: request.body.requestId }
    }).then(result => {
        return response.status(200).json({ message: "request removed", status: true });
    }).catch(err => {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    })
}
