const my_set = new Set();

my_set.add('item 1');
my_set.add('item 2');
my_set.add('item 3');

// no se añaden porque Set no permite valores repetidos.
my_set.add('item 1');
my_set.add('item 1');

console.log(my_set);
