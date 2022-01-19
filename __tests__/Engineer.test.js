const Engineer = require('../lib/Engineer');
const engineer = new Engineer('yonas', '123', 'yonas@email.com', 'ybyonas1')

it("Can instantiate Engineer instance", () => {
    const emp = new Engineer();
    expect(typeof(emp)).toBe("object");

});

it("Test if the values entered match the constructor values", () => {
    expect(engineer.name).toBe('yonas');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('yonas@email.com');

});

it("Test if the name value matches the getName() method", () => {
    expect(engineer.getName()).toBe('yonas');

});

it("Test if the ID value matches the getId() method", () => {
    expect(engineer.getId()).toBe('123');

});

it("Test if the email value matches the getEmail() method", () => {
    expect(engineer.getEmail()).toBe('yonas@email.com');

});

it("Test if the Github value matches the getGithub() method", () => {
    expect(engineer.getGithub()).toBe('ybyonas1');

});

it("Test if the 'Get Role' value matches the getRole() method", () => {
    expect(engineer.getRole()).toBe('Engineer');

});