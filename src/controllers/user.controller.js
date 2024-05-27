import UsersDBManager from "../dao/dbManagers/UsersDBManager.js";
import CurrentDto from "../dto/userDto/CurrentDto.js";
const DBUsersManager = new UsersDBManager();

export default class dbUsersController {

    getAllUsers = async()=> {
    let download = await DBUsersManager.getUsers();
    return download;   
    }

    getUserByEmail = async(email)=> {
    let download = await DBUsersManager.getUserByEmail({ "email": email });
    return download
    }

    createOne = async(newUserInfo) => {
        let upload = await DBUsersManager.addUser(newUserInfo)
        return upload
    }

    getUserById = async(id)=> {
        let download = await DBUsersManager.getUserById(id);
        return download
        }

    getCurrentUserById = async (id) => {
        let download = await DBUsersManager.getUserById(id);
        const current = new CurrentDto(download)
        return current
    }


    updateUserByEmail = async(email,data)=> {
    const upload = await DBUsersManager.updateUserByEmail(email,data)  
    return upload
    }

    updateCart = async (uId, cId) => {
        const upload = await DBUsersManager.updateCart(uId, cId)
        return upload
    }

    updateConnection = async (email) => {
        const update = await DBUsersManager.updateConnection(email)
        return update
    }

    updateUserDocuments = async (userId, documents) => {
        const upload = await DBUsersManager.updateUserDocuments(userId, documents)
        return upload
    }

    updateToPremium = async (userId) => {
        const update = await DBUsersManager.updateToPremium(userId)
        return upload
    }

    updateProfileImg = async (userId, imgPath) => {
        const upload = await DBUsersManager.updateUserProfileImg(userId, imgPath)
        return upload
    }
    
}
