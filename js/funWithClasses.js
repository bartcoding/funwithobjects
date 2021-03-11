class Person{

    constructor(name, age, hobby){
        this.name = name;
        this.age = age;
        this.hobby = hobby;
        console.log('a new object is born ' +  name + ' is its name');
    }

    greeting(){
        alert('howdy how! I am ' + this.name + ' and I\'m ready to '+ this.hobby + ' !');

    }
}


let person1 = new Person('zorro', 99 , 'ride a horse');
let person2 = new Person('anna', 16 , 'let it snow');
console.log(person1); //what will be printed in the console?

