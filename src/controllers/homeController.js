
import db from '../models/index'
import CRUDServices from '../services/CRUDServices';
let getHomePage = async (req, res) => {
    try {

        let data = await db.User.findAll();
        //console.log('----------')
        //console.log(data)
        //console.log('----------')
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        })
    } catch {

    }

}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs')
}


//object: {
//    key: '',
//    vakue:''
//}
let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}

let postCRUD = async (req, res) => {
    let message = await CRUDServices.createNewUser(req.body);
    console.log(message)
    return res.send('post crud from server');
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDServices.getAllUser();
    return res.render('displayCRUD.ejs', {
        dataTable: data
    });
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    console.log(userId);
    if (userId) {
        let userData = await CRUDServices.getUserInfoById(userId);
        return res.render('editCRUD.ejs', {
            user: userData
        });
    } else {
        return res.send('Users not found');
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDServices.updateUserData(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    });
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDServices.deleteUserById(id);
        return res.send('Delete the user succeed!')
    } else {
        return res.send('User not found!')
    }

}




module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}