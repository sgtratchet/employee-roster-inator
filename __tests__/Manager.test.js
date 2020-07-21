const Manager = require('../lib/Manager')

test('create manager object',() => {
    const manager = new Manager ('Jasmine');

    expect(manager.name).toBe('Jasmine');
    expect(manager.role).toBe('Manager')
});