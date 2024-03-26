
let data = [1, 1, 3, 2, 4, 5, 2, 3];
const uniqueElements = new Set();
const duplicates = [];

data.forEach(item => {
  if (uniqueElements.has(item)) {
    duplicates.push(item);
  } else {
    uniqueElements.add(item);
  }
});
let result = [...uniqueElements].sort((a, b) => a - b).join(", ");

console.log(result); 