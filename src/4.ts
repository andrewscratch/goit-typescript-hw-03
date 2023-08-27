class Key {}

class MyHouse {
  private doorIsOpen: boolean = false;
  private readonly keyForHouse: Key;

  constructor(key: Key) {
    this.keyForHouse = key;
  }

  openDoor(key: Key): void {
    if (key === this.keyForHouse) {
      this.doorIsOpen = true;
      console.log("Door is now open!");
    } else {
      console.log("Wrong key! Door remains closed.");
    }
  }

  comeIn(person: Person): void {
    if (this.doorIsOpen) {
      console.log(`${person.getName()} has entered the house.`);
    } else {
      console.log("Door is closed. Can't come in!");
    }
  }
}

class Person {
  private readonly myKey: Key;

  constructor(key: Key) {
    this.myKey = key;
  }

  getKey(): Key {
    return this.myKey;
  }

  getName(): string {
    return "John";
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};
