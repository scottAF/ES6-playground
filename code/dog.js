"use srict";

class Animal {
  eat() {
    console.log("yum umm num");
  }
}

class Dog extends Animal {

}

const d = new Dog();

d.eat();