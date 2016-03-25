var assert = require('assert');
var XTree = require('./xtree.js');

describe('Oh Oh Oh Merry Christmas', function(){
  
    it('Should be loaded', function(){
        assert.equal(true, true);
    })
    
    xit('Should be draw a tree with one row', function(){
        var xtree = new XTree(1);
        assert.equal(xtree.draw(), '*');
    })
    
    xit('Should be draw a tree with 2 rows', function(){
        var xtree = new XTree(2);
        assert.equal(xtree.draw(), ' * \n***');
    })
        
    xit('Should be draw a tree with 3 rows', function(){
        var xtree = new XTree(3);
        assert.equal(xtree.draw(), '  *  \n *** \n*****');
    })
    
    xit('10', function(){
        var xtree = new XTree(10);
        assert.equal(xtree.draw(), "         *         \n        ***        \n       *****       \n      *******      \n     *********     \n    ***********    \n   *************   \n  ***************  \n ***************** \n*******************");
    })
    
})