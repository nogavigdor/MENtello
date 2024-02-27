import express, {Request, Response} from 'express';
const router = express.Router();
import Board from '../models/boards';

//CRUD operations

// /api/board -- post
//create a new board
router.post('/', function(req: Request, res: Response) {
    const {title, description, createdBy, createdAt, updatedAt} = req.body;
    const board = new Board({title, description, createdBy, createdAt, updatedAt});
    board.save().then((board) => {
        res.status(201).send(board);
    }).catch((error) => {
        res.status(500).send({message: 'Error creating board', error});
    });
});

export default router;