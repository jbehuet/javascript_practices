var assert = require('assert');
var vowelConsonantCount = require('./vowelConsonantCount.js');

describe('Count vowel and consonant', function () {

    it('should be loaded', function () {
        assert.equal(true, true);
    });

    it('count ab', function () {
        assert.deepEqual(vowelConsonantCount('ab'), {v:1,c:1});
    });
    
    it('count Ab', function () {
        assert.deepEqual(vowelConsonantCount('Ab'), {v:1,c:1});
    });
    
    it('count hello', function () {
        assert.deepEqual(vowelConsonantCount('hello'), {v:2,c:3});
    });

    it('count empty', function () {
        assert.deepEqual(vowelConsonantCount(''), {v:0,c:0});
    });
    
    it('count null', function () {
        assert.deepEqual(vowelConsonantCount(), {v:0,c:0});
    });
    
    it('count number', function () {
        assert.deepEqual(vowelConsonantCount(3), {v:0,c:0});
    });
    
})