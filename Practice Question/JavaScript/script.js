class Members {
    constructor(name, age, phone, salary) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.salary = salary;
    }
    printMember() {
        console.log('Name: ' + this.name);
        console.log('Age: ' + this.age);
        console.log('Phone Number: ' + this.phone);
        console.log('Salary: ' + this.salary)
    };
}

m1 = new Members('Mark', 31, '555-555-5555', '80k Annually');
m1.printMember();


class Employee extends Members {
    constructor(name, age, phone, salary, specialization, department) {
        super(name, age, phone, salary);
        this.specialization = specialization;
        this.department = department;
    }
    displayEmployee() {
        console.log('Name: ' + this.name);
        console.log('Age: ' + this.age);
        console.log('Phone Number: ' + this.phone);
        console.log('Salary: ' + this.salary);
        console.log('Specialization: ' + this.specialization);
        console.log('Department: ' + this.department);
    }
}

e1 = new Employee(m1.name, m1.age, m1.phone, m1.salary, 'Product Testing', 'Quality Control');
e1.displayEmployee();   