'use strict';
let assert = require('assert'),
    conditional = require('../conditional');


describe('Conditional', () => {

    describe('isEven', () => {

        it('should return true', () => {
            const result = conditional.isEven(2);
            assert.equal(result, true);
        });

        it('should return false', () => {
            const result = conditional.isEven(1);
            assert.equal(result, false);
        });

        it('should return false', () => {
            const result = conditional.isEven("x");
            assert.equal(result, false);
        });

    });

    describe('max', () => {

        it('should return 5', () => {
            const result = conditional.max(2, 5);
            assert.equal(result, 5);
        });

        it('should return 22', () => {
            const result = conditional.max(22, 15);
            assert.equal(result, 22);
        });

    });

    describe('min', () => {

        it('should return 2', () => {
            const result = conditional.min(2, 5);
            assert.equal(result, 2);
        });

        it('should return 15', () => {
            const result = conditional.min(22, 15);
            assert.equal(result, 15);
        });

    });

});