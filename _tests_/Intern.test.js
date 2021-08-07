const Intern = require('../lib/intern')

test('creates new intern object', () => {
    const intern = new Intern('Tina Belcher', 12, 'tinab@bobsburgers.com', 'Wagstaff');

    expect(intern.name).toEqual(expect.any(String))
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.email).toEqual(expect.any(String))
    expect(intern.school).toEqual(expect.any(String))
});

test('returns interns school name', () => {
    const intern = new Intern('Tina Belcher', 12, 'tinab@bobsburgers.com', 'Wagstaff');

    expect(intern.getSchool()).toEqual(expect.any(String))
})

test('returns interns role', () => {
    const intern = new Intern('Tina Belcher', 12, 'tinab@bobsburgers.com', 'Wagstaff');

    expect(intern.getRole()).toEqual(expect.any(String))
})