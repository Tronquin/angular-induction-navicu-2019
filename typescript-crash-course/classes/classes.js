var Person = /** @class */ (function () {
    function Person(gender) {
        this.gender = gender;
    }
    Person.prototype.talk = function (name) {
        return "Hi, my name is " + name + "and my gender is: " + this.gender;
    };
    return Person;
}());
var a = new Person("male");
var output = a.talk('jose');
