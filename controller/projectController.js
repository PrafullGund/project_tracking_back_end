const projectService = require('../service/projectService');

const createProjectController = async (req, res) => {
    try {
        const project = req.body;
        const result = await projectService.createProjectService(project);
        res.status(200).json({ success: true, message: 'Project Created Successfully..!', data: project });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const getAllProjectController = async (req, res) => {
    try {
        const result = await projectService.getAllProjectService();
        res.status(200).json({ success: true, data: result })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const getProjectByIdController = async (req, res) => {
    try {
        const projectId = req.params.id;
        const result = await projectService.getProjectByIdService(projectId);
        if (result.length === 0) {
            res.status(404).json({ success: false, message: 'Project Not Found' })
        }
        return res.status(200).json({ success: true, data: result })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const updateProjectController = async (req, res) => {
    try {
        const projectId = req.params.id;
        const userData = req.body;
        const result = await projectService.updateProjectService(projectId, userData);
        if (result.length === 0) {
            res.status(404).json({ success: false, message: 'Project Not Found' });
        }
        return res.status(200).json({ success: true, message: 'Project Update Successfully..!', data: userData });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const deleteProjectController = async (req, res) => {
    try {
        const projectId = req.params.id;
        const result = await projectService.deleteProjectService(projectId);
        if (result.length === 0) {
            res.status(404).json({ success: false, message: 'Project Not Found' });
        }
        return res.status(200).json({ success: true, message: 'Project Deleted Successfully..!' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = {
    createProjectController,
    getAllProjectController,
    getProjectByIdController,
    updateProjectController,
    deleteProjectController
}