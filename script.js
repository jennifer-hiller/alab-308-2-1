// starting vars
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
console.log("area", area);
let week = 1;
let plantCount = 20;
const plantSize = 0.8;
let totalSize = plantCount * plantSize;
const lowerLimit = area * 0.5;
const upperLimit = area * 0.8;
console.log("lowerLimit", lowerLimit, "upperLimit", upperLimit);

// check to see what the status is on the plants and if they need to be pruned, monitored, or planted
console.log(`Week ${week}:`);
console.log(`Total plant size is ${totalSize}`);
if (totalSize > upperLimit) {
  console.log("Pruned");
} else if (totalSize > lowerLimit && totalSize < upperLimit) {
  console.log("Monitored");
} else {
  console.log("Planted");
}
week = 2;
console.log(`Week ${week}:`);
plantCount += plantCount;
totalSize = plantCount * plantSize;
console.log(`Total plant size is ${totalSize}`);
if (totalSize > upperLimit) {
  console.log("Pruned");
} else if (totalSize > lowerLimit && totalSize < upperLimit) {
  console.log("Monitored");
} else {
  console.log("Planted");
}
week = 3;
console.log(`Week ${week}:`);
plantCount += plantCount;
totalSize = plantCount * plantSize;
console.log(`Total plant size is ${totalSize}`);
if (totalSize > upperLimit) {
  console.log("Pruned");
} else if (totalSize > lowerLimit && totalSize < upperLimit) {
  console.log("Monitored");
} else {
  console.log("Planted");
}

// if there are 100 plants and an expanded garden
plantCount = 100;
totalSize = plantCount * plantSize;
// not pruning after 10 weeks (not using a loop)
plantCount += plantCount;
plantCount += plantCount;
plantCount += plantCount;
plantCount += plantCount;
plantCount += plantCount;
plantCount += plantCount;
plantCount += plantCount;
plantCount += plantCount;
plantCount += plantCount;
totalSize = plantCount * plantSize;
console.log(
  `You will need a ${
    totalSize / PI
  } meter radius after week 10 for ${plantCount} plants`
);

// now if there are 100 plants in the original area
try {
  plantCount = 100;
  totalSize = plantCount * plantSize;
  if (totalSize > upperLimit) {
    throw `you would need a ${
      totalSize / PI
    } meter radius for ${plantCount} plants`;
  }
} catch (e) {
  console.error(e);
}
