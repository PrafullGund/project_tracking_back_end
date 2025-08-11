const { resolve } = require('path');
const dbConnection=require('../config/connection');

const createTaskService=(taskData)=>{
    return new Promise((resolve,reject)=>{
        const query='INSERT INTO Task (userId,projectId,taskDate,taskName,description) VALUES (?,?,?,?,?)';
        dbConnection.query(query,
            [
                taskData.userId,
                taskData.projectId,
                taskData.taskDate,
                taskData.taskName,
                taskData.description
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

const getAllTaskService=()=>{
    return new Promise((resolve,reject)=>{
        const query='SELECT * FROM Task';
        dbConnection.query(query,(error,result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        })
    })
}

const getTaskByIdService=(taskId)=>{
    return new Promise((resolve,reject)=>{
        const query='SELECT * FROM Task WHERE id=?';
        dbConnection.query(query,[taskId],(error,result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        })
    })
}

const updateTaskService=(taskId,taskData)=>{
    return new Promise((resolve,reject)=>{
        const query=`UPDATE Task SET userId=?, projectId=?,taskDate=?,taskName=?,description=? WHERE id=?`;
        dbConnection.query(query,
            [
                taskData.userId,
                taskData.projectId,
                taskData.taskDate,
                taskData.taskName,
                taskData.description,
                taskId
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

const deleteTaskService=(taskId)=>{
    return new Promise((resolve,reject)=>{
        const query='DELETE FROM Task WHERE id=?';
        dbConnection.query(query,[taskId],(error,result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        })
    })
}

module.exports={
    createTaskService,
    getAllTaskService,
    getTaskByIdService,
    updateTaskService,
    deleteTaskService
}