var flower = {};
flower.color = ['red', 'violet', 'pink'];
flower.height = ['1.25', '2.25', '3.25'];
flower.pollinaters = ['bees', 'butterflies', 'birds'];
flower.pollinaters.push('humans');
flower.grow = function(){return this.height * this.height.length;};
//console.log(flower);
function Dog(name, colors, age) {
    this.name = name;
    this.colors = colors;
    this.age = age;
  }  
var dog1 = new Dog("Falcor", ["black"], 4);
var dog2 = new Dog("Nola", ["white", "black"], 6);
var dog3 = new Dog("Patsy", ["brown"], 7);  

console.log(dog2)

//console.log(flower.pollinaters);