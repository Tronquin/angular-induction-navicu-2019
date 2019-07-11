class Person {
    gender: string;
    constructor(gender: string) {
        this.gender = gender;
    }

    public talk(name: string): string {
        return "Hi, my name is " + name + "and my gender is: " + this.gender;
    }
}

let a: Person = new Person("male");
let output: string = a.talk('jose');