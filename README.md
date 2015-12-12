# One Quiz to Rule Them All

> **Instructions:**
>
> Fork this repository into your Github account. Any questions that require you to answer in your own words, but not write code (e.g. question 12) just edit this README with your answer.

## Setup

```
cd lib && bower install
cd ..
http-server
```

## Basics

> For this section, I wrote some starter DOM elements in the `index.html` file.

1. Write a selector that select only the first of the sibling li elements. Make the text for that item bold, and underlined.
2. Make all li elements behave as inline elements.
3. Only the odd section elements should have a border.
4. Only the even li elements should have a lime background.
5. Only the first aside element in the 2nd section should have blue font color.
6. There are three div elements with instructions inside them about which side of the screen they should be displayed on. Follow those instructions.
7. Using vanilla JavaScript, update the HTML of the element with the id of `vanilla_output` with the following text: "This content generated with vanilla JavaScript".
8. Using jQuery, update the HTML of the element with the id of `jquery_output` with the following text: "This content generated with jQuery".

## JavaScript concepts
1. Explain what hoisting is. Provide your answer below.

  Student answer:**Hoisting is the process that the JavaScript interpreter uses to "hoist" declarations to the top of the current scope. It's important to declare variables at the top of scope, because if they're declared further down a script, the declarations will be hoisted but the initialized values won't be, giving us bugs, bugs, bugs.**
1. What is a callback? Why do we use them in JavaScript? Provide your answer, and code a simple example below.

  Student answer:**A callback is a function that is passed as an argument to another function and will be 'called back' to execute at the appropriate point in a script.**

## Functions and operators

> In `main.js` do the following:

1. Write a function named `modulus` that takes two arguments. The function should use the modulo operator to return the remainder between the first and second arguments.  e.g. `modulus(10, 3) // Should return 1`.
1. Write a function named `doMath`. This function takes three arguments.  The first two will contain integer values. The third argument will be a function reference. Write two more functions named `add` and `subtract`. Execute the `doMath` function to add two numbers together. Then execute the `doMath` function to subtract the two numbers.

## Arrays

> In the `main.js`, I started you off with a simple array.

1. Write a function named `sortedPlanets` that returns an array of the planet names sorted alphabetically.
1. Write a function named `reversedPlanets` that returns an array of planet names that are reversed (i.e. "htraE").
1. Write a function named `longPlanets` that returns an array containing only the planet names that are 7 characters long, or longer.

## IIFE

1. I included two other script files in the HTML, `IIFE.js` and `AugmentedIIFE.js` that you will use for these tasks.
1. In the file named `IIFE.js`. Write an IIFE that defines a global variable named **FruitMaker**. It should contain a private array holding the following strings: "apples", "bananas", "cherries", "huckleberries". 
1. In the file named `AugmentedIIFE.js`, augment **FruitMaker** with a function named `slices()` that accepts two arguments: the name of the fruit, and the number of slices to make. It should return an array containing the name of the fruit duplicated how ever many slices was requested.

  For example: `slices("apples", 2)` should return `["apples", "apples"]`

## XHR

1. Write a function named `getAnimals` that uses the jQuery `ajax` method to retrieve the `data/animals.json` file. When you execute the functions, it should just log *just the array* of animals to the console when the async is complete. Make sure you provide a prompt of "animals" when logging the array.
1. What are the four HTTP verbs that you can use in an XHR that correspond to the CRUD actions (create, read, update, delete)?
  **POST, GET, PUT, DELETE:**

1. Why did we use Promises when dealing with asynchronous XHR calls?
  **We use Promises because JavaScript is single-threaded, meaning a given function or event may inevitably block our asynchronous XHR calls. A Promise can only succeed or fail once, though, and our associated success or failure callback functions (via the then() method) will be guaranteed to execute with the appropriate outcome, avoiding the blocking that happens without Promises.**

1. Provide a simple example of the syntax for handling a Promise.
  **xhrCall().then(function(resultantData){ console.log('success!') }, function(error) {console.log('error due to: ', error)});**

## Scope and this

What gets logged to the console when the following code executes? Explain why.

**Student answer:42 gets logged to the console. The reason for this is that, because the function steve() is called on the global object (window), 'this.answer' references the global variable 42 on the window object.**

```
var answer = "42";

function steve() {
  luke();
}

function luke() {
  var answer = "0";
  greg(answer);
}

function greg(answer) {
  var answer = "666";
  console.log( this.answer );
}

steve();
```

