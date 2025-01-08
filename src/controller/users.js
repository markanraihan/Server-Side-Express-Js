const UserModel = require('../models/users.js')

// CRUD Create dari user ke Database
const createNewUser = async (req, res) => {
    const {body} = req;

    if (!body.name || !body.email || !body.address){
        return res.status(400).json({
            message: "anda belum melengkapi form",
            data: null
        })
    }
    
    try {
        await UserModel.CreateNewUser(body);
        res.status(201).json({
            message: 'CREATE new user succes',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

// CRUD Read dari user ke Database
const getAllUsers = async (req, res) => {
    try {
        const [data] = await UserModel.getAllUsers();
        res.json({
            message: 'GET All users succes',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }

}

// CRUD Update dari user ke Database
const updateUser = async (req, res) => {
    const { idUser } = req.params
    const {body} = req;
    try {
        await UserModel.updateUser(body, idUser);
        res.status(201).json({
            message: "UPDATE user succes",
            data: {
                id: idUser,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

// CRUD Delete dari user ke Database
const deleteUser = async (req, res) => {
    const { idUser } = req.params
    const {body} = req;
    try {
        await UserModel.deleteUser(idUser);
        res.json({
            message: "DELETE user succes",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}