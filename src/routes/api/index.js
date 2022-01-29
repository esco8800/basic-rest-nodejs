import express from 'express';
import { chartersRouter } from './charters';

export const apiRouter = express.Router();
apiRouter.use('/charters', chartersRouter);
