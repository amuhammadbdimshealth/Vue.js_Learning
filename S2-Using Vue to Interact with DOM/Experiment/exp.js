function Parent(fName, lName) {
    this.fName = fName;
    this.lName = lName;
}
Parent.prototype.sayHi = function() {
    return this.fName + "--" + this.lName + " says Hi";
};
function Child(fName, lName) {
    Parent.apply(this, arguments);
}
// Child.prototype = Object.create(Parent.prototype);
var arif = new Child("Arif", "MD");
console.dir(Child);
console.dir(arif);
