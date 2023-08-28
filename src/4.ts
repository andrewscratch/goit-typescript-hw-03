class Key {
    private signature: number = Math.random();

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected tenants: Person[] = [];
    protected door: boolean = false;
    protected key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    abstract openDoor(key: Key): void;

    comeIn(person: Person): void {
        if (this.door) {
            if (!this.tenants.some(tenant => tenant.getKey().getSignature() === person.getKey().getSignature())) {
                this.tenants.push(person);
                console.log('Person has entered the house.');
            } else {
                console.log('This person is already inside.');
            }
        } else {
            console.log('Door is closed. Person cannot enter.');
        }
    }
}

class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('Door is opened.');
        } else {
            console.log('Wrong key. Door remains closed.');
        }
    }
}


const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};
