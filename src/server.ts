import express, {Application, Request, Response} from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import {config as dotenvConfig} from 'dotenv-flow';
dotenvConfig();

//import routes
import boardsRoutes from './routes/boards';

const app: Application = express();

//paese request of content-type JSON
app.use(bodyParser.json());

mongoose.connect
(
    process.env.DBHOST as string,
    { 
        //useNewUrlParser: true,
        //useUnifiedTopology: true  
    }
).catch((error):void => console.log('Error connecting to MongoDB:', error));

mongoose.connection.on('connected', () : void => console.log('Connected successfully to MongoDB'));

//routes

//welcome route
app.get('/api/welcome', function(req: Request, res: Response) {
    res.status(200).send({message:'Hello, Welcome to MENtello RESTful API.'});
});


//CRUD operations
app.use("/api/boards", boardsRoutes);

const PORT: number = parseInt(process.env.PORT || '4000');

app.listen(PORT, function() {
    console.log('Server is running on Port:', PORT);
});

module.exports = app;
