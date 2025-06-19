class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setName(value) {
    if (value.length < 4) {
      console.log("Name is too short");
      return;
    }
    this.name = value;
  }
}
let user = new User("John");
console.log(user.name);

user.setName("Vikky");

