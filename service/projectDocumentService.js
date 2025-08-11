const dbConnection = require('../config/connection');
const path = require('path');
const multer = require('multer');
const { error } = require('console');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb) {
        const fileTypes = /jpeg|jpg|png|pdf/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimeType = fileTypes.test(file.mimetype);
        if (mimeType && extname) {
            return cb(null, true);
        } else {
            cb('Error: Images and PDFs only!');
        }
    }
}).array('documents', 10);  

const saveDocument = (projectId, documentName, documentUrl) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO ProjectDocument (projectId, documentName, documentUrl) VALUES (?, ?, ?)';
        dbConnection.query(query, [projectId, documentName, documentUrl], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

const getAllDocumentService=()=>{
    return new Promise((resolve,reject)=>{
        const query='SELECT * FROM ProjectDocument';
        dbConnection.query(query,(error,result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        });
    });
}

const getDocumentByIdService = (documentId) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM ProjectDocument WHERE id = ?';
        dbConnection.query(query, [documentId], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result[0]);
            }
        });
    });
};


const updateDocumentService = (documentId, documentData) => {
    return new Promise((resolve, reject) => {
        const query = `UPDATE ProjectDocument SET projectId = ?, documentName = ?, documentUrl = ? WHERE id = ?`;
        dbConnection.query(
            query,
            [
                documentData.projectId,
                documentData.documentName,
                documentData.documentUrl,
                documentId
            ],
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
    });
};

const deleteDocumentService=(documentId)=>{
    return new Promise((resolve,reject)=>{
        const query='DELETE FROM ProjectDocument WHERE id=?';
        dbConnection.query(query,[documentId],(error,result)=>{
            if(error){
                reject(error);
            }else{
                resolve(result);
            }
        })
    })
}


module.exports = {
    upload,
    saveDocument,
    getAllDocumentService,
    getDocumentByIdService,
    updateDocumentService,
    deleteDocumentService
};
