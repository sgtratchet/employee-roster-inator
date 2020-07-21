const Intern = require('../lib/Intern');

test('create Intern object',() => {
    const intern = new Intern ('Wendy', 'uofu');

    expect(intern.name).toBe('Wendy');
    expect(intern.school).toBe('uofu');
    expect(intern.role).toBe('Intern')
});
