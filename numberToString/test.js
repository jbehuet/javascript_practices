var test = require('assert');
var toString = require('./string.js');

describe('Number to string', function(){

	it('Should be return true if loaded', function(){
		test.equal(true, true);
	});
    
    xit('Should be return zero', function(){
		test.equal(toString(0) , 'zero');
	});
    
    xit('Should be return one', function(){
		test.equal(toString(1) , 'one');
	});
    
    xit('Should be return two', function(){
		test.equal(toString(2) , 'two');
	});
    
    xit('Should be return nineteen', function(){
		test.equal(toString(19) , 'nineteen');
	});
    
    xit('Should be return twenty', function(){
		test.equal(toString(20) , 'twenty');
	});
    
    xit('Should be return twenty one', function(){
		test.equal(toString(21) , 'twenty one');
	});
    
});
