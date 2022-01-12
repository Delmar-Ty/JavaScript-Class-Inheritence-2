class Person { //Class 'Person' which is also the parent
    constructor(first, last, age, gender, interests) {
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    greeting() {
        console.log("Hi! I'm " + this.name.first);
    };
    farewell() {
        console.log(this.name.first + " has left the building. Bye for now!");
    };
}//end of the parent class 'Person'

//Greeting
let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();

//Farewell
let leia = new Person('Leia', 'Organa', 19, 'female', ['Government']);
leia.farewell();

//Child class which inherits 'Person' class
class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
        super(first, last, age, gender, interests);
        //Subject and grade are specific to Teacher and not Person
        this._subject = subject;
        this.grade = grade;
    }
    get subject() {
        return this._subject;
    }
    set subject(newSubject) {
        this._subject = newSubject;
    }
}

//object of the class Teacher(Child)
let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting();
snape.farewell();
snape.age;
console.log(snape.age);
snape.subject;
console.log(snape.subject);

snape.subject = "Balloon animals" //Changes subject to Balloon Animals

console.log(snape.subject);