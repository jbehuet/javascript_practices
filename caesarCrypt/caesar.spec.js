/*

Informations : https://fr.wikipedia.org/wiki/Chiffrement_par_décalage

*/

var assert = require('assert');
var Caesar = require('./caesar');

describe('Roman Encryption', function () {

    it('should be loaded', function () {
        assert.equal(true, true);
    })
    
    it('A crypt to D', function () {
        assert.equal(Caesar.encrypt('A'), 'D');
    })
    
    it('a crypt to d', function () {
        assert.equal(Caesar.encrypt('a'), 'd');
    })
    
    it('Ab crypt to De', function () {
        assert.equal(Caesar.encrypt('Ab'), 'De');
    })
    
    it('Jerome crypt to Mhurph', function () {
        assert.equal(Caesar.encrypt('Jerome'), 'Mhurph');
    })
    
    it('Xylophone crypt to Aborskrqh', function () {
        assert.equal(Caesar.encrypt('Xylophone'), 'Aborskrqh');
    })
    
    it('Aborskrqh decrypt to Xylophone', function () {
        assert.equal(Caesar.decrypt('Aborskrqh'), 'Xylophone');
    })
    
})
