let person1 = new Person('bobo','65','hobo');

let person2 = new Person('benny', 40, 'playing the guitar');

let person3 = new Person('betty', 30, 'playing badminton');

let person4 = new Person('billy', 20, 'playing cownboy and indian');

let person5 = new Person('bronco', 10, 'riding the minimotorcycle');

renderPeople();

function renderPeople(person1,person2,person3,person4,person5){

    //add the persons to the div with id people

}

/*
let person3 = {
    name: 'betty',
    age: 30,
    hobby: 'playing badminton'
}

let person4 = {
    name: 'billy',
    age: 20,
    hobby: 'playing cownboy and indian'
}

let person5 = {
    name: 'bronco',
    age: 10,
    hobby: 'riding the minimotorcycle'
}
*/
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);

function Person(name, age, hobby){
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.indroduction = function (){
        alert("Hi! nice to meet you, my name is " + this.name + ", I am " + this.age + "years old and my hobby is: " + this.hobby);
    }
    //add method that shouts introduces the person like: hello my name is name, my age is age and my main hobby is hobby


}
/*
function personCreateFunction(name, age, hobby){
    let personObject = {};
    personObject.name = name;
    personObject.age = age;
    personObject.hobby = hobby;

    let otherPersonObject = personObject;
    personObject = 'tomatenpuree';

    return otherPersonObject;
}
*/












