const path = require("path");
import express from 'express';
import routes from './src/routes/routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 9000;

var allowedOrigins = ['http://localhost:3000'];
app.use(cors({
    credentials: true,
    origin: function (origin, callback) {
        console.log(origin);
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mocksdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

routes(app);



/* [Optional] Mapping the build of UI setup */
app.use(express.static(path.join(__dirname, "..", "gui", "build")));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "gui", "build", "index.html"));
});

app.listen(PORT, () =>
    console.log(`Mock store server is running on port ${PORT}`)
);
