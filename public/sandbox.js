"use strict";
(function () {
    var a = 'Typescript tutorial';
    console.log(a);
    console.log("******************************\n    ---------   Parameter type check ----------\n    *********************************");
    var circ = function (diameter) {
        return diameter * Math.PI;
    };
    console.log(circ(10));
    console.log("******************************\n    ---------   Array and Objects ----------\n    *********************************");
    var arr = ['books', 'chairs', 'pens'];
    // arr.push(1);    we cannot push differet type of data which we declared initially
    arr.push('pencil');
    console.log(arr, 'new element added because type of the element is same with declared arra elements');
    // arr = '';      cannot re-assign new data type.
    console.log('--------- objects ----------');
    var obj = {
        name: 'shraya',
        age: 2,
    };
    //obj.isInfant = 'sdf'      // cannot add new properties after declaring.    
    console.log(obj);
    console.log("******************************\n    ---------   Explicit type ----------\n    *********************************");
    var character;
    var age;
    character = 'character';
    age = 10;
    console.log(character, age);
    // age = 'sdff'; cannot set string as it is defined as number
    console.log("******************************\n    ---------   Explicit type : Arrays ----------\n    *********************************");
    var expliArray = [];
    // expliArray.push(34)  //cannot push number element as variable declared as array of string
    var mixed = [];
    mixed.push('abc');
    mixed.push(3);
    mixed.push(true);
    console.log('mixed type array', mixed);
    console.log('-------------------------');
    var mixedArrayObj = [];
    mixedArrayObj.push({ id: 1, name: 'a' });
    mixedArrayObj.push({ id: 2, name: 'b', ADDRES: 'SFDDSF' });
    console.log(mixedArrayObj);
    var mixedArrayStrict = [];
    mixedArrayStrict.push({ name: 'santhosh', age: 23 });
    console.log(mixedArrayStrict);
    console.log("******************************\n    ---------   Explicit type : Objects ----------\n    *********************************");
    var mixedOne;
    mixedOne = {
        name: 'santhosh',
        age: 31
    };
    console.log(mixedOne);
    mixedOne = ['one']; // working because array is also object
    //mixedOne.push('two')
    console.log(mixedOne);
    console.log('-------------------------');
    var mixedTwo;
    mixedTwo = {
        name: 'kumar',
        age: 31,
        address: 'chikmagalur'
    };
    console.log(mixedTwo);
    console.log("******************************\n    ---------   Explicit type : Any ----------\n    *********************************");
    var anyType = 25;
    console.log(anyType);
    anyType = 'santhosh';
    console.log(anyType);
    anyType = { name: 'kumar' };
    console.log(anyType);
    var obj2 = {};
    obj2 = { name: 'santhosh' };
    console.log('obj2');
    console.log("******************************\n    ---------   Functions ----------\n    *********************************");
    var func1;
    // func1 = 'asdsad';
    func1 = function () {
        console.log('func1');
    };
    func1();
    var func2 = function (a, b, c) {
        console.log(a + b, "Optional parameter example");
    };
    func2(2, 3);
    var func3 = function (a, b) {
        return a + b;
    };
    var addition = func3(3, 4);
    console.log(addition);
})();
