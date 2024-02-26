'use strict';
class ThePerson {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

}

class TheFlat {
    arr = [];
    addThePerson(person) {
        this.arr.push(person);
    }
    
}
class TheHouse {
    constructor(maxflats) {
        this.sumFlats = [];
        this.maxflats = maxflats;
    }
    addTheFlat(flat) {
        if (this.sumFlats.length < this.maxflats) {
            this.sumFlats.push(flat);
        } else {
            console.log('Exceeding the maximum number of flats!');
        }
    }
}

const mary = new ThePerson('mary', 'a woman');
const jake = new ThePerson('jake', 'a man');
const theFlat1 = new TheFlat();
const theFlat2 = new TheFlat();
theFlat1.addThePerson(mary);
theFlat2.addThePerson(jake);
const theHouse = new TheHouse(10);
theHouse.addTheFlat(theFlat1);
theHouse.addTheFlat(theFlat2);
console.log(theHouse);






