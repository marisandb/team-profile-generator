const { test, expect } = require('@jest/globals')
const Engineer = require('../lib/Engineer')


test('creates new engineer object', () => {
    const engineer = new Engineer('Linda Belcher', 44, 'lindab@bobsburgers.com', 'lindab');

    expect(engineer.name).toEqual(expect.any(String))
    expect(engineer.id).toEqual(expect.any(Number))
    expect(engineer.email).toEqual(expect.any(String))
    expect(engineer.github).toEqual(expect.any(String))
});

test('returns github username', () => {
    const engineer = new Engineer('Linda Belcher', 44, 'lindab@bobsburgers.com', 'lindab');

    expect(engineer.getGithub()).toEqual(expect.any(String))
})

test('returns engineer role', () => {
    const engineer = new Engineer('Linda Belcher', 44, 'lindab@bobsburgers.com', 'lindab');

    expect(engineer.getRole()).toEqual(expect.any(String))
})