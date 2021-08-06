const Employee = require('../lib/Employee')

test('creats employee object', () => {
    const employee = new Employee('Bobbert', 35, 'bobbert@bob.com');

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
});