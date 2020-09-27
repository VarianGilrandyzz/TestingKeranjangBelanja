/*
    Gunakan file ini untuk membuat test case dengan Jest
*/
const helper = require('../helpers');

test ('Jika qty adalah 4, ketika dikurangi 1 jadi = 3',() =>{
    expect(helper.decrementQty(4)).toBe(3);
});

test ('Jika qty adalah 5, ketika ditambah 1 jadi = 6',() =>{
    expect(helper.incrementQty(5)).toBe(6);
});
