const { resolve } = require('path');
const dbConnection = require('../config/connection');
const { rejects } = require('assert');

const createProjectService = (projectData) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO Project (projectName,clientId,techStack,startDate,endDate,progress) VALUES (?,?,?,?,?,?)';
        dbConnection.query(
            query,
            [
                projectData.projectName,
                projectData.clientId,
                projectData.techStack,
                projectData.startDate,
                projectData.endDate,
                projectData.progress
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

const getAllProjectService = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM Project';
        dbConnection.query(query, (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
        });
    });
}

const getProjectByIdService = (projectId) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM Project WHERE id=?';
        dbConnection.query(query, [projectId], (error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
        })
    })
}

const updateProjectService = (projectId, projectData) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE Project SET projectName=?, clientId=?, techStack=?, startDate=?,endDate=?,progress=? WHERE id=?';
        dbConnection.query(query,
            [
                projectData.projectName,
                projectData.clientId,
                projectData.techStack,
                projectData.startDate,
                projectData.endDate,
                projectData.progress,
                projectId
            ],
            (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            });
    });
}

const deleteProjectService = (projectId) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM Project WHERE id = ?';
        dbConnection.query(query, [projectId], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = {
    createProjectService,
    getAllProjectService,
    getProjectByIdService,
    updateProjectService,
    deleteProjectService
}