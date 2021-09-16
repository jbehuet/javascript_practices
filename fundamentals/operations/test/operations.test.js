'use strict';
let assert = require('assert'),
    operations = require('../operations');


describe('Operations', () => {

    describe('Addition', () => {
        it('should return 2', () => {
            const result = operations.addition(1, 1);
            assert.equal(result, 2);
        });

        it('should return ab', () => {
            const result = operations.addition("a", "b");
            assert.equal(result, "ab");
        });
    });

    describe('Substraction', () => {
        it('should return 6', () => {
            const result = operations.substraction(8, 2);
            assert.equal(result, 6);
        });
    });

    describe('Division', () => {
        it('should return 6', () => {
            const result = operations.division(12, 2);
            assert.equal(result, 6);
        });

        it('should return 2.4', () => {
            const result = operations.division(12, 5);
            assert.equal(result, 2.4);
        });
    });

    describe('Multiplication', () => {
        it('should return 42', () => {
            const result = operations.multiplication(7, 6);
            assert.equal(result, 42);
        });
    });

    describe('Get rest', () => {
        it('should return 2', () => {
            const result = operations.getRest(12, 5);
            assert.equal(result, 2);
        });

        it('should return 0', () => {
            const result = operations.getRest(12, 2);
            assert.equal(result, 0);
        });
    });

})