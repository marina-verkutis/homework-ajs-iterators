import Settings from '../Settings';

describe('Settings tests', () => {
    test('Default settings', () => {
        const settings = new Settings();
        const defaultSettings = settings.getSettings();

        expect(defaultSettings.get('theme')).toBe('dark');
        expect(defaultSettings.get('music')).toBe('trance');
        expect(defaultSettings.get('difficulty')).toBe('easy');
    });

    test('Custom settings', () => {
        const settings = new Settings();
        settings.setSetting('theme', 'light');
        settings.setSetting('music', 'pop');
        settings.setSetting('difficulty', 'hard');

        const customSettings = settings.getSettings();

        expect(customSettings.get('theme')).toBe('light');
        expect(customSettings.get('music')).toBe('pop');
        expect(customSettings.get('difficulty')).toBe('hard');
    });

    test('Merging custom and default settings', () => {
        const settings = new Settings();
        settings.setSetting('theme', 'light');
        settings.setSetting('difficulty', 'hard');

        const mergedSettings = settings.getSettings();

        expect(mergedSettings.get('theme')).toBe('light');
        expect(mergedSettings.get('music')).toBe('trance'); // Default music setting
        expect(mergedSettings.get('difficulty')).toBe('hard');
    });
});