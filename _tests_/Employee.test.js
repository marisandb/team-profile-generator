const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee')

test('creates employee object', () => {
    const employee = new Employee('Bob Belcher', 44, 'bobbyboy@bobsburgers.com');

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
});

test('returns employee name', () => {
    const employee = new Employee('Bob Belcher', 44, 'bobbyboy@bobsburgers.com');
    expect(employee.getName()).toEqual(expect.any(String))
})

test('returns employee ID', () => {
    const employee = new Employee('Bob Belcher', 44, 'bobbyboy@bobsburgers.com');
    expect(employee.getId()).toEqual(expect.any(Number))
})

test('returns employee email', () => {
    const employee = new Employee('Bob Belcher', 44, 'bobbyboy@bobsburgers.com');
    expect(employee.getEmail()).toEqual(expect.any(String))
})

test('returns employee role', () => {
    const employee = new Employee('Bob Belcher', 44, 'bobbyboy@bobsburgers.com');
    expect(employee.getRole()).toEqual(expect.any(String))
})