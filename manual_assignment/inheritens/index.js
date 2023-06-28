//## Problem 1 (Object to Object inheritance) :

//## You have been given 3 objects `grand_father`, `father` & `son`. create the prototype chain between them according to the family tree.

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
      dimple: true,
     greet: function() {
      console.log("Hello, I am the father!");
    }
   
  };
  Object.setPrototypeOf(father,grand_father)
  
  const son = {
      height: "short",
      hair_type: "straight",
      hair_color: "blond",
      skill: "coding",
    greet: function() {
      console.log("Hello, I am the son!");
    }
  };

  Object.setPrototypeOf(son,father)
  console.log(son.skin_tone,father.skin_tone,grand_father.skin_tone);


 // Problem 2 (function to object inheritance) :
 
    Mammal.prototype.makeSound=function(){
        console.log("Mammal is making sound.");
     },
      Mammal.prototype.canEat=function(){
        console.log(`${this.name} can eat.`);
     }
 

 function Mammal(name,has_skeliton,has_far,blood_type){
    let obj={};
    Object.setPrototypeOf(obj,Mammal.prototype);
    
    obj.name=name;
    obj.has_skeliton=has_skeliton;
    obj.has_far=has_far;
    obj.blood_type=blood_type;
// console.log(obj);
    return obj;
 }
 Object.setPrototypeOf(createHuman.prototype,Mammal.prototype)
 
 let ans=Mammal("Amit",true,true,"AB");
 console.log(ans);
 ans.makeSound()

 
    createHuman.prototype.canSpeak=function(){
         console.log(`${this.name} can speak.`)
    },
    createHuman.prototype.canDream=function(){
        console.log(`${this.name} can dream.`)
    }
 
 //Problem 3 (function-to-function inheritance) : 

 function createHuman( name, height, skintone, gender, hair_type ){
    let obj={};
    Object.setPrototypeOf(obj,createHuman.prototype);
   
   obj.name=name;
      obj.height=height;
      obj.skintone=skintone;
      obj.gender=gender;
      obj.hair_type=hair_type;
    return obj;
 }
 
 
 
 let a1=createHuman( "amit", 5.8, "black", "Male", "black" )
 console.log(a1);
 a1.canDream();
 a1.canEat();