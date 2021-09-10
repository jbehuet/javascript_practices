'use strict';
let assert = require('assert'),
    count = require('../count');

describe('Compter les points au tennis', () => {

    it('should be loaded', () => {
        assert.equal(true, true);

    });

    xit('15, 0', () => {
        assert.deepEqual(count('1'), [15, 0]);

    });

    xit('0, 15', () => {
        assert.deepEqual(count('2'), [0, 15]);

    });

    xit('15, 15', () => {
        assert.deepEqual(count('12'), [15, 15]);

    });

    xit('30, 15', () => {
        assert.deepEqual(count('112'), [30, 15]);

    });

    xit('15, 15', () => {
        assert.deepEqual(count('21'), [15, 15]);

    });


});
