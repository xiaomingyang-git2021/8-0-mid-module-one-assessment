const {
  getTotalCount,
  getAllKinds,
  filterByCountMinimum,
  getMostCommonAnimal,
} = require("../");

const animals = [
  { kind: "Pig", count: 5 },
  { kind: "Cow", count: 7 },
  { kind: "Chicken", count: 11 },
  { kind: "Horse", count: 1 },
  { kind: "Dog", count: 2 },
  { kind: "Cat", count: 2 },
];

describe("getTotalCount()", () => {
  test("should return the total count for all animals", () => {
    const actual = getTotalCount(animals);
    const expected = 28;
    expect(actual).toEqual(expected);
  });

  test("should return the total count for a different set of animals", () => {
    const actual = getTotalCount(animals.slice(2));
    const expected = 16;
    expect(actual).toEqual(expected);
  });

  test("should return 0 if the input is empty", () => {
    const actual = getTotalCount([]);
    const expected = 0;
    expect(actual).toEqual(expected);
  });
});

describe("getAllKinds()", () => {
  test("should return an array of animal kinds", () => {
    const actual = getAllKinds(animals);
    const expected = ["Pig", "Cow", "Chicken", "Horse", "Dog", "Cat"];
    expect(actual).toEqual(expected);
  });

  test("should return an array of animal kinds from a different set of animals", () => {
    const actual = getAllKinds(animals.slice(4));
    const expected = ["Dog", "Cat"];
    expect(actual).toEqual(expected);
  });

  test("should return an empty array if the input is empty", () => {
    const actual = getAllKinds([]);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});

describe("filterByCountMinimum()", () => {
  test("should filter through the inputted objects and return an array where objects have a count greater to or equal to the inputted minimum value", () => {
    const minimum = 5;
    const actual = filterByCountMinimum(animals, minimum);
    const expected = [
      { kind: "Pig", count: 5 },
      { kind: "Cow", count: 7 },
      { kind: "Chicken", count: 11 },
    ];
    expect(actual).toEqual(expected);
  });

  test("should filter by different minimums", () => {
    const minimum = 2;
    const actual = filterByCountMinimum(animals, minimum);
    const expected = [
      { kind: "Pig", count: 5 },
      { kind: "Cow", count: 7 },
      { kind: "Chicken", count: 11 },
      { kind: "Dog", count: 2 },
      { kind: "Cat", count: 2 },
    ];
    expect(actual).toEqual(expected);
  });

  test("should filter through a different set of animals", () => {
    const newAnimals = [
      { kind: "Iguana", count: 2 },
      { kind: "Mouse", count: 5 },
      { kind: "Bat", count: 6 },
    ];
    const minimum = 5;
    const actual = filterByCountMinimum(newAnimals, minimum);
    const expected = [
      { kind: "Mouse", count: 5 },
      { kind: "Bat", count: 6 },
    ];
    expect(actual).toEqual(expected);
  });

  test("should potentially return an empty array if the minimum is high", () => {
    const minimum = 99;
    const actual = filterByCountMinimum(animals, minimum);
    const expected = [];
    expect(actual).toEqual(expected);
  });

  test("should return an empty array if the input is empty", () => {
    const minimum = 5;
    const actual = filterByCountMinimum([], minimum);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});

describe("getMostCommonAnimal()", () => {
  test("should return the animal object that has the highest count", () => {
    const actual = getMostCommonAnimal(animals);
    const expected = { kind: "Chicken", count: 11 };
    expect(actual).toEqual(expected);
  });

  test("should return the first animal object that has the highest count if there are multiples", () => {
    const subarray = animals.slice(3);
    const actual = getMostCommonAnimal(subarray);
    const expected = { kind: "Dog", count: 2 };
    expect(actual).toEqual(expected);
  });

  test("should return null if the input is empty", () => {
    const actual = getMostCommonAnimal([]);
    const expected = null;
    expect(actual).toEqual(expected);
  });

  test("does not use the .sort() method", () => {
    const str = getMostCommonAnimal.toString();
    // Function should have student written code in it.
    expect(str.length).toBeGreaterThan(40);
    // Function should not use the .sort() method.
    expect(str).not.toContain(".sort");
  });
});
