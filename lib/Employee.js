class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return "Employee";
    };
};
//  const Billy = new Employee("Billy", 1, "billyb@gmail.com");
//  console.log(Billy.getName());

 

 module.exports = Employee;