import { charterRepository } from '../repositoties';

function getCharter(id) {
    return charterRepository.getCharter(id);
}

function getCharters() {
    return charterRepository.getCharters();
}

function saveCharter(charter) {
    return charterRepository.saveCharter(charter);
}

export const charterService = {
    getCharter,
    getCharters,
    saveCharter
};
