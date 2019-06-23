function echo<T>(arg: T): T {
  return arg;
}


echo(1)

var myStr = echo(1);


class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}


class Admin extends Person {

}

class Manager extends Person {

}

let admin = new Admin('a', 'a');

let manager = new Manager('a', 'a');

function personEcho<T extends Person>(person: T): T {
  return person;
}

var foo = personEcho(admin);

var bar = personEcho(manager);