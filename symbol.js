// symbol type
const sym1 = Symbol(4);
console.log(sym1);

const sym2 = Symbol(4);
console.log(sym2);

//each symbol is unique even if they have the same description
// false because Symbol(4) generates a unique id , helps for unique identification
if (sym1 === sym2) {
    console.log("true");
}
else {
    console.log("false");
}