# Inheritance Using Factory functions

## Problem 1 (Object to Object inheritance) :

You have been given 3 objects `grand_father`, `father` & `son`. create the prototype chain between them according to the family tree.

```jsx
const grand_father = {
  height: "tall",
  skin_tone: "fair",
  hair_color: "black",
	hair_type: "curly",
  greet: function() {
    console.log("Hello, I am the grand-father!");
  }
};

const father = {
  skin_tone: "brown",
	hair_type: "straight",
	skill: "business",
	dimple: true
  greet: function() {
    console.log("Hello, I am the father!");
  }
};

const son = {
	height: "short",
	hair_type: "straight",
	hair_color: "blond",
	skill: "coding",
  greet: function() {
    console.log("Hello, I am the son!");
  }
};
```

## Problem 2 (function to object inheritance) :

Create a `Mammal` factory function that will take `has_skeliton`(Boolean), `has_far`(Boolean), and `blood_type`, as parameters and create an object with these properties. and also have the following methods :

- `makeSound` that console `Mammal is making sound.`
- `canEat` that will console`<name> can eat.`

add these methods to the prototype of the `Mammal` function and create the chain so that every object created by this `Mammal` factory function can access all these methods.

**Note: Do not add these methods directly to the object**

## Problem 3 (function-to-function inheritance) :

Create a `Mammal` factory function that will take `has_skeliton`(Boolean), `has_far`(Boolean), and `blood_type`, as parameters and create an object with these properties. and also have the following methods :

- `makeSound` that console `Mammal is making sound.`
- `canEat` that will console`<name> can eat.`

add these methods to the prototype of the `Mammal` function and create the chain so that every object created by this `Mammal` factory function can access all these methods.

Create one factory function named `createHuman` that will take`has_skeliton`(Boolean), `has_far`(Boolean), `blood_type`, `name`, `height`, `skintone`, `gender`, and `hair_type`, as parameters and create an object. 

This object should have methods -: 

- `canSpeak` that will console `<name > can speak.`
- `canDream` that console `<name> can dream.`

**Note:**  **all these methods should not be directly accessible instead add these methods to the prototype of the function.**

now create the prototype chain between `Mammal` and `createHuman` so that `Human` can use `Mammal’s` methods.

Create another factory function named `createEmployee` that will take`has_skeliton`(Boolean), `has_far`(Boolean), `blood_type`, `name,` `height`, `skintone`, `gender`,`hair_type`, `salary`, `position`, and `experience`, as parameters and create an object. 

This object should have methods 

- `handleTeam` that will console `<name > can handle team.`
- `doMarketing` that will console `<name> is good at marketing.`

**Note:**  **all these methods should not be directly accessible instead add these methods to the prototype of the function.**

now create the prototype chain between `createHuman` and `createEmployee` so that `employees` can use `human` methods.


## Problem 2 (function to object inheritance) :

Create a `Mammal` factory function that will take `has_skeliton`(Boolean), `has_far`(Boolean), and `blood_type`, as parameters and create an object with these properties. and also have the following methods :

- `makeSound` that console `Mammal is making sound.`
- `canEat` that will console`<name> can eat.`

add these methods to the prototype of the `Mammal` function and create the chain so that every object created by this `Mammal` factory function can access all these methods.

**Note: Do not add these methods directly to the object**

## Problem 3 (function-to-function inheritance) :

Create a `Mammal` factory function that will take `has_skeliton`(Boolean), `has_far`(Boolean), and `blood_type`, as parameters and create an object with these properties. and also have the following methods :

- `makeSound` that console `Mammal is making sound.`
- `canEat` that will console`<name> can eat.`

add these methods to the prototype of the `Mammal` function and create the chain so that every object created by this `Mammal` factory function can access all these methods.

Create one factory function named `createHuman` that will take`has_skeliton`(Boolean), `has_far`(Boolean), `blood_type`, `name`, `height`, `skintone`, `gender`, and `hair_type`, as parameters and create an object. 

This object should have methods -: 

- `canSpeak` that will console `<name > can speak.`
- `canDream` that console `<name> can dream.`

**Note:**  **all these methods should not be directly accessible instead add these methods to the prototype of the function.**

now create the prototype chain between `Mammal` and `createHuman` so that `Human` can use `Mammal’s` methods.

Create another factory function named `createEmployee` that will take`has_skeliton`(Boolean), `has_far`(Boolean), `blood_type`, `name,` `height`, `skintone`, `gender`,`hair_type`, `salary`, `position`, and `experience`, as parameters and create an object. 

This object should have methods 

- `handleTeam` that will console `<name > can handle team.`
- `doMarketing` that will console `<name> is good at marketing.`

**Note:**  **all these methods should not be directly accessible instead add these methods to the prototype of the function.**