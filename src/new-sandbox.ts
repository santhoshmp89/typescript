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


    // let 3: {name: string, age: number, address: string}[] = [];

    // 3.push({name: 'santhos', age: 12, address: 'sdsd'})
    // console.log(3)
    // 3[0].address = 'bangalore'


    let obj1: {name: string} = {name: ''};

    obj1.name = 'sdfds'

    console.log(obj1)




    class Invoice {
        constructor(
            readonly client: string,
            private ammount: number,
            public decs: string,
        ){

        }

        showDetails () {
            return`${this.client} has ${this.ammount} for ${this.decs}`
        }
    }


    let invoiceOne = new Invoice('Intel', 400, 'Internal application');
    let invoiceTwo = new Invoice('BMW', 500, 'for development project');

    let invoices: Invoice[] = [];
    invoices.push(invoiceOne);
    invoices.push(invoiceTwo);
    //invoices.push({name: 'dummy'});    // cannot add because type of array in Invoices


    let array3: (string|number)[] = [];
    array3.push('sdfdsf');
    array3.push(32);
})();