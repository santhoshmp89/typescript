(function() {
    
    let a = 'Typescript tutorial';

    console.log(a);

    console.log(`******************************
    ---------   Parameter type check ----------
    *********************************`);
    const circ = (diameter: number) => {
        return diameter * Math.PI
    }
    console.log(circ(10))


    console.log(`******************************
    ---------   Array and Objects ----------
    *********************************`);
    let arr = ['books', 'chairs', 'pens'];
    // arr.push(1);    we cannot push differet type of data which we declared initially
    arr.push('pencil');
    console.log(arr, 'new element added because type of the element is same with declared arra elements')
    // arr = '';      cannot re-assign new data type.

    
    console.log('--------- objects ----------');
    let obj = {
        name: 'shraya',
        age: 2,
    }
    //obj.isInfant = 'sdf'      // cannot add new properties after declaring.    
    console.log(obj)



    console.log(`******************************
    ---------   Explicit type ----------
    *********************************`);
    let character:string;
    let age: number;
    character = 'character';
    age = 10;
    console.log(character, age)
    // age = 'sdff'; cannot set string as it is defined as number

    

    console.log(`******************************
    ---------   Explicit type : Arrays ----------
    *********************************`);
    
    let expliArray: string[] = [];
    // expliArray.push(34)  //cannot push number element as variable declared as array of string
    let mixed: (string|number|boolean)[] = [];
    mixed.push('abc');
    mixed.push(3);
    mixed.push(true);
    console.log('mixed type array', mixed)
    console.log('-------------------------')

    let mixedArrayObj: object[] = [];
    mixedArrayObj.push({id: 1, name: 'a'})
    mixedArrayObj.push({id: 2, name: 'b', ADDRES: 'SFDDSF'})

    console.log(mixedArrayObj)

    let mixedArrayStrict: {name: string, age: number}[] = []
    mixedArrayStrict.push({name: 'santhosh', age: 23})
    console.log(mixedArrayStrict)




    console.log(`******************************
    ---------   Explicit type : Objects ----------
    *********************************`);

    let mixedOne: object;
    mixedOne = {
        name: 'santhosh',
        age: 31
    }
    console.log(mixedOne)
    mixedOne = ['one']; // working because array is also object
    //mixedOne.push('two')
    console.log(mixedOne)
    console.log('-------------------------')
    let mixedTwo: {
        name: string,
        age: number,
        address: string,
    }
    mixedTwo = {
        name: 'kumar',
        age: 31,
        address: 'chikmagalur'
    }
    console.log(mixedTwo)



    console.log(`******************************
    ---------   Explicit type : Any ----------
    *********************************`);

    let anyType: any = 25;
    console.log(anyType);

    anyType = 'santhosh';
    console.log(anyType);

    anyType={name: 'kumar'}
    console.log(anyType);

    let obj2: object = {};

    obj2 = {name: 'santhosh'};
    console.log('obj2')


    
    console.log(`******************************
    ---------   Functions ----------
    *********************************`);

    let func1: Function;
    // func1 = 'asdsad';
    func1 = () => {
        console.log('func1');
    }
    func1();

    let func2 = (a: number, b: number, c?: number|string) => {   // optional parameter
        console.log(a+b, "Optional parameter example")
    }    
    func2(2, 3)



    
})();

