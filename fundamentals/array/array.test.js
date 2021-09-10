'use strict';
let assert = require('assert'),
    array = require('./array');


describe('Array', () => {

    describe('Get chart at', () => {

        it('should return "j"', () => {
            const result = array.getCharAt("Bonjour", 3);
            assert.equal(result, "j");
        });

        it('should return ""', () => {
            const result = array.getCharAt("Bonjour", 22);
            assert.equal(result, "");
        });

    })

    describe('Edit array', () => {

        it('should return [3, 4]', () => {
            const result = array.editAt([4, 4], 0, 3);
            assert.equal(result, [3, 4]);
        });

        it('should return ["hello", "world"]', () => {
            const result = array.editAt(["hello", ""], 1, "world");
            assert.equal(result, ["hello", "world"]);
        });

        it('should return ["hello", "world"]', () => {
            const result = array.editAt(["hello", "world"], 4, "people");
            assert.equal(result, ["hello", "world"]);
        });

    })

    describe('Filter array', () => {

        it('should return [1]', () => {
            const result = array.findPosition([0, 1, 2], 1);
            assert.equal(result, [1]);
        });

        it('should return [5, 5]', () => {
            const result = array.findPosition([0, 5, 8, 2, 5], 5);
            assert.equal(result, [5, 5]);
        });
    });

    describe('Find position in array', () => {

        it('should return "e"', () => {
            const result = array.findPosition("hello", 1);
            assert.equal(result, "e");
        });

        it('should return 0', () => {
            const result = array.findPosition([3, 4], 3);
            assert.equal(result, 0);
        });

        it('should return -1', () => {
            const result = array.findPosition([3, 4], "3");
            assert.equal(result, -1);
        });

    });

    describe('Check element in array', () => {

        it('should return true', () => {
            const result = array.checkElement(["bmw", "honda", "yamaha", "suzuki"], "bmw");
            assert.equal(result, true);
        });

        it('should return false', () => {
            const result = array.checkElement(["bmw", "honda", "yamaha", "suzuki"], "triumph");
            assert.equal(result, false);
        });

    });

    describe('Merge array', () => {

        it('should return [1, 2]', () => {
            const result = array.findPosition([1], [2]);
            assert.equal(result, [1, 2]);
        });

        it('should return ["he", "ll", "o"]', () => {
            const result = array.findPosition(["he", "ll"], ["o"]);
            assert.equal(result, ["he", "ll", "o"]);
        });

    });

});