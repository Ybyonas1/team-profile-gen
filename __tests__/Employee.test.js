const Employee = require('../lib/Employee');
const employee = new Employee('yonas', '123', 'yonas@email.com')

it("Can instantiate Employee instance", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");

});

it("Test if the values entered match the constructor values", () => {
    expect(employee.name).toBe('yonas');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('yonas@email.com');

});

it("Test if the name value matches the getName() method", () => {
    expect(employee.getName()).toBe('yonas');

});

it("Test if the ID value matches the getId() method", () => {
    expect(employee.getId()).toBe('123');

});

it("Test if the email value matches the getEmail() method", () => {
    expect(employee.getEmail()).toBe('yonas@email.com');

});

it("Test if the 'Get Role' value matches the getRole() method", () => {
    expect(employee.getRole()).toBe('Employee');

});

// it("Employee should have a name", () => {
//     const emp = new Employee();

//     expect("name" in emp).toEqual(true);
// });

// it("should set 'number' when created", () => {
//     const num = 108;

//     const obj = new Arithmetic(num);

//     expect(obj.number).toEqual(num);
// });

// it("should default 'number' to 0", () => {
//     const obj = new Arithmetic();

//     expect(obj.number).toEqual(0);
// });