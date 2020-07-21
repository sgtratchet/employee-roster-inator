const Engineer = require('../lib/engineer');

test('create engineer object',() => {
    const engineer = new Engineer ('bob', 'sgtratchet');

    expect(engineer.name).toBe('bob');
    expect(engineer.github).toBe('sgtratchet');
    expect(engineer.role).toBe('engineer')
});