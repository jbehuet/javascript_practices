'use strict';
let assert = require('assert'),
    loops = require('./loops');


describe('Loops', () => {

    describe('Total', () => {
        it('should return 42', () => {
            const result = loops.total([2, 3, 5, 17, 15]);
            assert.equal(result, 42);
        });

        it('should return 22', () => {
            const result = loops.total([2, 3, 17, "hello"]);
            assert.equal(result, 22);
        });
    });


    describe('Total of element', () => {
        it('should return an object with count by element', () => {
            const result = loops.totalOfElement([
                ["orange", "orange", "kiwi", "ananas"],
                ["kiwi", "ananas", "banane", "prune"],
                ["orange", "orange", "orange", "orange"],
                ["orange", "orange", "kiwi", "kiwi"],
                ["prune", "banane", "pamplemousse", "ananas"]
            ]);
            assert.equal(result, {
                "orange": 8,
                "kiwi": 4,
                "ananas": 3,
                "prune": 2,
                "banane": 2,
                "pamplemousse": 1
            });
        });
    });

    describe('Total from object', () => {
        it('should return 10', () => {
            const result = loops.totalFromObject([{ name: "Louis", total: 2 }, { name: "Elodie", total: 5 }, { name: "Dominique", total: 3 }]);
            assert.equal(result, 10);
        });
    });

});