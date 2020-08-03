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

    let func2 = (a: number, b: number, c?: number|string): void => {   // optional parameter
        console.log(a+b, "Optional parameter example")
    }    
    func2(2, 3)

    let func3 = (a: number, b: number): number => {
        return a+b;
    }
    let addition = func3(3,4);
    console.log(addition)

    console.log(`
    ******************************
    ---------   type aliases ----------
    *********************************`);
    type StringOrNum = string|number
    type objWithItem = {
        name: string,
        uid: StringOrNum
    }

    let greet = (uid: StringOrNum, item: objWithItem) => {
        console.log(`${item.name} has a UID of ${item.uid}`)
    }

    let greetAgain = (uid: StringOrNum, item: objWithItem) => {
        console.log(`${item.name} has a UID of ${item.uid}`)
    }



    console.log(`
    ******************************
    ---------   Function signatures ----------
    *********************************`);
    //Example 1
    let funcSign: (a: number, b:number) => void;
    funcSign = (numOne: number, numTwo: number) => {
        console.log(numOne + numTwo);
    }

    //Example 2
    let funcSign2: (a:number, b:number, type: string) => number;
    funcSign2 = (num1: number, num2: number, type: string) => {
        if(type === 'add') {
            return num1 + num2;
        } else {
            return num1 - num2;
        }
    }

    console.log(funcSign2(2, 3, 'add'))

    console.log(`
    ******************************
    ---------   DOM and type casting ----------
    *********************************`);

    //let anchorElem = document.querySelector('a')!;   // 1st option
    let anchorElem = document.querySelector('a') as HTMLAnchorElement;  //  2nd option
    console.log(anchorElem.href)

    let head2 = document.querySelector('.heading') as HTMLHeadingElement;
    console.log(head2.innerHTML)


    console.log(`
    ******************************
    ---------   Classes  ----------
    *********************************`);

    class Invoice {
        // Example one
        // name: string;
        // age: number;
        // address: string; 

        // constructor(a: string, b: number, c: string){
        //     this.name = a;
        //     this.age = b;
        //     this.address = c;
        // }

        // Example Two
        constructor(
            public name: string,
            public age: number,
            public address: string,
        ){}

        showResult = () => {
            console.log(this.name, this.age, this.address)
        }
    }

    let invoiceOne = new Invoice('santhosh', 31, 'Bangalore');
    invoiceOne.showResult()

})();

