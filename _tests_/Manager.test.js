const { test, expect } = require('@jest/globals')
const Manager = require('../lib/Manager')

test('Creates new manager object', () => {
    const manager = new Manager('Calvin Fischoeder', 60, 'MrFischoeder@wonderwarf.com', 867-9309);

    expect(manager.name).toEqual(expect.any(String))
    expect(manager.id).toEqual(expect.any(Number))
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.officeNumber).toEqual(expect.any(Number))
})

test('returns manangers role', () => {
    const manager = new Manager('Calvin Fischoeder', 60, 'MrFischoeder@wonderwarf.com', 867-9309);

    expect(manager.getRole()).toEqual(expect.any(String))
})