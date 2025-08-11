const projectDocumentService = require('../service/projectDocumentService');

const uploadDocument = (req, res) => {
    projectDocumentService.upload(req, res, (err) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else {
            if (!req.files || req.files.length === 0) {
                return res.status(400).json({ message: 'No files selected!' });
            } else {
                const { projectId, documentName } = req.body;
                const fileSavePromises = req.files.map(file => {
                    const documentUrl = `/uploads/${file.filename}`;
                    return projectDocumentService.saveDocument(projectId, documentName, documentUrl);
                });

                Promise.all(fileSavePromises)
                    .then(results => {
                        const documents = results.map((result, index) => ({
                            documentId: result.insertId,
                            projectId,
                            documentName: req.body.documentName,
                            documentUrl: `/uploads/${req.files[index].filename}`
                        }));

                        res.status(200).json({
                            message: 'Documents uploaded and saved successfully!',
                            documents
                        });
                    })
                    .catch(err => {
                        res.status(500).json({ message: 'Database error', error: err });
                    });
            }
        }
    });
};

const getAllDocumentController=async (req,res)=>{
    try{
        const result=await projectDocumentService.getAllDocumentService();
        res.status(200).json({success:true, data:result});
    }catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const getDocumentByIdController=async(req,res)=>{
    try{
        const documentId=req.params.id;
        const result=await projectDocumentService.getDocumentByIdService(documentId);
        if(result.length===0){
            res.status(404).json({success:false,message:'Document Not Found'});
        }
        res.status(200).json({success:true,data:result})
    }catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const updateDocumentController = async (req, res) => {
    try {
        const documentId = req.params.id;
        const documentData = req.body;

        console.log('Document ID:', documentId);
        console.log('Received documentData:', documentData);

        if (!documentId || !documentData.projectId || !documentData.documentName || !documentData.documentUrl) {
            return res.status(400).json({ success: false, message: 'Missing required fields.' });
        }

        const updateResult = await projectDocumentService.updateDocumentService(documentId, documentData);

        if (updateResult.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Document not found' });
        }

        const updatedDocument = await projectDocumentService.getDocumentByIdService(documentId);

        res.status(200).json({
            success: true,
            message: 'Document Updated Successfully!',
            data: updatedDocument
        });
    } catch (error) {
        console.error('Error updating document:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteDocumentController=async(req,res)=>{
    try{
        const documentId=req.params.id;
        const result=await projectDocumentService.deleteDocumentService(documentId);
        if(result.length===0){
            res.status(404).json({success:false,message:'Document not found'})
        }
        res.status(200).json({success:true, message:'Document Deleted Successfully..!'});
    }catch (error) {
        console.error('Error updating document:', error);
        res.status(500).json({ success: false, message: error.message });
    }
}

const viewDocumentController=async(req,res)=>{
    try{
        const {id}=req.params.id;
        const document=await projectDocumentService.getDocumentByIdService(id);
        if(document){
            res.sendFile(document.DocumentUrl)
        }else {
            res.status(404).json({ message: 'Document not found' });
        }
    }catch (error) {
        console.error('Error updating document:', error);
        res.status(500).json({ success: false, message: error.message });
    }
}



module.exports = {
    uploadDocument,
    getAllDocumentController,
    getDocumentByIdController,
    updateDocumentController,
    deleteDocumentController,
    viewDocumentController
};
