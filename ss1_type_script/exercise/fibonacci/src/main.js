var nFirst = 0;
var nAfter = 1;
var nextTerm = 0;
var total = 0;
for (var i = 1; i <= 20; i++) {
    console.log(nFirst);
    nextTerm = nFirst + nAfter;
    nFirst = nAfter;
    nAfter = nextTerm;
    total = total + nFirst;
}
console.log("total fibonacci: " + total);
