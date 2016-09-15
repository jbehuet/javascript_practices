'use strict';
let assert = require('assert'),
    XTree = require('../xtree');

describe('Oh Oh Oh Merry Christmas', () => {

    it('Should be loaded', () => {
        assert.equal(true, true);
    })

    xit('Should be draw a tree with one row', () => {
        var xtree = new XTree(1);
        assert.equal(xtree.draw(), '*');
    })

    xit('Should be draw a tree with 2 rows', () => {
        var xtree = new XTree(2);
        assert.equal(xtree.draw(), ' * \n***');
    })

    xit('Should be draw a tree with 3 rows', () => {
        var xtree = new XTree(3);
        assert.equal(xtree.draw(), '  *  \n *** \n*****');
    })

    xit('10', () => {
        var xtree = new XTree(10);
        assert.equal(xtree.draw(), "         *         \n        ***        \n       *****       \n      *******      \n     *********     \n    ***********    \n   *************   \n  ***************  \n ***************** \n*******************");
    })

})
