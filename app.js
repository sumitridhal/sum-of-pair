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
