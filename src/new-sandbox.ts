(function() {

    let name: string= 'santhosh';

    console.log(name);

    name = 'kumar';
    console.log(name);

    
    let array1: (string|number)[] = [];

    array1.push('santhosh');
    array1.push(23);
    console.log(array1);
    //array1.push(true);


    let array2: {name: string, age: number, address: string}[] = [];

    array2.push({name: 'santhos', age: 12, address: 'sdsd'})
    console.log(array2)
    array2[0].address = 'bangalore'


    let obj1: {name: string} = {name: ''};

    obj1.name = 'sdfds'

    console.log(obj1)
    
})();