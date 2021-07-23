# Mid-Module Assessment

This challenge is designed to assess the JavaScript skills you have gained so far.

## Instructions

You will need to write four functions that require you to make use of loops, conditionals, logic, and the accumulator pattern.

After writing each function so that the tests pass, _please add your changes and commit your code._

To complete each function, follow the examples below, the tests, and the JSDoc comments.

Please note that you should use the accumulator pattern for _all of these problems._ You should not use strategies that have not been taught in this class.

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Data Structure

Each function makes use of a `animals` array, that contains a number of objects. The entire array is included below.

```js
const animals = [
  { kind: "Pig", count: 5 },
  { kind: "Cow", count: 7 },
  { kind: "Chicken", count: 11 },
  { kind: "Horse", count: 1 },
  { kind: "Dog", count: 2 },
  { kind: "Cat", count: 2 },
];
```

The fields for each animal is as follows:

- **kind**: The kind of animal.
- **count**: A number that represents the count of animals.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your local directory.

```
npm test
```

This will run the test output once.

### Test watcher

If you'd like, you can have the tests run constantly. This means that each time you save your file, your tests will re-run. To do so, you can run the following:

```
npm run watch
```

Follow the on-screen prompts to exit out of the constant runner.

### Run file

If you want to manually test out your file, you can do so by running the following command.

```
node index.js
```

The output will be printed to your terminal.

## Function Descriptions & Examples

Each function's purpose is described below and in the tests.

### getTotalCount()

This function should return a number which represents the total number of animals in the array. You can get the total number of animals by adding up all of the `count` values.

If the inputted array is empty, it should return the number `0`.

#### Example

```js
getTotalCount(animals); //> 28
```

### getAllKinds()

This function should return an array of strings. Each string is the `kind` of animal. The length of the returned array will be the same as the length of the array inputted into the function.

If the inputted array is empty, it should return an empty array.

#### Example

```js
getAllKinds(animals); //> ["Pig", "Cow", "Chicken", "Horse", "Dog", "Cat"]
```

### filterByCountMinimum()

This function should return an array of objects. The returned array will only have objects inside where the value of `count` is greater than or equal to the minimum value inputted.

The returned array could potentially be empty if the minimum value is higher than any `count` value. If the inputted array is empty, it should return an empty array.

#### Example

```js
filterByCountMinimum(animals, 5);
//> [
//>   { kind: "Pig", count: 5 },
//>   { kind: "Cow", count: 7 },
//>   { kind: "Chicken", count: 11 },
//> ];
```

### getMostCommonAnimal()

This function should return a single object. The object returned will be the object where the `count` is the highest of all other objects in the inputted array.

If there are multiple animals with the same highest count, return the one that appears earliest in the array. If the inputted array is empty, it should return an empty array.

#### Example

```js
getMostCommonAnimal(animals, 5);
//> [
//>   { kind: "Pig", count: 5 },
//>   { kind: "Cow", count: 7 },
//>   { kind: "Chicken", count: 11 },
//> ];
```

## Learning Objectives Assessed

The following learning objectives will be assessed in this assessment:

- Create and assign values to variables.
- Use arithmetic operators to build simple mathematical equations.
- Represent logical assertions using `===`, `&&`, `||`, and `!`.
- Conditionally run code based on values and expressions.
- Create functions with parameters using the function declaration syntax.
- Return values from functions.
- Interpret JSDoc function comments.
- Interpret test output in order to take actionable steps in code.
- Access elements in an array through bracket notation.
- Access values in an object through bracket and dot notation.
- Update values in an object with bracket and dot notation.
- Differentiate between arrays and objects.
- Write a `for` loop with a variable number of iterations.
- Write `for...of` loops to iterate over arrays.
- Use the command line to navigate via absolute and relative paths.
- Install and use the `code` command to open VSCode.
- Stage files with `git add`.
- Commit files with a sensible commit message using `git commit -m`.
- Fork and clone a repository.
- Create a pull request using a forked repository.
- Run JavaScript files with the `node` command.
- Apply the accumulator pattern to problems that return strings, numbers, or booleans.
- Apply the accumulator pattern to problems that return arrays.
