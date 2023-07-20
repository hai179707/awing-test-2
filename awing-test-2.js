// Giải pháp được tham khảo tại geeksforgeeks.org:
// Initialize a variable maxSize = 1000002 which stores the max size.
// Initialize an array total_cost_at_i[] of size maxSize which stores the total cost for similar arr[i].
// Now traverse through the array and add the costs of all similar elements in the array total_cost_at_i[].
// Take the variable sum=0  to store the sum of cost till i.
// Declare the two arrays prefix for storing the cost to convert all the previous i-1 elements to i and suffix to store the cost of converting all the elements from i+1 to maxSize to i.
// Now take the minimum of prefix[i] + suffix[i] at every index and store the minimum in the min_cost variable.

const INT_MAX = Math.pow(2, 53) - 1;

const minCost = (arr, cost, n) => {
  let maxSize = Math.pow(10, 6);

  let totalCostAtI = new Array(maxSize).fill(0);

  for (let i = 0; i < n; i++) {
    totalCostAtI[arr[i]] += cost[i];
  }

  let prefix = new Array(maxSize).fill(0);
  let suffix = new Array(maxSize).fill(0);

  let sum = 0;
  for (let i = 1; i < maxSize; i++) {
    prefix[i] = prefix[i - 1] + sum;
    sum = sum + totalCostAtI[i];
  }

  sum = 0;
  for (let i = maxSize - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] + sum;
    sum = sum + totalCostAtI[i];
  }

  let min_cost = INT_MAX;
  for (let i = 0; i < maxSize; i++) {
    min_cost = Math.min(min_cost, prefix[i] + suffix[i]);
  }
  return min_cost;
};

let arr = [1, 3, 5, 2];
let cost = [2, 3, 1, 14];
let n = arr.length;

console.log(minCost(arr, cost, n));
