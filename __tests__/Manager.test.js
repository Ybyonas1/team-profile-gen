const Manager = require('../lib/Manager');
const manager = new Manager('yonas', 123, 'yonas@email.com', '1234')

it("Can instantiate Manager instance", () => {
    const emp = new Manager();
    expect(typeof(emp)).toBe("object");

});

it("Test if the values entered match the constructor values", () => {
    expect(manager.name).toBe('yonas');
    expect(manager.id).toBe(123);
    expect(manager.email).toBe('yonas@email.com');

});

it("Test if the name value matches the getName() method", () => {
    expect(manager.getName()).toBe('yonas');

});

it("Test if the ID value matches the getId() method", () => {
    expect(manager.getId()).toBe(123);

});

it("Test if the email value matches the getEmail() method", () => {
    expect(manager.getEmail()).toBe('yonas@email.com');

});

it("Test if the Office Number value matches the getOfficeNumber() method", () => {
    expect(manager.getOfficeNumber()).toBe('1234');

});

it("Test if the 'Get Role' value matches the getRole() method", () => {
    expect(manager.getRole()).toBe('Manager');

});