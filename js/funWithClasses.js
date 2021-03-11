class Person{

    constructor(name, age, hobby){
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }

    greeting(){
        alert('howdy how! I am ' + this.name + ' and I\'m ready to '+ this.hobby + ' !');

    }
}

class Dancer extends Person{

    constructor(name, age, hobby, dancestyle){
        super(name, age, hobby);
        this.dancestyle =dancestyle;
    }

    dance(){
        alert('my name is ' + this.name + ' and i\'d like to say, I love dancing the ' + this.dancestyle + ' in a major way!');
    }
}



let person1 = new Person('zorro', 99 , 'ride a horse');
let person2 = new Person('anna', 16 , 'let it snow');

let dancer1 = new Dancer('Marry poppins', 20, 'magic', 'happy jive');

//create elements in html that show the persons and the dancer
//make buttons in html to make the person and dancer greet/dance
//use borders with random colors




