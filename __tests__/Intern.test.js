const Intern = require('../lib/Intern');
const Intern = new Intern('yonas', 123, 'yonas@email.com', 'ECU')

it("Can instantiate Intern instance", () => {
    const emp = new Intern();
    expect(typeof(emp)).toBe("object");

});

it("Test if the values entered match the constructor values", () => {
    expect(intern.name).toBe('yonas');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('yonas@email.com');

});

it("Test if the name value matches the getName() method", () => {
    expect(intern.getName()).toBe('yonas');

});

it("Test if the ID value matches the getId() method", () => {
    expect(intern.getId()).toBe('123');

});

it("Test if the email value matches the getEmail() method", () => {
    expect(intern.getEmail()).toBe('yonas@email');

});

it("Test if the School value matches the getSchool() method", () => {
    expect(intern.getSchool()).toBe('ECU');

});

it("Test if the 'Get Role' value matches the getRole() method", () => {
    expect(intern.getRole()).toBe('Intern');

});