# sum-of-pair

Given an array of integers, return all pairs that add up to S


> Given an array of integers, write a function that returns an array of each pair of integers that add up to 100. The input is
`[0, 1, 100, 99, 0, 10, 90, 30, 55, 33, 55, 75, 50, 51, 49, 50, 51, 49, 51]` and the function should return something like this (the order is not important). `[ [0,100], [1,99], [10,90], [50,50], [49,51] ]`

## Approach 1 
**Time Complexity : O(n)**

```
var sample_data = [0, 1, 100, 99, 0, 10, 90, 30, 55, 33, 55, 75, 50, 51,
                      49, 50, 51, 49, 51];

let sum = 100;
var found = {};
var results = [];
for(var i of sample_data) {
    if (found[sum - i] === true) {
        results.push({
            a: i,
            b: sum - i
        });
    }
    found[i] = true;
}
```

## Approach 2
### Brute Force Solution:

A simple brute force solution is be traverse each element and check if there’s another number in the array which can be added to it to give sum.

**Time Complexity : O(n2)** 
</br> 
**Auxiliary Space : O(1)**

```
var arr = [0, 1, 100, 99, 0, 10, 90, 30, 55, 33, 55, 75, 50, 51,
                      49, 50, 51, 49, 51];
let sum = 100;
var results = [];

for (let i of arr)
        for (let j of arr)
            if (i + j == sum)
              results.push({
                a: i,
                b: j
              });
```
