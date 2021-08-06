const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee')

test('creats employee object', () => {
    const employee = new Employee('Bobbert', 35, 'bobbert@bob.com');

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
});

test('returns employee name', () => {
    const employee = new Employee('Bobbert', 35, 'bobbert@bob.com');

    expect(employee.getName()).toEqual(expect.any(String))
})

test('returns employee ID', () => {
    const employee = new Employee('Bobbert', 35, 'bobbert@bob.com');

    expect(employee.getId()).toEqual(expect.any(Number))
})