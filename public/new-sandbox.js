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
    var Invoice = /** @class */ (function () {
        function Invoice(client, ammount, decs) {
            this.client = client;
            this.ammount = ammount;
            this.decs = decs;
        }
        Invoice.prototype.showDetails = function () {
            return this.client + " has " + this.ammount + " for " + this.decs;
        };
        return Invoice;
    }());
    var invoiceOne = new Invoice('Intel', 400, 'Internal application');
    var invoiceTwo = new Invoice('BMW', 500, 'for development project');
    var invoices = [];
    invoices.push(invoiceOne);
    invoices.push(invoiceTwo);
    //invoices.push({name: 'dummy'});    // cannot add because type of array in Invoices
})();
