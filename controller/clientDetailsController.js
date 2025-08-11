const clientService = require('../service/clientDetailsService');

const createClientController = async (req, res) => {
    try {
        const client = req.body;
        const result = await clientService.createClientService(client);
        res.status(201).json({ success: true, message: 'Client Added Successfully..!', data: client })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const getAllClientController = async (req, res) => {
    try {
        const result = await clientService.getAllClientService();
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const getClientByIdController = async (req, res) => {
    try {
        const clientId = req.params.id;
        const result = await clientService.getClientByIdService(clientId);
        if (result.length === 0) {
            return res.status(404).json({ success: false, message: 'Client Not Found' });
        }
        res.status(200).json({ success: true, data: result })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateClientController = async (req, res) => {
    try {
        const clientId = req.params.id;
        const clientData = req.body;
        const result = clientService.updateClientService(clientId, clientData);
        if (result.length === 0) {
            return res.status(404).json({ success: false, message: 'Client Not Found' });
        }
        res.status(200).json({ success: true, message: 'Client Update Successfully..!', data: clientData });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const deleteClientController = async (req, res) => {
    try {
        const clientId = req.params.id;
        const result = await clientService.deleteClientService(clientId);
        if (result.length === 0) {
            return res.status(404).json({ success: false, message: 'Client Not Found' });
        }
        res.status(200).json({ success: true, message: 'Client Deleted Successfully..!' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = {
    createClientController,
    getAllClientController,
    getClientByIdController,
    updateClientController,
    deleteClientController
};
