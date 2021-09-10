'use strict';
let test = require('assert'),
    hamming = require('../hamming.js');

describe('Distance de hamming', () => {

    it('Should be return true if loaded', () => {
        test.equal(true, true);
    });

    xit('Should be return 0', () => {
        test.equal(hamming.compare("1", "1"), 0);
    });

    xit('Should be return 1', () => {
        test.equal(hamming.compare("1", "0"), 1);
    });

    xit('Should be return -1', () => {
        test.equal(hamming.compare("10", "0"), -1);
    });

    xit('Should be return 2', () => {
        test.equal(hamming.compare("10", "01"), 2);
    });

    xit('Should be return 3', () => {
        test.equal(hamming.compare("101", "010"), 3);
    });

    xit('Should be return 3', () => {
        test.equal(hamming.compare("10100", "01000"), 3);
    });

    xit('Should be return 4', () => {
        test.equal(hamming.compare("10100", "01010"), 4);
    });

});
