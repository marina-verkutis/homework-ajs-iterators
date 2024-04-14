import ErrorRepository from '../ErrorRepository';

describe('ErrorRepository', () => {
    let errorRepo: ErrorRepository;

    beforeEach(() => {
        errorRepo = new ErrorRepository();
    });

    test('Adding and translating error', () => {
        errorRepo.addError(404, 'Page not found');
        errorRepo.addError(500, 'Internal server error');

        expect(errorRepo.translate(404)).toBe('Page not found');
        expect(errorRepo.translate(500)).toBe('Internal server error');
    });

    test('Translating unknown error', () => {
        expect(errorRepo.translate(403)).toBe('Unknown error');
    });
});