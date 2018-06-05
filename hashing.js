//hashing.js

/*
    functions:[
        computing hash values, 
        insert data into hash table, 
        deriving data from hash table,
        display distribution of data in hash table
    ]
    
*/

function HashTable(){
    this.table =        new Array(137);
    this.simpleHash =   simpleHash;
    this.showDistro =   showDistro;
    this.put =          put;
}