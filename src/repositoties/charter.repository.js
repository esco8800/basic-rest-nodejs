import { NotFoundError } from '../utils';

const charters = [
    {
        id: 'charter-1',
        from: 'Moscow',
        to: 'Berlin',
        price: 10000
    },
    {
        id: 'charter-2',
        from: 'Moscow',
        to: 'Rome',
        price: 7500
    },
    {
        id: 'charter-3',
        from: 'Moscow',
        to: 'Barcelona',
        price: 5000
    }
];

function getCharter(id) {
    const charter = charters.find(charter => charter.id === id);

    if (charter) {
        return Promise.resolve(charter);
    } else {
        return Promise.reject(new NotFoundError());
    }
}

function getCharters() {
    return Promise.resolve(charters);
}

function saveCharter(charter) {
    // Тут может быть асинхронный запрос в бд на сохранение сущьности
    return Promise.resolve(charter);
}

export const charterRepository = {
    getCharter,
    getCharters,
    saveCharter
};
