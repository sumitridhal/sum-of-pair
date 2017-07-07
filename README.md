# sum-of-pair

Given an array of integers, return all pairs that add up to S


> Given an array of integers, write a function that returns an array of each pair of integers that add up to 100. The input is
`[0, 1, 100, 99, 0, 10, 90, 30, 55, 33, 55, 75, 50, 51, 49, 50, 51, 49, 51]` and the function should return something like this (the order is not important). `[ [0,100], [1,99], [10,90], [50,50], [49,51] ]`

## Code

```
var sample_data = [0, 1, 100, 99, 0, 10, 90, 30, 55, 33, 55, 75, 50, 51,
                      49, 50, 51, 49, 51];

var found = {};
var results = [];
for(var i of sample_data) {
    if (found[100 - i] === true) {
        results.push({
            a: i,
            b: 100 - i
        });
    }
    found[i] = true;
}
```
