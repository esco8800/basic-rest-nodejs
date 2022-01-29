import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { rootRouter } from './routes';
import { AppError } from './utils';

export function createApp() {
    const app = express();
    // Мидлвара для корсов
    app.use(cors());
    // Мидлвара для парсинга тела пост запроса
    app.use(bodyParser.urlencoded({ extended: true }));
    // Мидлвара для парсинга json
    app.use(bodyParser.json());

    app.use(rootRouter);
    app.use(appErrorHandler);

    return app;
}

function appErrorHandler(err, req, res, next) {
    if (err instanceof AppError) {
        res.status(err.status).send({ error: err.message });
    } else if (err.detail) {
        res.status(500).send({ error: err.detail });
    } else {
        next(err);
    }
}
