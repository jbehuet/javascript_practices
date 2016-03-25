/*

Informations : https://fr.wikipedia.org/wiki/Chiffrement_par_décalage

*/

var assert = require('assert');
var Caesar = require('./caesar');

describe('Roman Encryption', function () {

    it('should be loaded', function () {
        assert.equal(true, true);
    })
    
    xit('A crypt to D', function () {
        assert.equal(Caesar.encrypt('A'), 'D');
    })
    
    xit('a crypt to d', function () {
        assert.equal(Caesar.encrypt('a'), 'd');
    })
    
    xit('Ab crypt to De', function () {
        assert.equal(Caesar.encrypt('Ab'), 'De');
    })
    
    xit('Jerome crypt to Mhurph', function () {
        assert.equal(Caesar.encrypt('Jerome'), 'Mhurph');
    })
    
    xit('Xylophone crypt to Aborskrqh', function () {
        assert.equal(Caesar.encrypt('Xylophone'), 'Aborskrqh');
    })
    
    xit('Aborskrqh decrypt to Xylophone', function () {
        assert.equal(Caesar.decrypt('Aborskrqh'), 'Xylophone');
    })
    
})
