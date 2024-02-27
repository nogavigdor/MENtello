import {Schema, Document, model} from 'mongoose';

//define an interface representing the structure of a board document
interface IBoard extends Document {
    title: string;
    description: string;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
}

//Create a Mongoose schema using the interface
const boardsSchema = new Schema<IBoard>(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        createdBy: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            required: true
        },
        updatedAt: {
            type: Date,
            required: true
        }
    }
);

//Define and expost a Moongose model based on the schema
export default model<IBoard>('Board', boardsSchema);
