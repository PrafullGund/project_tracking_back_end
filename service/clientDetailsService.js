const dbConnection = require('../config/connection');

const createClientService = (clientData) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO ClientDetails (name,address,contactPersonName,mobileNo,email) VALUES (?,?,?,?,?)';
        dbConnection.query(query,
            [
                clientData.name,
                clientData.address,
                clientData.contactPersonName,
                clientData.mobileNo,
                clientData.email
            ],
            (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result);
                }
            });
    });
};

const getAllClientService = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM ClientDetails';
        dbConnection.query(query, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

const getClientByIdService = (clientId) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM ClientDetails WHERE id=?';
        dbConnection.query(query, [clientId], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

const updateClientService = (clientId, clientData) => {
    return new Promise((resolve, reject) => {
        const query = `UPDATE ClientDetails SET name=?,address=?, contactPersonName=?, mobileNo=?, email=? WHERE id=?`;
        dbConnection.query(
            query,
            [
                clientData.name,
                clientData.address,
                clientData.contactPersonName,
                clientData.mobileNo,
                clientData.email,
                clientId
            ],
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
    });
}

const deleteClientService = (clientId) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM ClientDetails WHERE id=?';
        dbConnection.query(query, [clientId], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    })
}

module.exports = {
    createClientService,
    getAllClientService,
    getClientByIdService,
    updateClientService,
    deleteClientService
}
