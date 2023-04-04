import Service from "../model/service.model.js";

export const save = async (request, response, next) => {
    try {
        let ServiceList = request.body.Service;

        console.log(ServiceList)
        await Service.create(request.body)
        return response.status(200).json({ message: 'makeup saved', status: true });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: 'Internal Server Error', status: false });
    }
}

export const list = async (request, response, next) => {
    try {
        let service = await Service.findAll()
        return response.status(200).json({ service: service, message: " makeupList", status: true });
    } catch (err) {
        return response.status(500).json({ message: "Internal Server Error", status: false });
    }
}

export const remove = async (request, response, next) => {
    console.log(request.body);
    try {
        Service.destroy({
            where: {id: request.body.id}})
        return response.status(200).json({ message: "service is Removed", status: true });

    } catch (err) {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }

}
