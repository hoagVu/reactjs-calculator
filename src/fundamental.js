//Understanding let && const
const run = () => {
  let a = 2;
  var b = 4;
  console.log(b, a);
  {
    let a = 5;
    console.log(a);
  }
  console.log(a);
  var b = 6;
  console.log(b);
};
run();
// Arrow Function
// Export and Import
// Classes
// Code Challenge
/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/
class Attribute {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}
class Park extends Attribute {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.numTrees = numTrees;
    this.area = area;
  }
  treeDensity() {
    let density = this.numTrees / this.area;
    let result = `This ${this.name} has a tree density of ${density} trees per square km.`;
    return result;
  }
}
class Street extends Attribute {
  constructor(name, buildYear, length, size) {
    super(name, buildYear);
    this.length = length;
    this.name = name;
  }
  streetClassify() {
    var classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(
      `${this.name}, build in ${this.buildYear}, is a ${classification.get(
        this.size
      )} street.`
    );
  }
}
const allParks = [
  new Park('Green Park', 1987, 0.2, 215),
  new Park('National Park', 1894, 2.9, 41),
  new Park('Oak Park', 1953, 0.4, 949),
];
const allStreets = [
  new Street('Ocean Avenue', 1999, 1.1, 4),
  new Street('Evergreen Street', 2008, 2.7, 2),
  new Street('4th Street', 2015, 0.8),
  new Street('Sunset Boulevard', 1982, 2.5, 5),
];
function reportParks(park) {
  console.log('-----PARK REPORT-----');
  park.forEach((current) => {
    console.log(current.treeDensity());
  });
  let ages = park.map(
    (current, index) => new Date().getFullYear() - current.buildYear
  );
  let sum = ages.reduce((accmulator, current, index) => {
    return accmulator + current;
  });
  console.log(
    `Our ${park.length} parks have an average of ${sum / ages.length} years.`
  );
  let compare = park.filter((current) => current.numTrees > 1000);
  if (compare.length === 0) {
    console.log(`There isn't a park which has more than 1000 trees!`);
  } else {
    compare.forEach((current) => {
      console.log(`${current.name} has more than 1000 trees.`);
    });
  }
}
function reportStreet(street) {
  console.log('-----STREET REPORT-----');
  let amountOfLength = street
    .map((current) => current.length)
    .reduce((accmulator, current) => accmulator + current);
  console.log(
    `Our ${
      street.length
    } streets have a total length of ${amountOfLength} km, with an average of ${
      amountOfLength / street.length
    } km.`
  );
}
reportParks(allParks);
reportStreet(allStreets);
// Spread and Rest Operator
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1, 2, 3, 4, 5];
console.log(arr2.length);
//Destructuring
const [, , a] = arr1;
console.log(a);
