class Dog {
    name: string;
    age: number;
    birthYear: string;

    constructor(_name: string, _age: number){
        this.name = _name;
        this.age = _age;
        this.birthYear =  this.calculateBirthYearToday)
    }

    talk() {
        console.log('auf auf', this.name)
    }
}


const pincher = new Dog ('hanna', 10);
pincher.talk();