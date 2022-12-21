class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.friends = [];
  }

  addFriend(friend) {
    this.friends.push(friend);
  }
}

const person1 = new Person('Anderson', 30);
person1.addFriend('Alan');
person1.addFriend('Junior');
console.log(person1.friends);
console.log(person1);
