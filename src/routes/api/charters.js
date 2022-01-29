import express from 'express';
import asyncHandler from 'express-async-handler';
import { charterService } from '../../services';
import { bodyValidator } from '../../validators';

export const chartersRouter = express.Router();

// Получаем все чаретры
chartersRouter.get(
    '/',
    asyncHandler(async (req, res) => {
        const charters = await charterService.getCharters();
        res.send(charters);
    })
);

// Получаем чартер по идентификатору
chartersRouter.get(
    '/:id',
    asyncHandler(async (req, res) => {
        const { id } = req.params;
        const charter = await charterService.getCharter(id);
        res.send(charter);
    })
);

// Добавление сущности
chartersRouter.post(
    '/save',
    asyncHandler(async (req, res) => {
        if (!req.body) {
            res.status(400);
            res.send('Body is empty ');
        }

        if (bodyValidator.validate(req.body)) {
            const charter = await charterService.saveCharter(req.body);
            res.send({
                id: charter.id
            });
        } else {
            res.status(400);
            res.send('Validate error');
        }
    })
);
