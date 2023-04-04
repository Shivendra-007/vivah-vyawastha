import Favourite from "../model/favourite.model.js";


export const save = async (request, response, next) => {
    try {
        let favourite = request.body.Favourite;

        console.log(favourite)
        await Favourite.create(request.body)
        return response.status(200).json({ message: 'makeup saved', status: true });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: 'Internal Server Error', status: false });
    }
}

export const list = async (request, response, next) => {
    try {
        let service = await Favourite.findAll()
        return response.status(200).json({ favourite: favourite, message: " makeupList", status: true });
    } catch (err) {
        return response.status(500).json({ message: "Internal Server Error", status: false });
    }
}

export const remove = async (request, response, next) => {
    console.log(request.body);
    try {
        Favourite.destroy({
            where: {id: request.body.id}})
        return response.status(200).json({ message: "favourite is Removed", status: true });

    } catch (err) {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }

}
