'use strict';
let assert = require('assert');
let scramble = require('../scramble');

describe('Cambrige Word Scramble', () => {

    it('LOADED', () => {
        assert.equal(true, true);
    })

    xit('Hello', () => {
        assert.equal(scramble('hello')[0], 'h');
    })

    xit('Hello (2)', () => {
        assert.equal(scramble('hello')[4], 'o');
    })

    xit('London', () => {
        assert.equal(scramble('london').length, 'london'.length);
        assert.equal(scramble('london')[0], 'l');
        assert.equal(scramble('london')[5], 'n');
    })

    xit('Hello (3)', () => {
        assert.equal(scramble('hello').length, 'hello'.length);
        assert.notEqual(scramble('hello'), 'hello');
    })

    xit('London 2', () => {
        assert.equal(scramble('london').length, 'london'.length);
        assert.notEqual(scramble('london'), 'london');
    })

    xit('alex', () => {
        assert.notEqual(scramble('alex'), 'alex');
    })

    xit('kayak', () => {
        assert.notEqual(scramble('kayak'), 'kayak');
    })

})
