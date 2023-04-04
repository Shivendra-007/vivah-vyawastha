import Feedback from "../model/feedback.model.js";

export const save = async (request, response, next) => {
    try {
        let Feedbacklist = request.body.feedback;

        console.log(Feedbacklist)
        await Feedback.create(request.body)
        return response.status(200).json({ message: 'feedback saved', status: true });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: 'Internal Server Error', status: false });
    }
}

export const list = async (request, response, next) => {
    try {
        let feedback = await Feedback.findAll()
        return response.status(200).json({ feedback: feedback, message: " feedback List", status: true });
    } catch (err) {
        return response.status(500).json({ message: "Internal Server Error", status: false });
    }
}

export const remove = async (request, response, next) => {
    console.log(request.body);
    try {
        Feedback.destroy({
            where: { id: request.body.id }
        })
        return response.status(200).json({ message: "feedback is Removed", status: true });

    } catch (err) {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }

}
