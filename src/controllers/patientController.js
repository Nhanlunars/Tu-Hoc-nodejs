import patienService from '../services/patienServices';

let postBoookAppointment = async (req, res) => {
    try {
        let infor = await patienService.postBoookAppointment(req.body);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

module.exports = {
    postBoookAppointment: postBoookAppointment
}