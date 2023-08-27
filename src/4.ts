class Key {
   private _id: number;

    constructor(id: number) {
        this._id = id;
    }

    get id(): number {
        return this._id;
    }
}

abstract class House {
    protected _key: Key;

    constructor(key: Key) {
        this._key = key;
    }

    abstract openDoor(key: Key): void;

    comeIn(person: Person): void {
        console.log(`Person has entered the house.`);
    }
}

class MyHouse extends House {
    openDoor(key: Key): void {
        if (this._key === key) {
            console.log('Door is opened.');
        } else {
            console.log('Wrong key. Door remains closed.');
        }
    }
}

class Person {
    private _key: Key;

    constructor(key: Key) {
        this._key = key;
    }

    getKey(): Key {
        return this._key;
    }
}

const key = new Key(1);
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};
