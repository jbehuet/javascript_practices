var test = require('assert');
var toString = require('./string.js');

describe('Number to string', function(){

	it('Should be return true if loaded', function(){
		test.equal(true, true);
	});
    
    it('Should be return zero', function(){
		test.equal(toString(0) , 'zero');
	});
    
    it('Should be return one', function(){
		test.equal(toString(1) , 'one');
	});
    
    it('Should be return two', function(){
		test.equal(toString(2) , 'two');
	});
    
    it('Should be return nineteen', function(){
		test.equal(toString(19) , 'nineteen');
	});
    it('Should be return twenty', function(){
		test.equal(toString(20) , 'twenty');
	});
    
    it('Should be return twenty one', function(){
		test.equal(toString(21) , 'twenty one');
	});
    
});
