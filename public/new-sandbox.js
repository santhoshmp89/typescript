"use strict";
(function () {
    var name = 'santhosh';
    console.log(name);
    name = 'kumar';
    console.log(name);
    var array1 = [];
    array1.push('santhosh');
    array1.push(23);
    console.log(array1);
    //array1.push(true);
    var array2 = [];
    array2.push({ name: 'santhos', age: 12, address: 'sdsd' });
    console.log(array2);
    array2[0].address = 'bangalore';
    var obj1 = { name: '' };
    obj1.name = 'sdfds';
    console.log(obj1);
})();
