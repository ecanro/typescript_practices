import { foo } from './2';

//comment
let theName = "Hello world!";
theName = "Edgar";

console.log(theName)

foo('listen', theName);
foo('whach out!');


//otro

//predefinimos los tipos de variable
interface cat{
    name: string,
    age: number,
    color?: string
}

const myCat1 = {
    name: 'Luna',
    age: 4
};

const myCat2 = {
    name: 'estrella',
    age: 0.15
};

const myCat3 = {
    name: 'booties',
    age: 2
};

function calcBirthyearToday(theCat: cat): string {

    return ""  + (2020 - theCat.age)

}

const theCat1Birth = calcBirthyearToday