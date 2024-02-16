import clinicServices from "../services/clinicServices";

let createClinic = async (req, res) => {
    try {
        let infor = await clinicServices.createClinic(req.body);
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
    createClinic: createClinic,
}