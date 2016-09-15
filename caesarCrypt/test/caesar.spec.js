/*

Informations : https://fr.wikipedia.org/wiki/Chiffrement_par_décalage

*/
'use strict';
let assert = require('assert'),
    Caesar = require('../caesar');

describe('Roman Encryption', () => {

    it('should be loaded', () => {
        assert.equal(true, true);
    })

    xit('A crypt to D', () => {
        assert.equal(Caesar.encrypt('A'), 'D');
    })

    xit('a crypt to d', () => {
        assert.equal(Caesar.encrypt('a'), 'd');
    })

    xit('Ab crypt to De', () => {
        assert.equal(Caesar.encrypt('Ab'), 'De');
    })

    xit('Jerome crypt to Mhurph', () => {
        assert.equal(Caesar.encrypt('Jerome'), 'Mhurph');
    })

    xit('Xylophone crypt to Aborskrqh', () => {
        assert.equal(Caesar.encrypt('Xylophone'), 'Aborskrqh');
    })

    xit('Aborskrqh decrypt to Xylophone', () => {
        assert.equal(Caesar.decrypt('Aborskrqh'), 'Xylophone');
    })

})
