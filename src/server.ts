import express, {Application, Request, Response} from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import {config as dotenvConfig} from 'dotenv-flow';

dotenvConfig();

const app: Application = express();
app.use(bodyParser.json());
//routes
app.get('/api/welcome', function(req: Request, res: Response) {
    res.status(200).send({message:'Hello, Welcome to MENtello RESTful API.'});
});

mongoose.connect
(
    process.env.DBHOST as string,
    { 
        //useNewUrlParser: true,
        //useUnifiedTopology: true  
    }
).catch((error):void => console.log('Error connecting to MongoDB:', error));

mongoose.connection.on('connected', () : void => console.log('Connected successfully to MongoDB'));
const PORT: number = parseInt(process.env.PORT || '4000');

app.listen(PORT, function() {
    console.log('Server is running on Port:', PORT);
});

module.exports = app;
