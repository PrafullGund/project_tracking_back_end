const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const userRoute=require('./routes/userRoute')
const clientDetailsRoute=require('./routes/clientDetailsRoute');
const projectRoute=require('./routes/projectRoute');
const projectResourceMappingRoute=require('./routes/projectResourceRoutes');
const projectDocumentRoute=require('./routes/projectDocumentRoute');
const taskRoute=require('./routes/taskRoute');
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRoute);
app.use('/client',clientDetailsRoute);
app.use('/project',projectRoute);
app.use('/projectResourceMapping',projectResourceMappingRoute);
app.use('/projectDocument',projectDocumentRoute);
app.use('/task',taskRoute);

const port = 8000;
app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`);
});

