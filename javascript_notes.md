# JavaScript Notes
Javascript is used for interactive things. Like making an accordion open and close, for instance.

## JavaScript Arrays

Basic Array:

```
const a = [1, 2, 2];
console.log(a[1]);
//OUTPUT: 2

console.log(a.length);
//OUTPUT: 3

```

### Basic Array Functions

push: add to end of array (a.push(4))
pop: remove from end of array (x=a.pop())
slice: return subarray (a.slice(1,-1))
sort: run a function to sort an array in place
values: use to iterate through array (for i of a.values())...
find: find first item satisfied by test function
forEach: run function on each array item (a.forEach(console.log))
map: map an array to a new array (a.map())
filter: removes filtered items (a.filter(i%2))
every: tests if all items match (a.every(i => i < 3))
some: tests if any items match (a.some(i => i < 3))

.length doesn't require parentheses.
