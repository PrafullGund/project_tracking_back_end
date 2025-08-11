const dbConnection=require('../config/connection');

const createUser = (userData) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO User (name,mobileNo,email) VALUES (?, ?, ?)`;
        dbConnection.query(
            query,
            [userData.name,  userData.mobileNo,userData.email],
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
    });
};

const getAllUsersService = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM User';
        dbConnection.query(query, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

const getUserByIdService = (userId) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM User WHERE id = ?';
        dbConnection.query(query, [userId], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

const updateUserService = (userId, userData) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE User SET name = ?, mobileNo = ?, email = ? WHERE id = ?';
        dbConnection.query(
            query,
            [userData.name, userData.mobileNo, userData.email, userId],
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
    });
};

const deleteUserService = (userId) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM User WHERE id = ?';
        dbConnection.query(query, [userId], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports={
    createUser,
    getAllUsersService,
    getUserByIdService,
    updateUserService,
    deleteUserService
}
