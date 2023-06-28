function iPhone1(ASIN, color, display, camera) {
    let obj = {};
    obj.ASIN=ASIN;
    obj.color=color;
    obj.display=display;
    obj.camera=camera;
    
    obj.dial=function(){
      console.log("tring.. tring..")
    }
    obj.sendMessage=function(){
      console.log("Sending message...")
    }
    obj.cameraClick=function(){
      console.log("Camera clicked")
    }
    // Your code here
    
    return obj;
  }
  
  // Example invocation: 
  let i1 = iPhone1(1,'B09X67JBQV',7.8,'IOS', '128mb','Gray','90mm','2.0 MP')
  i1.dial(); // "tring.. tring..."
  i1.sendMessage(); // "Sending message..."
  i1.cameraClick(); // "Camera clicked"
  
 
 
  function animal(noOfLegs, vegetarian) {
    // let obj = {};
  
    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;
  
    this.eat = function() {
      console.log('eating...')
    }
  
    this.greet = function() {
      console.log(`Hi, I have ${this.noOfLegs} legs.`)
    }
  
    // return obj;
  }
  
  // example invocation
  let a1 = new animal(4,true);
  console.log(a1)
  a1.eat() // eating...
  a1.greet() // Hi, I have 4 legs.

  // convert the following factory function to an ES6 class
class animal{
    constructor(noOfLegs, vegetarian){
      this.noOfLegs=noOfLegs;
      this.vegetarian=vegetarian;
      this.eat = function() {
      console.log('eating...')
      }
      this.greet = function() {
      console.log(`Hi, I have  ${this.noOfLegs} legs.`)
       }
     }
    
  }
  
  // example invocation
  let a2 = new animal(4,true);
  console.log(a2)
  a2.eat() // eating...
  a2.greet() // Hi, I have 4 legs.