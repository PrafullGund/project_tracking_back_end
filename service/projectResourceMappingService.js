const { resolve } = require('path');
const dbConnection=require('../config/connection');
const { rejects } = require('assert');
const { error } = require('console');

const createProjectResourceMapping=(projectResource)=>{
    return new Promise((resolve,reject)=>{
        const query='INSERT INTO ProjectResourceMapping (userId,projectId) VALUES (?,?)';
        dbConnection.query(query,
            [
                projectResource.userId,
                projectResource.projectId
            ],
            (error,result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
    })
}

const getAllProjectResourceMapping=()=>{
    return new Promise((resolve,reject)=>{
        const query='SELECT * FROM ProjectResourceMapping';
        dbConnection.query(query,(error,result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        });
    });
}

const getProjectResourceMappingById=(projectResourceId)=>{
    return new Promise((resolve,reject)=>{
        const query='SELECT * FROM ProjectResourceMapping WHERE id=?';
        dbConnection.query(query,[projectResourceId],(error,result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        });
    });
}

const updateProjectResourceMapping=(projectResourceId,projectResourceData)=>{
    return new Promise((resolve,reject)=>{
        const query=`UPDATE ProjectResourceMapping SET userId=?, projectId=? WHERE id=?`;
        dbConnection.query(query,
            [
                projectResourceData.userId,
                projectResourceData.projectId,
                projectResourceId
            ],
            (error,result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
    })
}

const deleteProjectResourceMapping=(projectResourceId)=>{
    return new Promise((resolve,reject)=>{
        const query=`DELETE FROM ProjectResourceMapping WHERE id=?`;
        dbConnection.query(query,[projectResourceId],(error,result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result);
            }
        })
    })
}

module.exports={
    createProjectResourceMapping,
    getAllProjectResourceMapping,
    getProjectResourceMappingById,
    updateProjectResourceMapping,
    deleteProjectResourceMapping
}
