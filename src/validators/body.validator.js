function validate(body) {
    if (
        typeof body.id === 'string' &&
        typeof body.from === 'string' &&
        typeof body.to === 'string' &&
        typeof body.price === 'number'
    ) {
        return true;
    }
    return false;
}

export const bodyValidator = {
    validate
};
