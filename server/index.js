import express from 'express';
import routes from './src/routes/routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 9000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mocksdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>
    res.send(`Mock store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Mock store server is running on port ${PORT}`)
);
